<template>
    <RandomBeatBG
    beat="half"
    :maxCycle="6"
    />

    <div class="absolute inset-0 grid grid-cols-5 items-center justify-center gap-10 px-10 zoom">
        <template v-for="a of amount">
            <img :src="assets.image.get(`kyary_papapa`)">
        </template>
    </div>
</template>

<script setup lang="ts">
    import RandomBeatBG from '@/components/Backgrounds/RandomBeatBG.vue';
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';
    import { ref, watch, type Ref } from 'vue';
    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    const amount:Ref<true[]> = ref([]);
    let cycleCount = 0;
    const add = () => {
        cycleCount++
        if (cycleCount < 6) {
            amount.value.push(true);
        }
    }

    // add();
    watch(() => beats.count.half, add);
</script>

<style scoped>
    .zoom {
        animation:zoom 5s ease-out forwards;
    }
    @keyframes zoom {
        from {
            transform:scale(1.2)
        }
        to {
            transform:scale(1.1)
        }
    }
</style>