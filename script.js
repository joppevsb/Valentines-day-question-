// Diavoorstelling script
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1 : 0;
    });
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 2000); // Om de 2 seconden verandert de foto
showSlide();

// Vallende hartjes script
function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5 seconden
    document.getElementById("hearts-container").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);

// Verrassing laten zien
function toonVerrassing() {
    document.getElementById("verrassing").style.display = "block";
}
