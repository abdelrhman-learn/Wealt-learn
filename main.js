let carousel = document.querySelector('.carousel');
let arrowBtns = document.querySelectorAll('.wrapper i');
let firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging =false;
let startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
})
carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    carousel.classList.add("draggable");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
});
carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.classList.remove("draggable");
});


carousel.addEventListener("mousemove", (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
})