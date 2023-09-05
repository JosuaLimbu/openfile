function moveNoButton() {
    const noButton = document.querySelector('.no-button');
    const randomX = Math.random() * 200 - 25; 
    const randomY = Math.random() * 200 - 25; 
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}