<template>
    <!-- background loop -->
    <ImagePatternLoop v-if="activeChr"
    :imageUrl="assets.image.get(activeChr.bgAsset)" 
    :width="activeChr.width" 
    :height="activeChr.height" 
    :direction="activeChr.direction" 
    :bg-color="activeChr.bgColor || 'ffffff'"
    :hueShift="activeChr.hueShift || 0"
    :duration="activeChr.duration"/>

    <!-- DSLines -->
    <div class="absolute inset-0 scale-75">
        <!-- top -->
        <DSLine class="rotate-180 scale-90 translate-y-[-630px]"/>
        <!-- top left -->
        <DSLine class="rotate-[-225deg] scale-90 translate-x-[-450px] translate-y-[-450px]"/>
        <!-- left -->
        <DSLine class="rotate-[90deg] scale-90 translate-x-[-630px]"/>
        <!-- bottom left -->
        <DSLine class="rotate-[45deg] scale-90 translate-x-[-450px] translate-y-[450px]"/>
        <!-- bottom -->
        <DSLine class="scale-90 translate-y-[630px]"/>
        <!-- bottom right -->
        <DSLine class="rotate-[-45deg] scale-90 translate-x-[450px] translate-y-[450px]"/>
        <!-- right -->
        <DSLine class="rotate-[-90deg] scale-90 translate-x-[630px]"/>
        <!-- top right -->
        <DSLine class="rotate-[225deg] scale-90 translate-x-[450px] translate-y-[-450px]"/>
    </div>

    <!-- character -->
    <div class="absolute inset-0 flex items-center justify-center">
        <img class="appear" :src="assets.image.get(activeChr.chrAsset)" v-if="!altChr">
        <img class="appear" :src="assets.image.get(activeChr.chrAsset)" v-if="altChr">
    </div>
</template>

<script lang="ts" setup>
    import ImagePatternLoop from '@/components/Backgrounds/ImagePatternLoop.vue';
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';
    import type { BgScrollDirection } from '@/types/BgScrollDirection';
    import ShuffleArray from '@/utils/ShuffleArray';
    import { ref, watch, type Ref } from 'vue';
    import DSLine from './DSLine.vue';

    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    // define list of characters, with their background properties
    type chrProperties = {
        chrAsset:string;
        bgAsset:string;
        bgColor?:string;
        hueShift?:number;
        width:number;
        height:number;
        direction:BgScrollDirection;
        duration?:number;
    };
    let characters:chrProperties[] = [
        {
            chrAsset:"chr_luigi",
            bgAsset:"bg_star",
            bgColor:"00AF00",
            width:130,
            height:120,
            direction:"diag-tr",
            duration:2
        },
        {
            chrAsset:"chr_kirby",
            bgAsset:"bg_stripe_kirby",
            width:80,
            height:80,
            direction:"diag-tl",
            duration:2
        },
        {
            chrAsset:"chr_mario",
            bgAsset:"bg_stripe_mario",
            width:66,
            height:100,
            direction:"left",
            duration:1
        },
        {
            chrAsset:"chr_pikachu",
            bgAsset:"bg_stripe_pikachu",
            width:120,
            height:100,
            direction:"right",
            duration:2
        },
        {
            chrAsset:"chr_peach",
            bgAsset:"bg_stripe_horizontal",
            bgColor:"37312E",
            width:140,
            height:140,
            direction:"down",
            duration:4
        },
        {
            chrAsset:"chr_dk",
            bgAsset:"bg_dot_dk",
            width:200,
            height:184,
            direction:"diag-bl",
            duration:3
        },
        {
            chrAsset:"chr_toad",
            bgAsset:"bg_dot_toad",
            width:200*1.5,
            height:184*1.5,
            direction:"diag-br",
            duration:4
        },
        {
            chrAsset:"chr_link",
            bgAsset:"bg_stripe_link",
            width:100,
            height:100,
            direction:"diag-br",
            duration:3
        },
        {
            chrAsset:"chr_villager",
            bgAsset:"bg_heart_villager",
            width:75,
            height:100,
            direction:"diag-tr",
            duration:2
        },
        {
            chrAsset:"chr_samus",
            bgAsset:"bg_star_samus",
            width:130,
            height:120,
            direction:"diag-br",
            duration:3
        }
    ];
    // -- shuffle array to randomise characters that will appear
    characters = ShuffleArray(characters);

    // -- define ref for active character properties
    const activeChr:Ref<chrProperties> = ref();
    // -- define chr alternate
    const altChr = ref(false);

    // -- cycle through backgrounds
    const cycle = () => {
        // -- get first character from array
        const chr = characters.shift();
        // -- push back into end of array
        characters.push(chr);
        // -- set as active character
        activeChr.value = chr;
        // -- alternate character element
        altChr.value = !altChr.value
    }

    // -- cycle on second beat
    cycle();
    watch(() => beats.count.second, cycle);
</script>

<style scoped>
    .appear {
        animation:appear .3s ease-out forwards;
    }
    @keyframes appear {
        from {
            transform:scale(.9)
        }
        to {
            transform:scale(1)
        }
    }
</style>