<template>
    <div class="absolute inset-0" :style="`background-color:${activeColour}`">
        {{ activeColour }}
    </div>
</template>

<script lang="ts" setup>
    import { useBeatCountStore } from '@/stores/BeatCount';
import { ref, watch, type Ref } from 'vue';

    // -- get beat counter
    const beats = useBeatCountStore();

    // -- set active colour
    const activeColour:Ref<string, string> = ref("#0000ff");

    // -- set colours to cycle through
    const colours = [
        "#ff0000",
        "#00ff00",
        "#0000ff"
    ];

    // -- listen for beats
    watch(() => beats.count.second, () => {
        // -- get top colour from array
        const colour = colours.shift();
        // -- set as active colour
        activeColour.value = colour;
        // -- place colour at end of array
        colours.push(colour);
    })
</script>