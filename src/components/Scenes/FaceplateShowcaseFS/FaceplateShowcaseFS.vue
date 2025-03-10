<template>
    <!-- pattern background -->
    <ImagePatternLoop
    v-if="activeBg"
    :imageUrl="assets.image.get(activeBg.bgAsset)"
    :bgColor="activeBg.bgColor"
    :width="activeBg.width"
    :height="activeBg.height"
    :direction="activeBg.direction"
    :duration="activeBg.duration"
    />

    <!-- 3ds container -->
    <DSContainer/>
</template>

<script lang="ts" setup>
    import ImagePatternLoop from '@/components/Backgrounds/ImagePatternLoop.vue';
    import DSContainer from './DSContainer.vue';
    import type { BgScrollDirection } from '@/types/BgScrollDirection';
    import { ref, watch, type Ref } from 'vue';
    import ShuffleArray from '@/utils/ShuffleArray';
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';

    const beats = useBeatCountStore();
    const assets = useAssetsStore();

    // -- define backgrounds to display
    type bgProperties = {
        bgAsset:string;
        bgColor?:string;
        width:number,
        height:number,
        direction?:BgScrollDirection,
        duration?:number;
    }
    let backgrounds:bgProperties[] = [
        {
            bgAsset:"bg_stripe_vertical",
            bgColor:"003396",
            width:100,
            height:100,
            direction:"left",
            duration:4
        },
        {
            bgAsset:"bg_pattern_isabelle",
            bgColor:"6BB049",
            width:100,
            height:100,
            direction:"diag-br",
            duration:4
        },
        {
            bgAsset:"bg_stripe_vertical",
            bgColor:"00C1E9",
            width:100,
            height:100,
            direction:"left",
            duration:4
        },
        {
            bgAsset:"bg_stripe_pikachu",
            width:120,
            height:100,
            direction:"left",
            duration:4
        },
        {
            bgAsset:"bg_dot",
            bgColor:"CCB889",
            width:200,
            height:184,
            direction:"diag-bl",
            duration:4
        },
        {
            bgAsset:"bg_star",
            bgColor:"00AF00",
            width:130,
            height:120,
            direction:"diag-tr",
            duration:4
        },
        {
            bgAsset:"bg_star_samus",
            width:130,
            height:120,
            direction:"diag-tl",
            duration:4
        },
        {
            bgAsset:"bg_stripe_link",
            width:100,
            height:100,
            direction:"diag-bl",
            duration:4
        },
        {
            bgAsset:"bg_stripe_kirby",
            width:100,
            height:100,
            direction:"diag-br",
            duration:4
        },
    ]
    backgrounds = ShuffleArray(backgrounds);

    // -- set active background
    const activeBg:Ref<bgProperties> = ref();
    const cycleBg = () => {
        const background = backgrounds.shift();
        activeBg.value = background;
        backgrounds.push(background);
    };

    // -- listen for beat
    cycleBg();
    watch(() => beats.count.second, cycleBg);
</script>