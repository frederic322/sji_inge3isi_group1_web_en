// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const cards = document.querySelectorAll('.card');
    const cardData = JSON.parse(localStorage.getItem('cardData')) || [];

    // Load card data from local storage
    cards.forEach((card, index) => {
        if (cardData[index]) {
            card.querySelector('.card-title').textContent = cardData[index].title;
            card.querySelector('.card-text').textContent = cardData[index].text;
            card.querySelector('.card-img-top').src = cardData[index].img;
        }
    });
});

// Function to save card data
function saveCardData() {
    const cards = document.querySelectorAll('.card');
    const cardData = [];

    cards.forEach((card) => {
        cardData.push({
            title: card.querySelector('.card-title').textContent,
            text: card.querySelector('.card-text').textContent,
            img: card.querySelector('.card-img-top').src
        });
    });

    localStorage.setItem('cardData', JSON.stringify(cardData));
}

// Example usage of saveCardData (you can call this function after making changes in admin page)
// saveCardData();

// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const cardTitles = document.querySelectorAll('.card-title');
    const popup = document.getElementById('popup');
    const overlay = document.createElement('div');

    overlay.className = 'popup-overlay';
    document.body.appendChild(overlay);

    cardTitles.forEach(title => {
        title.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const cardTitles = document.querySelectorAll('.card-img-top');
    const popup = document.getElementById('popup');
    const overlay = document.createElement('div');

    overlay.className = 'popup-overlay';
    document.body.appendChild(overlay);

    cardTitles.forEach(title => {
        title.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});