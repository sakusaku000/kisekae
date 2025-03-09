<template>
    <div class="absolute inset-0 bg-img-loop" :style="`background-image:url(${imageUrl}); --imgwidth:${width}px; --imgheight:${height}px; animation: ${reverse ? `scroll-to-tl` : `scroll-to-br`} 30s linear infinite;`"></div>
</template>

<script lang="ts" setup>   
    defineProps<{
        imageUrl:string;
        width:number;
        height:number;
        reverse?:boolean;
    }>()
</script>

<style>
    .bg-img-loop {
        background-repeat:repeat;
    }
    @keyframes scroll-to-tl {
        0% {
            background-position: var(--imgwidth) var(--imgheight);
        }
        100% {
            background-position: 0 0;
        }
    }
    @keyframes scroll-to-br {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: var(--imgwidth) var(--imgheight);
        }
    }
</style>