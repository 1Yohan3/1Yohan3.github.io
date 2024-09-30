// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const text = "Welcome to my Cybersecurity Projects Page!";
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