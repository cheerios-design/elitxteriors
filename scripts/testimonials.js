const slides = document.querySelectorAll(".testimonial-slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
    slide.style.zIndex = i === index ? "1" : "0";
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// Init
showSlide(current);
setInterval(nextSlide, 5000); // change every 5 seconds
