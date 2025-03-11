<template></template>

<script lang="ts" setup>
    import { useBeatCountStore } from '@/stores/BeatCount';
    const beats = useBeatCountStore();

    window.onkeydown = (e) => {
        switch(e.key) {
            case "p":
                beats.toggleMusicStop();
                break;
            case "m":
                beats.toggleMute();
                break;
            case "r":
                beats.reset();
                break;
            case "]":
                beats.toggleDebug();
                break;
        }
    }
</script>