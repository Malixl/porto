const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["UI/UX Designer", "Front-End Developer", "Graphic Designer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//wangsaf
const sendwhatsapp = () => {
  const phonenumber = "+6283119230298";
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".message").value;

  if (name && email && message) {
    const url =
      "https://wa.me/" +
      phonenumber +
      "?text=" +
      "*Name :* " +
      name +
      "%0a" +
      "*Email :* " +
      email +
      "%0a" +
      "*Message :* " +
      message +
      "%0a%0a";
    window.open(url, "_blank").focus();
  }
};
