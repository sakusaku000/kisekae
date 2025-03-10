<template>
    <div class="absolute top-6 -left-2 scale-50 opacity-50 hover:opacity-100 duration-200">
        <button @click="beats.toggleMute">
            <PinkBtn>
                <VolumeOn class="vol" v-if="!beats.mute"/>
                <VolumeOff class="vol" v-else/>
            </PinkBtn>
        </button>
    </div>
</template>

<script setup lang="ts">
    import { useBeatCountStore } from '@/stores/BeatCount';
    import PinkBtn from '../Common/PinkBtn.vue';
    import VolumeOn from '../Icons/VolumeOn.vue';
    import VolumeOff from '../Icons/VolumeOff.vue';
    const beats = useBeatCountStore();
</script>

<style>
    .vol {
        width:1rem;
        height:1rem;
    }
</style>