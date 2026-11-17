
const form = document.querySelector("#calculator-form");
const tour = document.querySelector("#tour");
const people = document.querySelector("#people");
const totalPrice = document.querySelector("#total-price");

// Get tour price from URL
const params = new URLSearchParams(window.location.search);
const selectedTour = params.get("tour");

if (selectedTour) {
  tour.value = selectedTour;
}

// Calculate price
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const price = Number(tour.value);
  const travelers = Number(people.value);

  if (price > 0 && travelers >= 1 && Number.isInteger(travelers)) {
    const total = price * travelers;
    totalPrice.textContent = "$" + total;
  } else {
    totalPrice.textContent = "Please enter valid information";
  }
});
