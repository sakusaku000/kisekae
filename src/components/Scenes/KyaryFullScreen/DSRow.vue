<template>
    <div class="flex justify-center gap-5" :style="`transform:scale(${height}) translateY(${offset ? offset : 0}px);`">
        <!-- 3ds row -->
        <div class="relative h-40 w-full bg-contain bg-center bg-repeat-x" :style="`background-image:url(${assets.image.get('3ds_row')})`"></div>
        <!-- faceplate row -->
        <div 
        :id="`fp${id}`" 
        class="absolute inset-0 -left-[91px] h-40 w-full bg-contain bg-center bg-repeat-x z-50" 
        :style="`background-image:url(${faceplateRow})`"></div>
    </div>
</template>

<script setup lang="ts">
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';
    import { onMounted, watch } from 'vue';
    import { gsap } from "gsap";
    
    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    const props = defineProps<{
        id:string;
        height:number;
        offset?:number;
        reverse?:boolean;
    }>()

    // -- get faceplate row asset
    const num = Math.floor(Math.random()*2);
    const faceplateRow = assets.image.get(`fp_row${num}`);

    // -- store x move pos
    let xPos = 0;
    // -- move amount
    const moveAmount = 182.5;

    const push = () => {
        setTimeout(() => {
            // -- set new x pos
            props.reverse ? xPos -= moveAmount : xPos += moveAmount;
            // -- animate faceplates
            gsap.to(`#fp${props.id}`, {x:xPos, duration:.3, ease:"circ.inOut"});
        },455);
    }

    onMounted(push);
    watch(() => beats.count.second, push);
</script>