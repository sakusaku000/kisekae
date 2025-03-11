<template>
    <div class="fixed top-1 left-1 bg-black/70 text-white py-2 px-4 flex flex-col gap-1">
        <code>active scene: "{{ beats.activeScene }}"</code>
        <code>song progress: {{ beats.songProgress }}</code>
        <code>beat: {{ beats.count.second }} {{ beats.count.half }}</code>
        <code>muted: {{ beats.mute }}</code>
        <code>halted: {{ beats.musicStopped }}</code>
    </div>
</template>

<script lang="ts" setup>
    import { useBeatCountStore } from '@/stores/BeatCount';
    const beats = useBeatCountStore()
</script>