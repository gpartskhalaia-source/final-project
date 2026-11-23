const passwordshow = document.getElementById("password");
const toggleIconEye = document.getElementById("toggleIcon");
const togglePassword = document.getElementById("togglePassword");
const registration = document.getElementById("registration");
const message = document.getElementById("form-message");

function showHidePassword() {
  if (passwordshow.type === "password") {
    passwordshow.type = "text";
    toggleIconEye.classList.remove("fa-eye");
    toggleIconEye.classList.add("fa-eye-slash");
    togglePassword.setAttribute("aria-label", "Hide password");
    togglePassword.setAttribute("aria-pressed", "true");
  } else {
    passwordshow.type = "password";
    toggleIconEye.classList.remove("fa-eye-slash");
    toggleIconEye.classList.add("fa-eye");
    togglePassword.setAttribute("aria-label", "Show password");
    togglePassword.setAttribute("aria-pressed", "false");
  }
}

togglePassword.addEventListener("click", showHidePassword);

registration.addEventListener("submit", function (event) {
  event.preventDefault();
  message.textContent = "";

  const errors = {};

  const username = document.getElementById("username").value.trim();
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();
  const password = passwordshow.value;
  const password2 = document.getElementById("password2").value;
  const agree = document.getElementById("checkagree").checked;

  if (username === "") {
    errors.username = "Username can't be empty";
  } else if (username.length < 4) {
    errors.username = "Username must contain at least 4 characters";
  }

  if (email === "") {
    errors.email = "Email can't be empty";
  } else if (emailInput.validity.typeMismatch) {
    errors.email = "Please enter a valid email address";
  }

  if (password === "") {
    errors.password = "Password can't be empty";
  } else if (password.length < 8) {
    errors.password = "Password must contain at least 8 characters";
  }

  if (password2 === "") {
    errors.password2 = "Please repeat your password";
  } else if (password !== password2) {
    errors.password2 = "Passwords do not match";
  }

  if (!agree) {
    errors.agree = "Please confirm that this is a demo registration";
  }

  const fields = ["username", "email", "password", "password2"];

  fields.forEach(function (field) {
    const input = document.getElementById(field);

    document.getElementById("error-" + field).textContent =
      errors[field] || "";

    input.classList.toggle("error", Boolean(errors[field]));
    input.setAttribute("aria-invalid", String(Boolean(errors[field])));
  });

  document.getElementById("error-agree").textContent =
    errors.agree || "";

  document.getElementById("checkagree").setAttribute(
    "aria-invalid",
    String(Boolean(errors.agree))
  );

  if (Object.keys(errors).length === 0) {
    registration.reset();

    passwordshow.type = "password";
    toggleIconEye.classList.remove("fa-eye-slash");
    toggleIconEye.classList.add("fa-eye");
    togglePassword.setAttribute("aria-label", "Show password");
    togglePassword.setAttribute("aria-pressed", "false");

    message.textContent =
      "Your form has been submitted successfully!";
  } else {
    registration.querySelector('[aria-invalid="true"]').focus();
  }
});