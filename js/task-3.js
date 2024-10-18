const input = document.querySelector("#name-input");
const spanGreet = document.querySelector("#name-output");

input.addEventListener("input", greeting);

function greeting(event) {
  const inputValue = input.value.trim();
  spanGreet.textContent = inputValue;
  if (inputValue === "") {
    spanGreet.textContent = "Anonymous";
  }
}
