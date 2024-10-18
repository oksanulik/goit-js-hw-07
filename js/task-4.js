const form = document.querySelector(".login-form");

form.addEventListener("submit", loginForm);

function loginForm(event) {
  event.preventDefault();

  const elements = event.currentTarget;
  const elementsEmail = elements.email.value.trim();
  const elementsPassword = elements.password.value.trim();

  if (elementsEmail === "" || elementsPassword === "") {
    alert("All form fields must be filled in");
    return;
  }

  const info = {
    email: elementsEmail,
    password: elementsPassword,
  };
  console.log(info);

  event.currentTarget.reset();
}
