<template>
    <ImagePatternLoop :imageUrl="assets.image.get('bg_faceplates')" :width="1600" :height="720" direction="diag-tl"/>

    <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-slide"><img :src="currentAsset"></div>
    </div>
</template>

<script lang="ts" setup>
    import ImagePatternLoop from '@/components/Backgrounds/ImagePatternLoop.vue';
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';
    import { ref, watch } from 'vue';
    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    const props = defineProps<{
        variation:"kisekae"|"date"
    }>();

    // -- cycle between assets
    const currentAsset = ref(assets.image.get(`dateflash_${props.variation}0`));
    let num = 0;
    const cycle = () => {
        num === 0 ? num = 1 : num = 0;
        currentAsset.value = assets.image.get(`dateflash_${props.variation}${num}`);
    }
    watch(() => beats.count.half, cycle);
</script>

<style scoped>
    .text-slide {
        animation:text-slide 4s linear forwards;
    }
    @keyframes text-slide {
        from {
            transform:translateX(70vw)
        }
        to {
            transform:translateX(-40vw)
        }
    }
</style>