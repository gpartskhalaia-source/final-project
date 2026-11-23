
// GET HTML ELEMENTS

let slides = document.querySelectorAll('.slide');

let arrowLeft = document.querySelector('.prev-btn');
let arrowRight = document.querySelector('.next-btn');
let counter = document.querySelector('.slide-counter');

let sliderIndex = 0;


// SET SLIDER

function setSlider() {

    slides.forEach(function(slide) {

        slide.hidden = true;

        slide.classList.remove('active');

    });

    slides[sliderIndex].hidden = false;

    slides[sliderIndex].classList.add('active');

    counter.textContent = `${sliderIndex + 1} / ${slides.length}`;

}


// LEFT ARROW

function arrowLeftClick() {

    if (sliderIndex == 0) {

        sliderIndex = slides.length;

    }

    sliderIndex--;

    setSlider();

}


// RIGHT ARROW

function arrowRightClick() {

    if (sliderIndex == slides.length - 1) {

        sliderIndex = -1;

    }

    sliderIndex++;

    setSlider();

}


// ARROW CLICK EVENTS

arrowLeft.addEventListener('click', arrowLeftClick);

arrowRight.addEventListener('click', arrowRightClick);


// AUTOMATIC SLIDER

setInterval(() => {

    arrowRightClick();

}, 3000);


// INITIAL SLIDER

setSlider();