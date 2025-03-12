<template>
    <div class="fixed inset-0 select-none pointer-events-none">
        <ImagePatternLoop
        imageUrl="assets/load/bg.png"
        :width="200"
        :height="184"
        direction="diag-tl"
        :duration="5"
        />
        
        <div class="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <div class="w-[263px] h-[75px] overflow-hidden">
                <img src="/assets/load/logo.png" :class="end ? `sink` : ``">
            </div>

            <DSLoader :progress="currProgress" :alt="alt" :colourPair="colours" :class="end ? `zoomOut` : ``"/>

            <div class="w-40 flex justify-center overflow-hidden">
                <LoadingText :class="end ? `sink` : ``"/>
            </div>

            <div class="w-[226px] h-[28px] overflow-hidden">
                <img src="/assets/load/vol_warn.png" :class="end ? `sink` : ``">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref, type Ref } from 'vue';
    import ImagePatternLoop from '../Backgrounds/ImagePatternLoop.vue';
    import LoadingText from './LoadingText.vue';
    import DSLoader from './DSLoader/DSLoader.vue';
    import ShuffleArray from '@/utils/ShuffleArray';
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';

    const beats = useBeatCountStore();
    const assets = useAssetsStore();

    // -- define end state
    const end = ref(false);

    // -- define alternating state
    const alt = ref(false);

    // -- define current progress
    const currProgress = ref(0);

    // -- define colour pairs
    let colourOptions = [
        "EDD600",
        "EAAA17",
        "792C25",
        "6855A2",
        "585951",
        "3FE15C",
        "006F99",
        "008400",
        "386693",
        "1B1611",
        "002FC0",
        "FB3E93",
        "DA000D"
    ]
    colourOptions = ShuffleArray(colourOptions);
    let colours:Ref<{c1:string; c2:string}> = ref({c1:"ffffff", c2:"ffffff"}); 
    const pickColour = () => {
        const randomColour1 = colourOptions.shift();
        const randomColour2 = colourOptions.shift();
        colourOptions.push(randomColour1, randomColour2);
        colours.value = {c1:randomColour1, c2:randomColour2};
    }

    // -- check load progress
    let loadInterval:number = 0;
    const getLoadProgress = () => {
        // -- get progress
        const progress = assets.assetsTotal >= 1 ? Math.floor((assets.assetsLoaded / assets.assetsTotal)*100) : 0;
        
        // -- switch faceplate colours
        alt.value = !alt.value;
        pickColour();
        // -- update progress
        currProgress.value = progress;

        // -- if progress is 100% end load
        if (progress >= 100) return endLoad();
    }
    loadInterval = setInterval(getLoadProgress, 1000);

    // -- end load screen
    const endLoad = () => {
        clearInterval(loadInterval);

        setTimeout(() => {
            end.value = true;
        }, 1000);

        setTimeout(() => {
            beats.setAppView("start");
        }, 1500);
    }

    onMounted(() => {
        setTimeout(() => {
            assets.load();
        }, 1000);    
    })

</script>

<style scoped>
    .sink {
        animation:sink .3s forwards ease-in-out;
    }
    @keyframes sink {
        from {
            transform:translateY(0px)
        }
        to {
            transform:translateY(75px)
        }
    }

    .zoomOut {
        animation:zoomOut .4s forwards cubic-bezier(0.600, -0.280, 0.735, 0.045);
    }
    @keyframes zoomOut {
        from {
            transform:scale(1);
            opacity:1
        }
        to {
            transform:scale(0);
            opacity:0;
        }
    }
</style>