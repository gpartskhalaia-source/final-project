const form = document.getElementById("registration-form");
const fullName = document.getElementById("name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (fullName.value.trim() === "") {
    message.textContent = "Please enter your name.";
    message.className = "error";
    fullName.focus();
    return;
  }

  if (password.value !== confirmPassword.value) {
    message.textContent = "Passwords do not match.";
    message.className = "error";
    confirmPassword.focus();
    return;
  }

  message.textContent = "Form completed successfully!";
  message.className = "success";

  form.reset();
});