import { loadAsset, loadImage, loadSound } from "@/utils/AssetLoader";
import { defineStore } from "pinia";

export const useAssetsStore = defineStore("assets", {
    state:() => ({
        image:new Map() as Map<string, string>,
        assetsLoaded:0,
        assetsTotal:0
    }),
    actions:{
        async load() {
            try {
                // -- define image assets
                const assets:AssetData[] = [
                    // ui
                    {name:"ui_nintendo_logo", file:"ui/nintendo.png"},
                    {name:"ui_3ds_logo", file:"ui/3ds.png"},
                    {name:"ui_hinto", file:"ui/hinto.png"},

                    // bg
                    {name:"bg_faceplates", file:"bg/fp_pattern.png"},
                    {name:"bg_pattern_isabelle", file:"bg/pattern_isabelle.png"},
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
                    {name:"bg_stripe_vertical", file:"bg/stripe_vertical.png"},
                    {name:"bg_stripe_kirby", file:"bg/stripe_kirby.png"},
                    {name:"bg_stripe_mario", file:"bg/stripe_mario.png"},
                    {name:"bg_stripe_pikachu", file:"bg/stripe_pikachu.png"},
                    {name:"bg_stripe_link", file:"bg/stripe_link.png"},
                    // heart
                    {name:"bg_heart_villager", file:"bg/heart_villager.png"},

                    // kyary
                    {name:"kyary_fullscreen_01", file:"kyary/KyaryFullScreen001.png"},
                    {name:"kyary_fullscreen_02", file:"kyary/KyaryFullScreen002.png"},
                    {name:"kyary_papapa", file:"kyary/KyaryPapapa.png"},
                    
                    // 3ds row/faceplates row
                    {name:"3ds_row", file:"3ds/ds_row.png"},
                    {name:"fp_row0", file:"3ds/faceplate_0.png"},
                    {name:"fp_row1", file:"3ds/faceplate_1.png"},
                    {name:"fp_row2", file:"3ds/faceplate_2.png"},

                    // 3ds
                    {name:"3ds_white_lg", file:"3ds/3ds_white_lg.png"},
                    {name:"3ds_black_lg", file:"3ds/3ds_black_lg.png"},
                    {name:"3ds_white_lg_shd", file:"3ds/ds_shoulders_white.png"},
                    {name:"3ds_black_lg_shd", file:"3ds/ds_shoulders_black.png"},

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

                    // sound
                    {name:"bgm", file:"bg2.mp3"},

                    // video
                    {name:"video_0", file:"video/1.webm"},
                    {name:"video_1", file:"video/2.webm"},
                ]
                // -- push faceplate assets into array
                for (let i = 0; i < 72; i++) {
                    assets.push({name:`fp${i}`, file:`faceplates/new${i}.png`});
                }

                // -- set asset total
                this.assetsTotal = assets.length;

                // -- iterate through assets and load into store
                for (const asset of assets) {
                    // -- load asset as base64 string and store in map
                    const dataUrl = await loadAsset(asset.file);
                    console.log(`Fetched asset: ${asset.file}`);
                    this.assetsLoaded++;
                    this.image.set(asset.name, dataUrl);
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