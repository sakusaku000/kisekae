<template>
    <Transition name="fade">
        <NewLoading v-if="beats.activeView === 'load'"/>
    </Transition>

    <Transition name="fade">
        <StartScreen v-if="beats.activeView === 'start'"/>
    </Transition>
    
    <Transition name="fade">
        <SceneHandler v-if="beats.activeView === 'main'"/>
    </Transition>

    <!-- ui layer -->
    <Transition name="fade">
        <UILayout v-if="beats.activeView === 'main'"/>
    </Transition>

    <BGAudioHandler v-if="beats.activeView === 'main'"/>
    <KeyboardControlHandler v-if="beats.activeView === 'main'"/>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue';
    import BGAudioHandler from './components/Handlers/BGAudioHandler.vue';
    import SceneHandler from './components/Handlers/SceneHandler.vue';
    import NewLoading from './components/Load/NewLoading.vue';
    import StartScreen from './components/StartScreen.vue';
    import { useBeatCountStore } from './stores/BeatCount';
    import UILayout from './components/UI/UILayout.vue';
    import KeyboardControlHandler from './components/Handlers/KeyboardControlHandler.vue';

    // -- get stores
    const beats = useBeatCountStore();

    onMounted(async () => {
        beats.setAppView("load");
    })
</script>