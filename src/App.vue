<template>
    <Transition name="fade">
        <Loading v-if="load"/>
    </Transition>

    <Transition name="fade">
        <StartScreen v-if="!load && !beats.ready && !beats.started"/>
    </Transition>
    
    <Transition name="fade">
        <SceneHandler v-if="beats.ready"/>
    </Transition>

    <!-- ui layer -->
    <Transition name="fade">
        <UILayout v-if="beats.ready"/>
    </Transition>

    <BGAudioHandler v-if="beats.ready"/>
    <KeyboardControlHandler v-if="beats.ready"/>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue';
    import { useAssetsStore } from './stores/ImageAssets';
    import BGAudioHandler from './components/Handlers/BGAudioHandler.vue';
    import SceneHandler from './components/Handlers/SceneHandler.vue';
    import Loading from './components/Loading.vue';
    import StartScreen from './components/StartScreen.vue';
    import { useBeatCountStore } from './stores/BeatCount';
    import Sleep from './utils/Sleep';
    import UILayout from './components/UI/UILayout.vue';
    import KeyboardControlHandler from './components/Handlers/KeyboardControlHandler.vue';

    // -- get stores
    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    // -- set app states
    const load = ref(true);

    onMounted(async () => {
        try {
            await Sleep(500);
            // -- attempt to load assets
            await assets.load();
            // -- log when assets completed and set app to ready
            console.log("assets loaded.")
            load.value = false;
        } catch (err) {
            // -- log error and set app error state if failed to load assets
            console.error(err);
        }
    })
</script>