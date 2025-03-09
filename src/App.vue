<template>
    <Transition name="fade">
        <Loading v-if="load"/>
    </Transition>

    <Transition name="fade">
        <StartScreen v-if="!load && !beats.ready"/>
    </Transition>
    
    <Transition name="fade">
        <SceneHandler v-if="beats.ready"/>
    </Transition>

    <BGAudioHandler v-if="beats.ready"/>
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

    // -- get stores
    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    // -- set app states
    const load = ref(true);

    onMounted(async () => {
        try {
            await Sleep(1000);
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

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: .8s ease;
    }
    .fade-enter-active {
        transition-delay:0.9s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    a {
        @apply underline;
    }
</style>