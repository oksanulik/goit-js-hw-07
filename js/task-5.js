const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", clickButton);

function clickButton(event) {
  const body = document.querySelector("body");
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
