<template>
    <div class="absolute inset-0">
        <video 
        :src="assets.image.get(`video_${videoId}`)" 
        class="w-full h-full object-cover" 
        muted autoplay playsinline></video>
    </div>
</template>

<script lang="ts" setup>
    import { useAssetsStore } from '@/stores/ImageAssets';
    const assets = useAssetsStore();

    defineProps<{
        videoId:number
    }>();
</script>