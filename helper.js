function createImageTag(src) {
    const img = document.createElement("img")
    img.setAttribute("src", src);
    return img
}

export{createImageTag}