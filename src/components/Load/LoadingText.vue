<template>
    <div class="flex items-end">
        <img src="/assets/load/loading.png">
        <div class="flex items-center">
            <img src="/assets/load/dot.png" class="dot">
            <img src="/assets/load/dot.png" class="dot dot2">
            <img src="/assets/load/dot.png" class="dot dot3">
        </div>
    </div>
</template>

<style scoped>
    .dot {
        margin-left:-5px;
        animation:dot 1s infinite;
    }
    .dot2 {
        animation-delay:100ms;
    }
    .dot3 {
        animation-delay:200ms;
    }
    @keyframes dot {
        0% {
            opacity:0;
        }
        49% {
            opacity:0;
        }
        50% {
            opacity:1
        }
        100% {
            opacity:1
        }
    }
</style>