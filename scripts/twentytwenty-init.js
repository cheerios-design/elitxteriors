const container = document.getElementById("slider-container");
const beforeImage = document.getElementById("before-image");
const slider = document.getElementById("slider");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const offsetX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  beforeImage.style.width = `${offsetX}px`;
  slider.style.left = `${offsetX}px`;
});

// Optional: add touch support for mobile
container.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const rect = container.getBoundingClientRect();
  const offsetX = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
  beforeImage.style.width = `${offsetX}px`;
  slider.style.left = `${offsetX}px`;
});
