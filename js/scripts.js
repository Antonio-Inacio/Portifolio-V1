let currentIndex = 0;
const items = document.querySelectorAll('.carrossel-item');
const totalItems = items.length;

function showSlide(index) {
    const offset = -index * 100; // Ajuste baseado na largura do item
    document.querySelector('.carrossel-wrapper').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    showSlide(currentIndex);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});
