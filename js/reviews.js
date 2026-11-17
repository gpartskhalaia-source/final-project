
 // REVIEWS

let currentPage = 1;
let totalPagesAp = 2;

const reviews = [
  "Amazing experience! Beautiful places and wonderful memories.",
  "Everything was well organized. I really enjoyed the trip!",
  "One of the best adventures I've ever had!",
  "Beautiful destinations and an unforgettable experience.",
  "I loved every moment of the trip!",
  "Fantastic experience! I would definitely recommend it."
];

function getUsers(page) {
  document.getElementById("reviews-message").textContent =
    "Loading reviews...";

  fetch("https://randomuser.me/api/?results=6&seed=trailnest")
    .then(response => {
      if (!response.ok) {
        throw new Error("Server error");
      }

      return response.json();
    })
    .then(responseData => {
      render(responseData, page);

      currentPage = page;

      document.getElementById("reviews-message").textContent = "";
    })
    .catch(error => {
      errorRender();
      console.log(error);
    });
}

function render(responseData, page) {
  let fragment = document.createDocumentFragment();

  let start = (page - 1) * 3;

  let users = responseData.results.slice(start, start + 3);

  users.forEach((item, index) => {
    let card = document.createElement("article");
    card.classList.add("review-card");

    let imgUser = document.createElement("img");
    imgUser.src = item.picture.large;
    imgUser.alt = item.name.first + " " + item.name.last;
    imgUser.classList.add("review-avatar");

    let name = document.createElement("h3");
    name.textContent = item.name.first + " " + item.name.last;

    let stars = document.createElement("p");
    stars.textContent = "★★★★★";
    stars.classList.add("review-stars");

    let comment = document.createElement("p");
    comment.textContent = reviews[start + index];

    card.appendChild(imgUser);
    card.appendChild(name);
    card.appendChild(stars);
    card.appendChild(comment);

    fragment.appendChild(card);
  });

  document.getElementById("reviews-list").innerHTML = "";
  document.getElementById("reviews-list").appendChild(fragment);

  document.getElementById("page-number").textContent =
    page + " / " + totalPagesAp;
}

function errorRender() {
  document.getElementById("reviews-message").textContent =
    "Server error. Please try again.";
}

document.getElementById("loadPrev").addEventListener("click", function () {
  if (currentPage == 1) {
    return;
  }

  getUsers(currentPage - 1);
});

document.getElementById("loadNext").addEventListener("click", function () {
  if (currentPage == totalPagesAp) {
    return;
  }

  getUsers(currentPage + 1);
});

getUsers(currentPage);


