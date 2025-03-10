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
                    // ui
                    {name:"ui_nintendo_logo", file:"ui/nintendo.png"},
                    {name:"ui_3ds_logo", file:"ui/3ds.png"},

                    // bg
                    {name:"bg_faceplates", file:"bg/fp_pattern.png"},
                    // dots
                    {name:"bg_dot", file:"bg/dot.png"},
                    {name:"bg_dot_dk", file:"bg/dot_dk.png"},
                    {name:"bg_dot_toad", file:"bg/dot_toad.png"},
                    // star
                    {name:"bg_star", file:"bg/star.png"},
                    {name:"bg_star_samus", file:"bg/star_samus.png"},
                    // stripes
                    {name:"bg_stripe", file:"bg/stripe.png"},
                    {name:"bg_stripe_horizontal", file:"bg/stripe_horizontal.png"},
                    {name:"bg_stripe_kirby", file:"bg/stripe_kirby.png"},
                    {name:"bg_stripe_mario", file:"bg/stripe_mario.png"},
                    {name:"bg_stripe_pikachu", file:"bg/stripe_pikachu.png"},
                    {name:"bg_stripe_link", file:"bg/stripe_link.png"},
                    // heart
                    {name:"bg_heart_villager", file:"bg/heart_villager.png"},

                    // kyary
                    {name:"kyary_fullscreen_01", file:"kyary/KyaryFullScreen001.png"},
                    {name:"kyary_fullscreen_02", file:"kyary/KyaryFullScreen002.png"},
                    
                    // 3ds row/faceplates row
                    {name:"3ds_row", file:"3ds/ds_row.png"},
                    {name:"fp_row0", file:"3ds/faceplate_0.png"},
                    {name:"fp_row1", file:"3ds/faceplate_1.png"},
                    {name:"fp_row2", file:"3ds/faceplate_2.png"},

                    // date/kisekae
                    {name:"dateflash_kisekae0", file:"date_flash/kisekae_0.png"},
                    {name:"dateflash_kisekae1", file:"date_flash/kisekae_1.png"},
                    {name:"dateflash_date0", file:"date_flash/date_0.png"},
                    {name:"dateflash_date1", file:"date_flash/date_1.png"},

                    // characters
                    {name:"chr_dk", file:"characters/dk.png"},
                    {name:"chr_kirby", file:"characters/kirb.png"},
                    {name:"chr_link", file:"characters/link.png"},
                    {name:"chr_luigi", file:"characters/luigi.png"},
                    {name:"chr_mario", file:"characters/mario.png"},
                    {name:"chr_peach", file:"characters/peach.png"},
                    {name:"chr_pikachu", file:"characters/pikachu.png"},
                    {name:"chr_samus", file:"characters/samus.png"},
                    {name:"chr_toad", file:"characters/toad.png"},
                    {name:"chr_villager", file:"characters/villager.png"},
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