const slider = document.getElementById("slider");
const beforeImage = document.getElementById("before-image");
const container = slider.parentElement;

let isSliding = false;

const updateSlider = (x) => {
  const rect = container.getBoundingClientRect();
  let offsetX = x - rect.left;
  offsetX = Math.max(0, Math.min(offsetX, rect.width));
  beforeImage.style.width = `${offsetX}px`;
  slider.style.left = `${offsetX}px`;
};

slider.addEventListener("mousedown", () => (isSliding = true));
window.addEventListener("mouseup", () => (isSliding = false));
window.addEventListener("mousemove", (e) => {
  if (isSliding) updateSlider(e.clientX);
});

slider.addEventListener("touchstart", () => (isSliding = true));
window.addEventListener("touchend", () => (isSliding = false));
window.addEventListener("touchmove", (e) => {
  if (isSliding) updateSlider(e.touches[0].clientX);
});
