// Review
let currentPage = 1;
let totalPagesAp;

const reviews = [
    "Amazing experience! Beautiful places and wonderful memories.",
    "Everything was well organized. I really enjoyed the trip!",
    "One of the best adventures I've ever had!",
    "Beautiful destinations and an unforgettable experience.",
    "I loved every moment of the trip!",
    "Fantastic experience! I would definitely recommend it."
];

function getUsers(page) {
    fetch('https://randomuser.me/api/?results=3&seed=trailnest&page=' + page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Server error');
            }
            return response.json();
        })
        .then(responseData => {
            render(responseData);
        })
        .catch(error => {
            errorRender();
            console.log(error);
        });
}

function render(responseData) {
    let fragment = document.createDocumentFragment();

    responseData.results.forEach((item, index) => {
        let card = document.createElement('article');
        card.classList.add('review-card');

        let imgUser = document.createElement('img');
        imgUser.src = item.picture.large;
        imgUser.alt = item.name.first + ' ' + item.name.last;
        imgUser.classList.add('review-avatar');

        let name = document.createElement('h3');
        name.textContent = item.name.first + ' ' + item.name.last;

        let stars = document.createElement('p');
        stars.textContent = '★★★★★';
        stars.classList.add('review-stars');

        let comment = document.createElement('p');
        comment.textContent = reviews[(currentPage - 1) * 3 + index];

        card.appendChild(imgUser);
        card.appendChild(name);
        card.appendChild(stars);
        card.appendChild(comment);

        fragment.appendChild(card);
    });

    document.getElementById('reviews-list').innerHTML = '';
    document.getElementById('reviews-list').appendChild(fragment);

    totalPagesAp = 2;

    document.getElementById('page-number').textContent =
        currentPage + ' / ' + totalPagesAp;
}

function errorRender() {
    let p = document.createElement('p');
    p.textContent = 'Server error';

    document.getElementById('reviews-message').appendChild(p);
}

document.getElementById('loadPrev').addEventListener('click', function () {
    if (currentPage == 1) {
        return;
    }

    currentPage -= 1;
    getUsers(currentPage);
});

document.getElementById('loadNext').addEventListener('click', function () {
    if (currentPage == totalPagesAp) {
        return;
    }

    currentPage += 1;
    getUsers(currentPage);
});

getUsers(currentPage);