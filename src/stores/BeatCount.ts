import { defineStore } from "pinia";

export const useBeatCountStore = defineStore("beatcount", {
    state:() => ({
        ready:false,
        count:{
            second:0,
            half:0
        }
    }),
    actions:{
        setAppReady() {
            this.ready = true;
        },
        increaseSecond() {
            // -- increase second beat by 1, or reset back to 0 if over 4
            this.count.second > 2 ? this.count.second = 0 : this.count.second++;
        },
        increaseHalfSecond() {
            // -- increase half second beat by 1, or reset back to 0 if over 4
            this.count.half > 2 ? this.count.half = 0 : this.count.half++;
        },
        resetCount() {
            this.count.second = 0;
            this.count.half = 0;
        }
    }
});