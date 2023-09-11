// script.js
const header = document.querySelector('header');

function animateHeader() {
    header.style.fontSize = '36px';
    setTimeout(() => {
        header.style.fontSize = '24px';
    }, 1000); // Change back to the original size after 1 second
}

setInterval(animateHeader, 2000); // Call the animation function every 2 seconds
