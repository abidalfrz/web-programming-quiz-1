const text = "Hi, I'm Muhammad Abid Baihaqi Al Faridzi"; 
const typingElement = document.getElementById("typing");
let i = 0;

function typeEffect() {
    if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120); 
    }
}

typeEffect();

