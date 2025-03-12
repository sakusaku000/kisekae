<template>
    <div class="absolute inset-0 flex justify-center">
        <div class="flex flex-col gap-[30px]">
            <div v-for="id of ids" :key="id.id" :class="playAnim ? `pushDown` : ``">
                <div class="relative dsSize appear">
                    <div class="absolute inset-0" :style="`background-image:url(${assets.image.get(`3ds_${id.colour}_sm`)})`"></div>
                    <div class="absolute top-[9px] left-[-14px] right-[-14px] bottom-0 bg-contain bg-no-repeat" :style="`background-image:url(${assets.image.get(`fp${id.id}`)})`"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';
    import ShuffleArray from '@/utils/ShuffleArray';
    import { ref, watch, type Ref } from 'vue';

    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    // -- generate array of random numbers for each faceplate asset
    let faceplateIds:number[] = [];
    for (let i = 0; i < 72; i++) {
        faceplateIds.push(i);
    }
    // -- shuffle id array
    faceplateIds = ShuffleArray(faceplateIds);

    // -- play anim state
    const playAnim = ref(false);

    // -- create array to store IDs/colours
    const ids:Ref<{id:number, colour:"black"|"white"}[]> = ref([]);
    // -- function to add new IDs/colours to array
    const add = () => {
        // -- get first faceplate ID
        const id = faceplateIds.shift();
        // -- push ID back to end of array
        faceplateIds.push(id);
        // -- pick a ds colour at random
        const colour = Math.floor(Math.random()*2) === 0 ? "white" : "black";
        // -- add to top of IDs array
        ids.value.unshift({id, colour});
        // -- remove oldest ID from array
        if (ids.value.length > 3) ids.value.pop();
        // -- toggle play anim on, then turn off 
        playAnim.value = true;
        setTimeout(() => {
            playAnim.value = false
        }, 455)
    }

    // -- generate 10 initial IDs
    // for (let i = 0; i < 2; i++) {
    //     add();
    // }

    // -- on each half beat, add new ID
    watch(() => beats.count.half, () => {
        if (beats.count.half % 2) add();
    });
</script>

<style scoped>
    .dsSize {
        width:164px;
        height:170px;
    }

    .appear {
        animation:appear .2s ease forwards;
    }
    @keyframes appear {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }

    .pushDown {
        animation:pushDown .3s cubic-bezier(0.075, 0.820, 0.165, 1.000) forwards;
    }
    @keyframes pushDown {
        from {
            transform:translateY(-184px)
        }
        to {
            transform:translate(0px)
        }
    }
</style>