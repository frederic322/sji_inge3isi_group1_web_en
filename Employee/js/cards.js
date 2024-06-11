// cards2.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const popup = document.getElementById('popup');
    const overlay = document.createElement('div');
    overlay.id = 'popup-overlay';
    document.body.appendChild(overlay);

    cards.forEach(card => {
        card.addEventListener('click', () => {
            document.body.classList.add('show-popup');
        });
    });

    overlay.addEventListener('click', () => {
        document.body.classList.remove('show-popup');
    });
});
