const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");
const images = Array.from(track.children);

let currentIndex = 0;

// Clonar primeras y últimas imágenes para hacer loop visual
const cloneStart = images.slice(-3).map((img) => img.cloneNode(true));
const cloneEnd = images.slice(0, 3).map((img) => img.cloneNode(true));

cloneStart.forEach((img) => track.prepend(img));
cloneEnd.forEach((img) => track.append(img));

const allImages = Array.from(track.children);
let itemWidth = 0;

function visibleItems() {
  return window.innerWidth <= 768
    ? 1
    : Math.floor(track.offsetWidth / itemWidth);
}

function updateCarousel(skipTransition = false) {
  itemWidth = allImages[0].offsetWidth + 16;
  const offset = (currentIndex + 3) * itemWidth; // offset por clones
  if (skipTransition) track.style.transition = "none";
  track.style.transform = `translateX(-${offset}px)`;
  if (skipTransition) {
    requestAnimationFrame(() => {
      track.style.transition = "transform 0.5s ease-in-out";
    });
  }
}

function handleNext() {
  currentIndex++;
  updateCarousel();
  const maxIndex = images.length;
  if (currentIndex >= maxIndex) {
    currentIndex = 0;
    setTimeout(() => updateCarousel(true), 510);
  }
}

function handlePrev() {
  currentIndex--;
  updateCarousel();
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
    setTimeout(() => updateCarousel(true), 510);
  }
}

nextBtn.addEventListener("click", handleNext);
prevBtn.addEventListener("click", handlePrev);
window.addEventListener("resize", () => updateCarousel(true));
window.addEventListener("load", () => updateCarousel(true));
