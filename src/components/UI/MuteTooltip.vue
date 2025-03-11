<template>
    <div class="absolute bottom-24 left-[45px] -right-[140px] h-28 bg-neutral-900 select-none pointer-events-none p-1 rounded-3xl scale-0 -translate-x-24 translate-y-16 group-hover:scale-150 group-hover:translate-x-0 group-hover:translate-y-0 sharp-shadow hint">
        <ImagePatternLoop 
        :imageUrl="assets.image.get('bg_dot')"
        bg-color="f1f1f1"
        :width="200*.2"
        :height="184*.2"
        direction="diag-tl"
        :duration="4"
        class="!inset-2 rounded-2xl"
        />

        <div class="absolute -top-3 left-[22px]">
            <img class="w-20" :src="assets.image.get('ui_hinto')">
        </div>
        <div class="absolute inset-2 ml-4 flex flex-col justify-center">
            <p>Press <b>M</b> to mute</p>
            <p>Press <b>P</b> to pause</p>
            <p>Press <b>R</b> to reset</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useAssetsStore } from '@/stores/ImageAssets';
    import ImagePatternLoop from '../Backgrounds/ImagePatternLoop.vue';
    const assets = useAssetsStore();
</script>

<style scoped>
    .hint {
        transition-duration:200ms;
        transition-timing-function: cubic-bezier(0.860, 0.000, 0.070, 1.000);
    }
</style>