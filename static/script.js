document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.card-container');
    const cardWidth = 300;
    const gap = 20;

    let currentIndex = 0;
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCards = 3;

    function updateSlider() {
        const offset = -currentIndex * (cardWidth + gap);
        slider.style.transform = `translateX(${offset}px)`;
    }

    updateSlider();
});
