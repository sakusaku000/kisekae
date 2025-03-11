<template>
    <div class="absolute inset-0 flex items-center justify-center enter sharp-shadow">
        <div class="relative scaleDown p-20 dsSize">
            <div class="absolute inset-0 dsSize">
                <img :src="assets.image.get(`3ds_${dsColour}_lg`)">
            </div>
            <FaceplateSwap class="dsSize"/>
            <div class="absolute inset-0 dsSize">
                <img :src="assets.image.get(`3ds_${dsColour}_lg_shd`)">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useBeatCountStore } from '@/stores/BeatCount';
    import { useAssetsStore } from '@/stores/ImageAssets';
    import { ref, watch, type Ref } from 'vue';
    import FaceplateSwap from './FaceplateSwap.vue';
    const assets = useAssetsStore();
    const beats = useBeatCountStore();

    // -- switch between DS colours
    let dsColour:Ref<"white"|"black"> = ref("white");
    const switchDsColour = () => {
        setTimeout(() => {
            dsColour.value = dsColour.value === "white" ? "black" : "white";
        }, 455)
    }

    // -- listen for beat changes
    switchDsColour();
    watch(() => beats.count.second, switchDsColour)
</script>

<style scoped>
    .dsSize {
        width:1202px;
        height:1254px;
    }

    .enter {
        animation:enter 1s forwards cubic-bezier(0.075, 0.820, 0.165, 1.000);
    }
    @keyframes enter {
        from {
            transform:scale(1.7)
        }
        to {
            transform:scale(1)
        }
    }

    .scaleDown {
        animation:scaleDown 5s forwards ease-out;
    }
    @keyframes scaleDown {
        0% {
            transform:scale(.6)
        }
        100% {
            transform:scale(.5)
        }
    }
</style>