import { getCatimages } from "./CatData.js";

const button = document.querySelector("button")
button.addEventListener("click",async ()=>{
    console.log(getCatimages)
    await getCatimages()
})
