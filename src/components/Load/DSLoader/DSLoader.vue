<template>
    <div class="relative size overflow-hidden">
        <div class="absolute inset-0">
            <img src="/assets/load/ds.png">
        </div>

        <div class="absolute inset-0 overflow-hidden left-[4px] right-[8px] bottom-[11px] rounded-b-[10px]">
            <Transition name="fpb">
                <DSLoaderTop :progress="progress" :colour="colourPair.c1" v-if="!alt"/>
            </Transition>
            <Transition name="fpb">
                <DSLoaderTop :progress="progress" :colour="colourPair.c1" v-if="alt"/>
            </Transition>

            <Transition name="fp">
                <DSLoaderBottom :progress="progress" :colour="colourPair.c2" v-if="!alt"/>
            </Transition>
            <Transition name="fp">
                <DSLoaderBottom :progress="progress" :colour="colourPair.c2" v-if="alt"/>
            </Transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import DSLoaderBottom from './DSLoaderBottom.vue';
    import DSLoaderTop from './DSLoaderTop.vue';

    defineProps<{
        progress:number;
        alt:boolean;
        colourPair:{c1:string; c2:string;}
    }>()
</script>

<style scoped>
    .size {
        width:94px;
        height:95px;
    }

    .fp-enter-active, .fp-leave-active, .fpb-enter-active, .fpb-leave-active {
        transition-duration:.5s;
        transition-timing-function:cubic-bezier(0.680, -0.550, 0.265, 1.550);
    }
    .fp-enter-from {
        transform:translateX(100px);
    }
    .fp-leave-to {
        transform:translateX(-100px);
    }
    .fpb-enter-from {
        transform:translateX(-100px);
    }
    .fpb-leave-to {
        transform:translateX(100px);
    }
</style>