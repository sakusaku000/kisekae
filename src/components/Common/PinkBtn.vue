<template>
    <div class="overflow-hidden cursor-pointer select-none bg-[#E85498] p-2 pb-3 hover:pb-2 hover:mt-1 active:scale-95 rounded-3xl duration-200 sharp-shadow group">
        <ImagePatternLoop
        :imageUrl="assets.image.get('bg_stripe')"
        :width="200*.1"
        :height="184*.1"
        direction="diag-br"
        :duration="5"
        class="pointer-events-none !inset-0 opacity-10 group-hover:opacity-5 duration-300"
        />
        
        <div class="relative h-full bg-[#f1f1f1] px-6 py-2 rounded-2xl overflow-hidden">
            <ImagePatternLoop
            :imageUrl="assets.image.get('bg_dot')"
            :width="200*.1"
            :height="184*.1"
            direction="left"
            :duration="4"
            class="pointer-events-none !inset-0 group-hover:opacity-40 duration-300"
            />
            
            <div class="relative z-50">
                <span class="font-black text-3xl" v-if="text">{{text}}</span>
                <slot v-else/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useAssetsStore } from '@/stores/ImageAssets';
    import ImagePatternLoop from '../Backgrounds/ImagePatternLoop.vue';

    defineProps<{
        text?:string
    }>();

    const assets = useAssetsStore();
</script>