<template>
    <div class="absolute top-[82px] -left-[109px] -right-[105px] h-[475px] bg-cover scale-y-[1.08]" :style="`background-image:url(${asset})`"></div>
</template>

<script lang="ts" setup>
    defineProps<{asset:string}>()
</script>