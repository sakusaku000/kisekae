<template>
    <!-- nintendo/3ds logo -->
    <div class="absolute inset-1 flex items-start pointer-events-none">
        <img :src="assets.image.get('ui_nintendo_logo')">
        <img class="ml-auto" :src="assets.image.get('ui_3ds_logo')">
    </div>
</template>

<script lang="ts" setup>
    import { useAssetsStore } from '@/stores/ImageAssets';
    const assets = useAssetsStore();
</script>