<template>
    <div class="fixed inset-0">
        <ImagePatternLoop :imageUrl="assets.image.get('bg_faceplates')" :width="1600" :height="720" :reverse="true"/>

        <div class="absolute inset-0 flex flex-col justify-center items-center">
            <button @click="beats.setAppReady()">
                <PinkBtn text="Start!"/>
            </button>
        </div>

        <div class="absolute bottom-10 left-0 right-0 flex items-center justify-center">
            <p class="text-center">
                Recreation project by <a href="https://saku.dev" target="_blank">oneiricsaku</a><br>
                Original site by Nintendo © 2014<br>
                Song by Kyary Pamyu Pamyu
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useBeatCountStore } from '@/stores/BeatCount';
    import PinkBtn from './Common/PinkBtn.vue';
    import { useAssetsStore } from '@/stores/ImageAssets';
import ImagePatternLoop from './Backgrounds/ImagePatternLoop.vue';

    // -- get beats store
    const beats = useBeatCountStore();

    // -- get assets store
    const assets = useAssetsStore();
</script>