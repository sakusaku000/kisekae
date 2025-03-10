<template>
    <div class="absolute -bottom-3 -left-3 scale-50 opacity-50 hover:opacity-100 duration-200 group">
        <button @click="beats.toggleMute">
            <PinkBtn>
                <VolumeOn class="vol" v-if="!beats.mute"/>
                <VolumeOff class="vol" v-else/>
            </PinkBtn>
        </button>
        <MuteTooltip/>
    </div>
</template>

<script setup lang="ts">
    import { useBeatCountStore } from '@/stores/BeatCount';
    import PinkBtn from '../Common/PinkBtn.vue';
    import VolumeOn from '../Icons/VolumeOn.vue';
    import VolumeOff from '../Icons/VolumeOff.vue';
    import MuteTooltip from './MuteTooltip.vue';
    const beats = useBeatCountStore();
</script>

<style>
    .vol {
        width:1rem;
        height:1rem;
    }
</style>