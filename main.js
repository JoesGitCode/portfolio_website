document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector("#next");
  const previous = document.querySelector("#previous");
  const auto = false;
  const intervalTime = 5000;
  let slideInterval;

  const nextSlide = () => {
    const current = document.querySelector(".current");
    current.classList.remove("current");
    if (current.nextElementSibling) {
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

  next.addEventListener("click", () => {
    nextSlide();
  });

  previous.addEventListener("click", e => {
    previousSlide();
  });
});
