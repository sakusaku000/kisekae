<template>
    <div class="cursor-pointer select-none bg-pink-400 p-2 pb-3 hover:pb-2 hover:mt-1 active:scale-95 rounded-3xl duration-100 sharp-shadow">
        <div class="h-full bg-white px-6 py-2 rounded-2xl">
            <span class="font-black text-3xl" v-if="text">{{text}}</span>
            <slot v-else/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps<{
        text?:string
    }>();
</script>