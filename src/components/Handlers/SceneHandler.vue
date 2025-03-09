<template>
    <div class="fixed inset-0 select-none pointer-events-none">
        <!-- Test Colour cycle -->
        <TestColourCycle v-if="activeScene === 'TestColourCycle'"/>
        <!-- Kyary Full Screen -->
        <KyaryFullScreen v-if="activeScene === 'KyaryFullScreen'"/>
    </div>
</template>

<script lang="ts" setup>
    import { ref, watch, type Ref } from 'vue';
    import ShuffleArray from '@/utils/ShuffleArray';
    import { useBeatCountStore } from '@/stores/BeatCount';

    // -- access beat counts
    const beats = useBeatCountStore();

    // -- import scene components
    // Test: Background Colour Cycle
    import TestColourCycle from '../Scenes/TestColourCycle.vue';
    // Kyary Full Screen
    import KyaryFullScreen from '../Scenes/KyaryFullScreen/KyaryFullScreen.vue';

    // -- set active scene
    let activeScene:Ref<string,string> = ref("");

    // -- define scene list that will be used
    let scenes:Array<string> = [
        "KyaryFullScreen",
        "TestColourCycle"
    ];
    // -- shuffle scenes array to randomise order
    scenes = ShuffleArray(scenes);

    // -- cycle through scenes function
    const cycleScene = () => {
        // -- get first scene in array currently
        const scene = scenes.shift();

        // -- set as active scene
        activeScene.value = scene;
        console.log(`New Scene: ${scene}`);

        // -- place back into end of array
        scenes.push(scene);
    };

    // -- Cycle scene immediately, and then listen for every beat loop to cycle new scenes
    cycleScene();
    watch(() => beats.count.second, (beat) => {
        if (beat === 0) cycleScene();
    })
</script>