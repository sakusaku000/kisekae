<template>
    <ImagePatternLoop :imageUrl="assets.image.get('bg_faceplates')" :width="1600" :height="720" direction="diag-br"/>

    <!-- 3DS Rows -->
    <DSRowContainer/>

    <!-- Kyary Overlay 1 -->
    <div class="kyary" :style="`background-image:url(${assets.image.get('kyary_fullscreen_01')})`" v-if="!kyarySwitch"></div>
    <!-- Kyary overlay 2 -->
    <div class="kyary" :style="`background-image:url(${assets.image.get('kyary_fullscreen_02')})`" v-if="kyarySwitch"></div>
</template>

<script setup lang="ts">
    import { useAssetsStore } from '@/stores/ImageAssets';
    import ImagePatternLoop from '../../Backgrounds/ImagePatternLoop.vue';
    import { ref, watch } from 'vue';
    import { useBeatCountStore } from '@/stores/BeatCount';
    import DSRowContainer from './DSRowContainer.vue';

    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    // -- set switch for kyary images
    const kyarySwitch = ref(false);

    // -- toggle switch on each beat
    watch(() => beats.count.second, () => {
        kyarySwitch.value = !kyarySwitch.value
    });
</script>

<style scoped>
    .kyary {
        position:absolute;
        inset:0px;
        top:100px;
        background-size:contain;
        background-position:bottom;
        background-repeat: no-repeat;
        animation:pop .2s ease forwards;
        z-index:1000;
    }
    @keyframes pop {
        0% {
            transform:scale(1.06)
        }
        50% {
            transform:scale(1.03)
        }
        100% {
            transform:scale(1.06)
        }
    }
</style>