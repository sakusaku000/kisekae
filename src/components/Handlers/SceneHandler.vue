<template>
    <div class="fixed inset-0 select-none pointer-events-none">
        <!-- Test Colour cycle -->
        <TestColourCycle v-if="activeScene === 'TestColourCycle'"/>
        <!-- Kyary Full Screen -->
        <KyaryFullScreen v-if="activeScene === 'KyaryFullScreen'"/>
        <!-- Kisekae Flash -->
        <DateFlash :variation="'kisekae'" v-if="activeScene === 'KisekaeFlash'"/>
        <!-- Date Flash -->
        <DateFlash :variation="'date'" v-if="activeScene === 'DateFlash'"/>
        <!-- Character Showcase -->
        <CharacterShowcase v-if="activeScene === 'CharacterShowcase'"/>
        <!-- Video (1) -->
        <VideoPlayer :videoId="0" v-if="activeScene === 'Video01'"/>
        <!-- Video (2) -->
        <VideoPlayer :videoId="1" v-if="activeScene === 'Video02'"/>
        <!-- Faceplate showcase -->
        <FaceplateShowcaseFS v-if="activeScene === 'FaceplateShowcaseFS'"/>
    </div>
</template>

<script lang="ts" setup>
    import { ref, watch, type Ref } from 'vue';
    import { useBeatCountStore } from '@/stores/BeatCount';

    // -- access beat counts
    const beats = useBeatCountStore();

    // -- import scene components
    // Test: Background Colour Cycle
    import TestColourCycle from '../Scenes/TestColourCycle.vue';
    // Kyary Full Screen
    import KyaryFullScreen from '../Scenes/KyaryFullScreen/KyaryFullScreen.vue';
    // Date Flash
    import DateFlash from '../Scenes/DateFlash/DateFlash.vue';
    // Character Showcase
    import CharacterShowcase from '../Scenes/CharacterShowcase/CharacterShowcase.vue';
    // Video Player
    import VideoPlayer from '../Scenes/VideoPlayer/VideoPlayer.vue';
    // Faceplate Showcase Full Screen
    import FaceplateShowcaseFS from '../Scenes/FaceplateShowcaseFS/FaceplateShowcaseFS.vue';

    // -- set active scene
    let activeScene:Ref<string,string> = ref("");

    // -- define scene list that will be used
    let scenes:Array<string> = [
        "KyaryFullScreen",
        "CharacterShowcase",
        "KisekaeFlash",
        "FaceplateShowcaseFS",
        "Video01",
        "DateFlash",
        "Video02",
        "KisekaeFlash",
    ];

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