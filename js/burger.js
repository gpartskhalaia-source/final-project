const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function () {
  navigation.classList.toggle("open");

  if (navigation.classList.contains("open")) {
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    menuBtn.setAttribute("aria-label", "Close menu");
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menuBtn.setAttribute("aria-label", "Open menu");
  }
});

const navLinks = document.querySelectorAll(".nav-page a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navigation.classList.remove("open");
    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    menuBtn.setAttribute("aria-label", "Open menu");
  });
});