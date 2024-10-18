function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const controlsInput = controls.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
let boxSizes = 30;

buttonCreate.addEventListener("click", buttonCreateMarkup);

buttonDestroy.addEventListener("click", () => {
  controlsInput.value = "";
  destroyBoxes();
});

function buttonCreateMarkup() {
  const inputValue = Number(controlsInput.value);
  if (controlsInput.value >= 1 && controlsInput.value <= 100) {
    createBoxes(controlsInput.value);
  }
  return;
}
function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSizes}px`;
    newBox.style.height = `${boxSizes}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.append(newBox);
    boxSizes += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
  boxSizes = 30;
}
