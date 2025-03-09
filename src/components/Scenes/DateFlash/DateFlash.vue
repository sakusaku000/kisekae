<template>
    <ImagePatternLoop :imageUrl="assets.image.get('bg_faceplates')" :width="1600" :height="720" :reverse="true"/>

    <div class="absolute inset-0 flex items-center justify-center">
        <div class="dftxt"><img :src="currentAsset" class="translate-x-[70vw]"></div>
    </div>
</template>

<script lang="ts" setup>
    import ImagePatternLoop from '@/components/Backgrounds/ImagePatternLoop.vue';
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';
    import gsap from 'gsap';
    import { onMounted, ref, watch } from 'vue';
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

    onMounted(() => {
        // -- push text along screen
        gsap.to(".dftxt", {x:-3000, duration:5, ease:"none"})
    })
</script>