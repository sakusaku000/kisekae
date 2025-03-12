<template>
    <div class="absolute top-[15px] left-0 right-0 h-[29px] flex justify-center overflow-hidden" :style="`background-color:#${colour}`">
        <span class="progressText translate-y-[2px]">{{progress}}</span>
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