<template>
    <div class="absolute bottom-[21px] -left-[109px] -right-[105px] h-[575px] scale-y-[1.01] bg-cover bg-bottom" :style="`background-image:url(${asset})`"></div>
</template>

<script lang="ts" setup>
    defineProps<{asset:string}>()
</script>