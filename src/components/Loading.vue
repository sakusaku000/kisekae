<template>
    <div class="fixed inset-0 select-none pointer-events-none">
        <CSSPatternLoop/>
        <div class="absolute bottom-0 right-0 p-10 flex items-center gap-2">
            <img src="/assets/load.gif" alt="Loading" class="h-10 invert">
        </div>
    </div>
</template>

<script lang="ts" setup>
    import CSSPatternLoop from './Backgrounds/CSSPatternLoop.vue';
</script>