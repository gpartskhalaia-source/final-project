
const slides = document.querySelectorAll(".slide");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const counter = document.querySelector(".slide-counter");

if (slides.length > 0 && prevButton && nextButton && counter) {

    let currentSlide = 0;

    function showSlide(index) {

        slides.forEach(function(slide) {
            slide.hidden = true;
            slide.classList.remove("active");
        });

        slides[index].hidden = false;
        slides[index].classList.add("active");

        counter.textContent =
            `${index + 1} / ${slides.length}`;
    }

    function nextSlide() {

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    }

    function prevSlide() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        showSlide(currentSlide);
    }

    let timer = setInterval(nextSlide, 3000);

    function restartTimer() {
        clearInterval(timer);
        timer = setInterval(nextSlide, 3000);
    }

    nextButton.addEventListener("click", function() {
        nextSlide();
        restartTimer();
    });

    prevButton.addEventListener("click", function() {
        prevSlide();
        restartTimer();
    });

    showSlide(currentSlide);
}
