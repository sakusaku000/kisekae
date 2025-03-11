<template>
    <div class="fixed inset-0 !delay-1000">
        <!-- nintendo/3ds logo -->
        <NintendoLogo/>

        <!-- Mute switch -->
        <MuteSwitch v-if="beats.ready"/>
    </div>
</template>

<script setup lang="ts">
    import { useBeatCountStore } from '@/stores/BeatCount';
    import MuteSwitch from './MuteSwitch.vue';
    import NintendoLogo from './NintendoLogo.vue';
    const beats = useBeatCountStore();
</script>