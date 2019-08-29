document.addEventListener("DOMContentLoaded", () => {
  // IMAGE SLIDER

  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector("#next");
  const previous = document.querySelector("#previous");
  const auto = true;
  const intervalTime = 5000;
  let slideInterval;

  const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.nextElementSibling.classList[0] == "slide") {
      current.nextElementSibling.classList.add("current");
    } else {
      slides[0].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
  };

  const previousSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.previousElementSibling) {
      current.previousElementSibling.classList.add("current");
    } else {
      slides[slides.length - 1].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
  };

  next.addEventListener("click", event => {
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });

  previous.addEventListener("click", event => {
    previousSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  });

  if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  // TYPEWRITER

  const TypeWriter = function(textElement, words, delayTime = 2000) {
    this.textElement = textElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.delayTime = parseInt(delayTime, 10);
    this.type();
    this.isDeleting = false;
  };

  const textElement = document.querySelector(".typewriter ");
  const words = JSON.parse(textElement.getAttribute("type-words"));
  const delay = textElement.getAttribute("type-delay");
  new TypeWriter(textElement, words, delay);
});
