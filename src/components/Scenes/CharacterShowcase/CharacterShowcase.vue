<template>
    <!-- background loop -->
    <ImagePatternLoop v-if="activeBackground"
    :imageUrl="assets.image.get(activeBackground.bgAsset)" 
    :width="activeBackground.width" 
    :height="activeBackground.height" 
    :direction="activeBackground.direction" 
    :bg-color="activeBackground.bgColor || 'ffffff'"
    :hueShift="activeBackground.hueShift || 0"
    :duration="activeBackground.duration"/>

    <!-- grid display of characters -->
    <div class="absolute inset-0 grid grid-cols-5 items-center justify-center gap-10 px-10">
        <div v-for="chr of chrDisplayList" class="flex justify-center">
            <img class="chr-appear" :src="assets.image.get(chr)">
        </div>
    </div>
</template>

<script lang="ts" setup>
    import ImagePatternLoop from '@/components/Backgrounds/ImagePatternLoop.vue';
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';
    import type { BgScrollDirection } from '@/types/BgScrollDirection';
    import ShuffleArray from '@/utils/ShuffleArray';
    import { ref, watch, type Ref } from 'vue';

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

    // -- define ref for character list to be displayed
    const chrDisplayList:Ref<string[]> = ref([]);
    // -- define ref for active background properties
    const activeBackground:Ref<chrProperties> = ref();

    // -- define cycle count, which will stop at 5
    let cycleCount = 0;
    const cycle = () => {
        cycleCount++;
        if (cycleCount < 6) {
            // -- get top character from characters array
            const character = characters.shift();
            // -- add character asset to character display list
            chrDisplayList.value.push(character.chrAsset);
            // -- set active background with character's properties
            activeBackground.value = character;
        }
    }

    // -- run first cycle
    // cycle();
    // -- run on half beats
    watch(() => beats.count.half, cycle);
</script>

<style scoped>
    .chr-appear {
        animation:chr-appear 5s linear forwards;
    }
    @keyframes chr-appear {
        from {
            transform:scale(1)
        }
        to {
            transform:scale(0.8)
        }
    }
</style>