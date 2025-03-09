import { loadAsset, loadImage, loadSound } from "@/utils/AssetLoader";
import { defineStore } from "pinia";

export const useAssetsStore = defineStore("assets", {
    state:() => ({
        image:new Map() as Map<string, string>,
        sound:new Map() as Map<string, string>
    }),
    actions:{
        async load() {
            try {
                // -- define image assets
                const images:AssetData[] = [
                    // bg
                    {name:"bg_faceplates", file:"bg/fp_pattern.png"},
                    {name:"bg_dot", file:"bg/dot.png"},

                    // kyary
                    {name:"kyary_fullscreen_01", file:"kyary/KyaryFullScreen001.png"},
                    {name:"kyary_fullscreen_02", file:"kyary/KyaryFullScreen002.png"},
                    
                    // 3ds row/faceplates row
                    {name:"3ds_row", file:"3ds/ds_row.png"},
                    {name:"fp_row0", file:"3ds/faceplate_0.png"},
                    {name:"fp_row1", file:"3ds/faceplate_1.png"},
                    {name:"fp_row2", file:"3ds/faceplate_2.png"},
                ]

                // -- define sound assets
                const sounds:AssetData[] = [
                    {name:"bg", file:"bg.mp3"}
                ]

                // -- iterate through image assets and load into store
                for (const image of images) {
                    const dataUrl = await loadAsset(image.file);
                    console.log(`Fetched image asset: ${image.file}`);
                    this.image.set(image.name, dataUrl);
                }

                // -- iterate through sound assets and load into store
                for (const sound of sounds) {
                    const dataUrl = await loadAsset(sound.file);
                    console.log(`Fetched sound asset: ${sound.file}`);
                    this.sound.set(sound.name, dataUrl);
                }

                return;
            } catch (err) {
                throw err;
            }
        }
    }
})

type AssetData = {
    name:string;
    file:string;
}