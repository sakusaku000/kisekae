<template>
    <div class="fixed inset-0 select-none pointer-events-none">
        <LoadingLoop/>
        <div class="absolute inset-0 flex justify-center items-center">
            <span class="pink-text text-5xl font-black">{{ assets.assetsTotal >= 1 ? Math.floor((assets.assetsLoaded / assets.assetsTotal)*100) : 0 }}%</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useAssetsStore } from '@/stores/ImageAssets';
    import LoadingLoop from './Backgrounds/LoadingLoop.vue';
    const assets = useAssetsStore();
</script>