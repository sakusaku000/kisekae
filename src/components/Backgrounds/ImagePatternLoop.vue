<template>
    <div class="absolute inset-0 bg-img-loop" :style="`background-image:url(${imageUrl}); background-color:${bgColor ? `#${bgColor}` : 'transparent'}; --imgwidth:${width}px; --imgheight:${height}px; animation: ${direction} ${duration ? duration : '30'}s linear infinite; ${hueShift ? `filter:hue-rotate(${hueShift}deg)` : ``}`"></div>
</template>

<script lang="ts" setup>
    import type { BgScrollDirection } from '@/types/BgScrollDirection';

    defineProps<{
        imageUrl:string;
        width:number;
        height:number;
        duration?:number;
        direction?:BgScrollDirection;
        bgColor?:string;
        hueShift?:number;
    }>()
</script>

<style>
    .bg-img-loop {
        background-repeat:repeat;
        background-size:var(--imgwidth) var(--imgheight);
    }

    /* scroll up */
    @keyframes up {
        from {
            background-position:var(--imgwidth) 0;
        }
        to {
            background-position:var(--imgwidth) var(--imgheight);
        }
    }

    /* scroll down */
    @keyframes down {
        from {
            background-position:var(--imgwidth) var(--imgheight);
        }
        to {
            background-position:var(--imgwidth) 0;
        }
    }

    /* scroll left */
    @keyframes left {
        from {
            background-position:0 var(--imgheight);
        }
        to {
            background-position:var(--imgwidth) var(--imgheight);
        }
    }

    /* scroll right */
    @keyframes right {
        from {
            background-position:var(--imgwidth) var(--imgheight);
        }
        to {
            background-position:0 var(--imgheight);
        }
    }

    /* scroll diag top left */
    @keyframes diag-tl {
        from {
            background-position: var(--imgwidth) var(--imgheight);
        }
        to {
            background-position: 0 0;
        }
    }

    /* scroll diag top right */
    @keyframes diag-tr {
        from {
            background-position: var(--imgwidth) 0;
        }
        to {
            background-position: 0 var(--imgheight);
        }
    }

    /* scroll diag bottom left */
    @keyframes diag-bl {
        from {
            background-position: 0 var(--imgheight);
        }
        to {
            background-position: var(--imgwidth) 0;
        }
    }

    /* scroll diag bottom right */
    @keyframes diag-br {
        from {
            background-position: 0 0;
        }
        to {
            background-position: var(--imgwidth) var(--imgheight);
        }
    }
</style>