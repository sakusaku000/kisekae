<template>
    <div class="absolute inset-0">
        <div class="absolute inset-[5px] translate-y-[1px] bg-cover fp z-10" :style="`background-image:url(${faceplateAsset});`"></div>
    </div>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { useAssetsStore } from '@/stores/ImageAssets';
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { watch } from 'vue';
    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    const props = defineProps<{height:number}>();

    // -- pick random number between 0-72
    const num = Math.floor(Math.random()*72);
    // -- get faceplate based on random number
    const faceplateAsset = assets.image.get(`fp${num}`);

    // -- push faceplates on beat, delayed slightly
    let x:number = 0;
    watch(() => beats.count.second, () => {
        setTimeout(() => {
            gsap.to(".fp", {x:x+=175, duration:.5, ease:"power1"})
        }, 455);
    })
</script>