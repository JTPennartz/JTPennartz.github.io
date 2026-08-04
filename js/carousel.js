const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const carousel = document.querySelector(".carousel");

let index = 0;
let autoSlide;

// ===========================
// Move to Next Slide
// ===========================
function nextSlide(resetTimer = true) {

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    updateCarousel();

    if (resetTimer) {
        stopAutoSlide();
        startAutoSlide();
    }
}

// ===========================
// Move to Previous Slide
// ===========================
function previousSlide(resetTimer = true) {

    index--;

    if (index < 0) {
        index = slides.length - 1;
    }

    updateCarousel();

    if (resetTimer) {
        stopAutoSlide();
        startAutoSlide();
    }
}

// ===========================
// Update Carousel Position
// ===========================
function updateCarousel() {

    track.style.transform = `translateX(-${index * 100}%)`;

}

// ===========================
// Auto Slide
// ===========================
function startAutoSlide() {

    clearInterval(autoSlide);

    autoSlide = setInterval(() => {

        nextSlide(false);

    }, 8000);

}

function stopAutoSlide() {

    clearInterval(autoSlide);

}

// ===========================
// Button Events
// ===========================
next.addEventListener("click", () => {
    nextSlide();
});

prev.addEventListener("click", () => {
    previousSlide();
});

// ===========================
// Pause on Hover
// ===========================
carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", startAutoSlide);

// ===========================
// Start Carousel
// ===========================
startAutoSlide();