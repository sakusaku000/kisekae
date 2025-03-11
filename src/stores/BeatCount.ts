import { defineStore } from "pinia";

export const useBeatCountStore = defineStore("beatcount", {
    state:() => ({
        started:false,
        ready:false,
        mute:false,
        musicStopped:false,
        activeScene:"",
        songProgress:0,
        showDebug:false,
        count:{
            second:0,
            half:0
        }
    }),
    actions:{
        setAppReady() {
            // -- check if local storage has a mute state already
            if (localStorage.getItem("mute")) {
                this.mute = localStorage.getItem("mute") === "true" ? true : false;
            }

            // -- set ready
            this.ready = true;
            this.started = true;
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
            this.songProgress = 0;
        },
        toggleMute() {
            this.mute = !this.mute;
            localStorage.setItem("mute", `${this.mute}`);
        },
        toggleMusicStop() {
            this.musicStopped = !this.musicStopped;
        },
        reset() {
            if (!this.ready) return;

            this.musicStopped = true;
            setTimeout(() => {
                this.ready = false;
                this.resetCount();
            }, 100);
            setTimeout(() => {
                this.musicStopped = false;
                this.ready = true;
            }, 1500);
        },
        setActiveScene(scene:string) {
            this.activeScene = scene;
        },
        increaseSongProgress() {
            this.songProgress++;
        },
        toggleDebug() {
            this.showDebug = !this.showDebug;
        }
    }
});