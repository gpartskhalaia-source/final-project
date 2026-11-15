const burgerButton = document.getElementById("burger-btn");
const navigation = document.getElementById("navigation");

if (burgerButton && navigation) {
  function closeMenu() {
    navigation.classList.remove("open");
    burgerButton.textContent = "☰";
    burgerButton.setAttribute("aria-expanded", "false");
    burgerButton.setAttribute("aria-label", "Open menu");
  }

  burgerButton.addEventListener("click", function () {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    burgerButton.textContent = isOpen ? "✕" : "☰";
    burgerButton.setAttribute("aria-expanded", String(isOpen));
    burgerButton.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  navigation.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      navigation.classList.contains("open")
    ) {
      closeMenu();
      burgerButton.focus();
    }
  });
}