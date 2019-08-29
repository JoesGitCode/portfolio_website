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

  class TypeWriter {
    constructor(textElement, words, delayTime = 2000) {
      this.textElement = textElement;
      this.words = words;
      this.text = "";
      this.wordIndex = 0;
      this.delayTime = parseInt(delayTime, 10);
      this.type();
      this.isDeleting = false;
    }

    type() {
      const currentIndex = this.wordIndex % this.words.length;
      const fullWord = this.words[currentIndex];
      if (this.isDeleting) {
        this.text = fullWord.substring(0, this.text.length - 1);
      } else {
        this.text = fullWord.substring(0, this.text.length + 1);
      }

      this.textElement.innerHTML = `<span class="type">${this.text}</span>`;

      let typeSpeed = 100;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      if (!this.isDeleting && this.text == fullWord) {
        typeSpeed = this.delayTime;
        this.isDeleting = true;
      } else if (this.isDeleting && this.text == "") {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }

  const textElement = document.querySelector(".typewriter ");
  const words = JSON.parse(textElement.getAttribute("type-words"));
  const delay = textElement.getAttribute("type-delay");
  new TypeWriter(textElement, words, delay);
});
