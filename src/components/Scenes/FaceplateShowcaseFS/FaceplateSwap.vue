<template>
    <div class="absolute inset-0 overflow-hidden">
        <!-- top faceplates -->
        <!-- instance 1 -->
        <Transition name="fpb">
            <FaceplateTop id="top1" :asset="assets.image.get(`fp${fpTop1}`)" v-if="!fpAlt && !fpHidden"/>
        </Transition>
        <Transition name="fpb">
            <FaceplateTop id="top2" :asset="assets.image.get(`fp${fpTop2}`)" v-if="fpAlt && !fpHidden"/>
        </Transition>

        <!-- bottom faceplate -->
        <Transition name="fp">
            <FaceplateBottom id="bottom1" :asset="assets.image.get(`fp${fpBottom1}`)" v-if="!fpAlt && !fpHidden"/>
        </Transition>
        <Transition name="fp">
            <FaceplateBottom id="bottom2" :asset="assets.image.get(`fp${fpBottom2}`)" v-if="fpAlt && !fpHidden"/>
        </Transition>
    </div>
</template> 

<script lang="ts" setup>
    import { useAssetsStore } from '@/stores/ImageAssets';
    import FaceplateTop from './FaceplateTop.vue';
    import FaceplateBottom from './FaceplateBottom.vue';
    import ShuffleArray from '@/utils/ShuffleArray';
    import { ref, watch, type Ref } from 'vue';
    import { useBeatCountStore } from '@/stores/BeatCount';

    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    // -- generate array of random numbers for each faceplate asset
    let faceplateIds:number[] = [];
    for (let i = 0; i < 72; i++) {
        faceplateIds.push(i);
    }
    // -- shuffle id array
    faceplateIds = ShuffleArray(faceplateIds);

    // -- define faceplate asset refs
    // top
    const fpTop1:Ref<number> = ref(0);
    const fpTop2:Ref<number> = ref(0);
    // bottom
    const fpBottom1:Ref<number> = ref(0);
    const fpBottom2:Ref<number> = ref(0);

    // -- define hidden state at first
    const fpHidden:Ref<boolean> = ref(true);

    // -- define alternate in use
    const fpAlt:Ref<boolean> = ref(true);

    // -- cycle between faceplates
    const cycle = () => {
        // -- swap fp alt value
        fpAlt.value = !fpAlt.value;

        // -- get new faceplates to display
        const faceplateTop = faceplateIds.shift();
        const faceplateBottom = faceplateIds.shift();
        // -- place back into array at end
        faceplateIds.push(faceplateTop, faceplateBottom);

        // -- set as new faceplates
        fpAlt.value === true ? fpTop2.value = faceplateTop : fpTop1.value = faceplateTop;
        fpAlt.value === true ? fpBottom2.value = faceplateBottom : fpBottom1.value = faceplateBottom;
    }

    cycle();
    setTimeout(() => {
        fpHidden.value = false
    }, 30);
    watch(() => beats.count.second, cycle);
</script>

<style>
    .fp-enter-active, .fp-leave-active, .fpb-enter-active, .fpb-leave-active {
        transition-duration:.7s;
        transition-timing-function:cubic-bezier(0.075, 0.820, 0.165, 1.000);
    }
    .fp-enter-from {
        transform:translateX(1300px);
    }
    .fp-leave-to {
        transform:translateX(-1300px);
    }
    .fpb-enter-from {
        transform:translateX(-1300px);
    }
    .fpb-leave-to {
        transform:translateX(1300px);
    }
</style>