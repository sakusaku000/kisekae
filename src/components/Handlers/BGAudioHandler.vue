<template></template>

<script lang="ts" setup>
    import { Howl } from "howler";
    import { useBeatCountStore } from "@/stores/BeatCount";
    import { onMounted, watch } from "vue";
    import { useAssetsStore } from "@/stores/ImageAssets";

    // -- fetch beats store
    const beats = useBeatCountStore();
    // -- fetch assets store
    const assets = useAssetsStore();

    onMounted(() => {
        // -- create audio player and play as soon as possible
        const bg = new Howl({
            src:[assets.image.get("bgm")],
            loop:true,
            mute:beats.mute
        });
        setTimeout(() => {
            bg.fade(0.0, 1.0, 1000);
            bg.play();
        }, 800);

        // -- watch for mute state changes
        watch(() => beats.mute, () => {
            beats.mute === true ? bg.mute(true) : bg.mute(false);
        });

        // -- DEBUG: listen for "P" key event and toggle pause
        watch(() => beats.musicStopped, () => {
            beats.musicStopped === true ? bg.stop() : bg.play();
        })

        // -- run counting function with stored intervals
        let secondInterval:number = 0
        let halfSecondInterval:number = 0;
        const startCounters = () => {
            // -- count up second interval
            secondInterval = setInterval(() => {
                beats.increaseSecond();
            }, 909)
            // -- count up half second interval
            halfSecondInterval = setInterval(() => {
                beats.increaseHalfSecond();
            }, 455)
        }

        // -- on play or loop, reset beat counts and intervals and setup counters again
        bg.on("play", () => {
            beats.resetCount();
            clearInterval(secondInterval);
            clearInterval(halfSecondInterval);
            startCounters();
            console.log("LOOP!");
        })

        // -- on stop, reset beat counts and intervals
        bg.on("stop", () => {
            clearInterval(secondInterval);
            clearInterval(halfSecondInterval)
        })
    })
</script>