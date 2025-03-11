<template>
    <div class="absolute inset-0 -left-[2000px] -right-[2000px] flex flex-col gap-10 translate-y-[15px] scale-110 justify-center sharp-shadow">
        <DSRow id="1" :height=".6" :total="20"/>
        <DSRow id="2" :height=".9" :total="30" :offset="-35" :reverse="true"/>
        <DSRow id="3" :height="1.2" :total="20" :offset="-15"/>
        <DSRow id="4" :height=".9" :total="20" :reverse="true"/>
        <DSRow id="5" :height=".6" :total="30" :offset="-45"/>
    </div>
</template>

<script setup lang="ts">
    import DSRow from './DSRow.vue';
</script>