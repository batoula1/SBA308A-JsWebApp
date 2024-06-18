import { createImageTag } from "./helper.js";
const imagesContainer = document.getElementById("images");
async function getCatimages(){
    const response = await fetch ("https://api.thecatapi.com/v1/images/search?limit=10")
    const result = await response.json()
    for(let i = 0; i < result.length; i ++){
        const img = createImageTag(result[i].url)
        imagesContainer.appendChild(img)

    }
}

export{getCatimages}