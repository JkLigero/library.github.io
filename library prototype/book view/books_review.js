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