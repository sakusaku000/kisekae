<template>
    <!-- nintendo/3ds logo -->
    <div class="absolute inset-1 flex items-start pointer-events-none">
        <img :src="assets.image.get('ui_nintendo_logo')" :class="nintendoPulse ? `pulse` : ``">
        <img class="ml-auto" :src="assets.image.get('ui_3ds_logo')" :class="dsPulse ? `pulse` : ``">
    </div>
</template>

<script lang="ts" setup>
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';
    import { ref, watch } from 'vue';
    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    const nintendoPulse = ref(true);
    const dsPulse = ref(false);
    const pulse = () => {
        nintendoPulse.value = !nintendoPulse.value;
        dsPulse.value = !dsPulse.value;
    }

    watch(() => beats.count.half, pulse);
</script>

<style scoped>
    .pulse {
        animation:pulse .2s ease forwards;
    }
    @keyframes pulse {
        0% {
            transform:scale(1)
        }
        50% {
            transform:scale(1.05)
        }
        100% {
            transform:scale(1)
        }
    }
</style>