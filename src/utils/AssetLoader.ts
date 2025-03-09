export const loadImage = (file:string) => {
    return new Promise<void>(async(resolve, reject) => {
        try {
            const image = new Image();
            image.addEventListener("load", () => {
                return resolve();
            });
            image.src = `/assets/${file}`;
        } catch (err) {
            return reject(err);
        }
    })
}

export const loadSound = (file:string) => {
    return new Promise<void>(async(resolve, reject) => {
        try {
            const sound = new Audio();
            sound.addEventListener("canplaythrough", () => {
                return resolve();
            });
            sound.src = `/assets/${file}`;
        } catch (err) {
            return reject(err);
        }
    })
}

export const loadAsset = async (url:string) => {
    return new Promise<string>(async(resolve, reject) => {
        try {
            const assetRequest = await fetch(`/assets/${url}`);
            const assetBlob = await assetRequest.blob();
            
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(assetBlob);
        } catch (err) {
            reject(err);
        }
    })
}