<template>
    <div class="absolute bottom-0 left-0 right-0 h-[36px] rounded-b-[10px] flex justify-center overflow-hidden" :style="`background-color:#${colour};`">
        <span class="progressText translate-y-[-32px]">{{ progress }}</span>
        <span class="absolute bottom-0 right-1 text-white text-sm font-black">%</span>
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        progress:number;
        colour:string;
    }>()
</script>

<style scoped>
    .progressText {
        font-size:2.6rem;
        font-weight:900;
        color:white;
    }
</style>