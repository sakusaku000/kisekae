<template>
    <div class="absolute inset-0 -left-[2000px] -right-[2000px] flex flex-col gap-16 justify-center translate-y-[-100px] sharp-shadow">
        <DSRow id="1" :height="1" :total="20"/>
        <DSRow id="2" :height=".7" :total="30" :offset="-10" :reverse="true"/>
        <DSRow id="3" :height="1.2" :total="20" :offset="-10"/>
        <DSRow id="4" :height=".9" :total="20" :reverse="true"/>
        <DSRow id="5" :height=".7" :total="30" :offset="-30"/>
        <DSRow id="6" :height="1.4" :total="20" :offset="-10" :reverse="true"/>
    </div>
</template>

<script setup lang="ts">
    import DSRow from './DSRow.vue';
</script>