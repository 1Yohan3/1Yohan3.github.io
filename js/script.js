// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const text = "Greetings User, Welcome to my Cybersecurity Projects";
    let index = 0;

    function type() {
        if (index < text.length) {
            cursor.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            cursor.classList.remove('cursor');
        }
    }

    type();
});

// Rotating Quotes
const quotes = [
    "“Cybersecurity is not just about protecting your devices. It’s about protecting yourself.”",
    "“Hackers are breaking the systems for profit. Before, it was about intellectual curiosity and pursuit of knowledge and thrill, and now hacking is big business.”",
    "“Security is always excessive until it’s not enough.”",
    "“There is no such thing as a perfect cybersecurity system.”"
];

let currentQuote = 0;

function rotateQuotes() {
    document.getElementById("quote").innerText = quotes[currentQuote];
    currentQuote = (currentQuote + 1) % quotes.length;
}

// Rotate quotes every 5 seconds
setInterval(rotateQuotes, 5000);