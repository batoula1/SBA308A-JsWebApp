async function getCatimages(){
    const response = await fetch(
"https://api.thecatapi.com/v1/images/search?limit=10"
);

const data = await response.json();

console.log(data);
}


getCatimages();

function createImageTag(src){
    const img = document.createElement("img");
    img.setAttribute("src", src);
}