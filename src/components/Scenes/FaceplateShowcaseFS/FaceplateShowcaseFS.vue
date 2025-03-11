<template>
    <!-- pattern background -->
    <RandomBeatBG beat="second"/>

    <!-- 3ds container -->
    <DSContainer/>
</template>

<script lang="ts" setup>
    import DSContainer from './DSContainer.vue';
    import RandomBeatBG from '@/components/Backgrounds/RandomBeatBG.vue';
</script>