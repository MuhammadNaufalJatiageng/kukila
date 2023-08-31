const listProduct = document.querySelector(".wrapper-scroller");
const scrollL = document.getElementById("left");
const scrollR = document.getElementById("right");
firstImg = listProduct.querySelectorAll(".local-item")[0];
arrowIcons = document.querySelectorAll(".container div i");


// Membuat Scroll Gambar Menggunakan Mouse
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 16; // Getting first img width & adding 15 margin value
let scrollWidth = listProduct.scrollWidth - listProduct.clientWidth;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", ()=>{
        listProduct.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        showHideIcon(); 
    })
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = listProduct.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    listProduct.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop  = () => {
    isDragStart = false;
}

listProduct.addEventListener("mousedown", dragStart);
listProduct.addEventListener("mousemove", dragging);
listProduct.addEventListener("mouseup", dragStop);