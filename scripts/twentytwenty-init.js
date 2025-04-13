const container = document.getElementById("slider-container");
const beforeImage = document.getElementById("before-image");
const slider = document.getElementById("slider");
const beforeLabel = document.getElementById("before-label");

const updateSlider = (clientX) => {
  const rect = container.getBoundingClientRect();
  let offsetX = clientX - rect.left;
  offsetX = Math.max(0, Math.min(offsetX, rect.width));
  beforeImage.style.width = `${offsetX}px`;
  slider.style.left = `${offsetX}px`;
  beforeLabel.style.transform = `translateX(${offsetX - 60}px)`; // shift left to stay inside
};

// Cursor tracking
container.addEventListener("mousemove", (e) => {
  updateSlider(e.clientX);
});

// Touch tracking
container.addEventListener("touchmove", (e) => {
  updateSlider(e.touches[0].clientX);
});

// Intro animation
window.addEventListener("load", () => {
  let progress = 0;
  const animate = setInterval(() => {
    if (progress >= 50) {
      clearInterval(animate);
      return;
    }
    progress += 1.5;
    const widthPx = (container.offsetWidth * progress) / 100;
    beforeImage.style.width = `${widthPx}px`;
    slider.style.left = `${widthPx}px`;
    beforeLabel.style.transform = `translateX(${widthPx - 60}px)`;
  }, 16);
});
