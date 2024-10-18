const form = document.querySelector(".login-form");

form.addEventListener("submit", loginForm);

function loginForm(event) {
  event.preventDefault();

  const elements = event.currentTarget;
  const elementsEmail = elements.email.value;
  const elementsPassword = elements.password.value;

  const info = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  console.log(info);

  if (elementsEmail === "" || elementsPassword === "") {
    alert("All form fields must be filled in");
  }

  event.currentTarget.reset();
}
