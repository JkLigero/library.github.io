const carousel = document.querySelector(".carousel"),
firstImg = document.querySelectorAll("img")[20];
arrowIcons = document.querySelectorAll(".top-books i");


let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 19;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () =>{
    isDragStart = false;
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

//neww books
const carousels = document.querySelector(".carousels"),
firstImgs = document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".new-books i");


let isDragStarts = false, prevPageXs, prevScrollLefts;
let firstImgWidths = firstImgs.clientWidth + 19;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousels.scrollLeft += icon.id == "left-new" ? -firstImgWidths : firstImgWidths;
    });
});

const dragStarts = (e) =>{
    isDragStarts = true;
    prevPageXs = e.pageX;
    prevScrollLefts = carousels.scrollLeft;
}
const draggings = (e) =>{
    if(!isDragStarts) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageXs;
    carousels.scrollLeft = prevScrollLefts - positionDiff;
}

const dragStops = () =>{
    isDragStarts = false;
}
carousels.addEventListener("mousedown", dragStarts);
carousels.addEventListener("mousemove", draggings);
carousels.addEventListener("mouseup", dragStops);


//horror books
const Carousels = document.querySelector(".carousel-horror"),
FirstImgs = document.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".horror-books i");


let IsDragStarts = false, PrevPageXs, PrevScrollLefts;
let FirstImgWidths = FirstImgs.clientWidth + 19;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        Carousels.scrollLeft += icon.id == "left-horror" ? -FirstImgWidths : FirstImgWidths;
    });
});

const DragStarts = (e) =>{
    IsDragStarts = true;
    PrevPageXs = e.pageX;
    PrevScrollLefts = Carousels.scrollLeft;
}
const Draggings = (e) =>{
    if(!IsDragStarts) return;
    e.preventDefault();
    let positionDiff = e.pageX - PrevPageXs;
    Carousels.scrollLeft = PrevScrollLefts - positionDiff;
}

const DragStops = () =>{
    IsDragStarts = false;
}
Carousels.addEventListener("mousedown", DragStarts);
Carousels.addEventListener("mousemove", Draggings);
Carousels.addEventListener("mouseup", DragStops);