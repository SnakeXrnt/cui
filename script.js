const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.transform = 'translateX(0%)';
        } else {
            slide.style.transform = 'translateX(-100%)';
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Automatically scroll every 3 seconds

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
        currentSlide = i;
    });
});

showSlide(currentSlide);
