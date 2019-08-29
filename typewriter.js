document.addEventListener("DOMContentLoaded", () => {
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
      let typeSpeed = 100;

      if (this.isDeleting) {
        typeSpeed /= 2;
        this.text = fullWord.substring(0, this.text.length - 1);
      } else {
        this.text = fullWord.substring(0, this.text.length + 1);
      }

      this.textElement.innerHTML = `<span class="type">${this.text}</span>`;

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
