<template>
    <div class="absolute inset-0 bg scale-200 -rotate-45"></div>
</template>

<style scoped>
    @keyframes scrollStripes {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 0 -100px;
        }
    }

    .bg {
        background: repeating-linear-gradient(
            180deg,
            #f5f5f5,
            #f5f5f5 25px,
            #ececec 25px,
            #ececec 50px
        );
        background-size: 100% 100px;
        animation: scrollStripes 4s linear infinite;
        transform:scale(1.5)
    }
</style>