

const tours = [
  {
    id: 1,
    name: "Mountain Adventures",
    price: 290
  },
  {
    id: 2,
    name: "Beach Escapes",
    price: 350
  },
  {
    id: 3,
    name: "Nature and Wildlife",
    price: 210
  },
  {
    id: 4,
    name: "City Breaks",
    price: 180
  }
];

let bookings = [];

const toursContainer = document.getElementById("tours");
const bookingsContainer = document.getElementById("bookings");
const totalElement = document.getElementById("total-price");

tours.forEach(tour => {
  const tourDiv = document.createElement("div");

  tourDiv.innerHTML = `
    <h3>${tour.name}</h3>
    <p>Price: $${tour.price}</p>
    <button>Add to Booking</button>
  `;

  const button = tourDiv.querySelector("button");

  button.addEventListener("click", () => {
    bookings.push(tour);

    renderBookings();
  });

  toursContainer.appendChild(tourDiv);
});

function renderBookings() {

  bookingsContainer.innerHTML = "";

  let total = 0;

  bookings.forEach((tour, index) => {

    const bookingItem = document.createElement("div");

    bookingItem.innerHTML = `
      <p>
        ${tour.name} - $${tour.price}
        <button>Remove</button>
      </p>
    `;

    const removeButton = bookingItem.querySelector("button");

    removeButton.addEventListener("click", () => {

      bookings.splice(index, 1);

      renderBookings();
    });

    bookingsContainer.appendChild(bookingItem);

    total += tour.price;
  });

  totalElement.textContent = "$" + total;
}
