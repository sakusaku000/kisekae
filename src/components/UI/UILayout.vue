<template>
    <div class="fixed inset-0">
        <!-- nintendo/3ds logo -->
        <NintendoLogo/>

        <!-- Mute switch -->
        <MuteSwitch v-if="beats.ready"/>

        <!-- Debug info -->
        <DebugInfo v-if="beats.showDebug"/>
    </div>
</template>

<script setup lang="ts">
    import { useBeatCountStore } from '@/stores/BeatCount';
    import MuteSwitch from './MuteSwitch.vue';
    import NintendoLogo from './NintendoLogo.vue';
    import DebugInfo from './DebugInfo.vue';
    const beats = useBeatCountStore();
</script>