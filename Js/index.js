// for select color in color box via data-colar attribute
const colorBox = document.querySelectorAll(".colors-pattale .content .color-box");
colorBox.forEach(eachbox=> {
    eachbox.style.background = eachbox.dataset.color;
});