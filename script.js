// Array met afbeeldingennamen voor de slideshow
const images = [
    "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", 
    "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg",
    "image9.jpg", "image10.jpg", "image11.jpg"
];

let currentImageIndex = 0;
const slide = document.getElementById("slide");

// Laat de volgende afbeelding zien in de slideshow
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slide.src = images[currentImageIndex];
}

// Start slideshow met interval
let interval;

// Knop "Yes" - laat slideshow zien en start animatie
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("question-container").classList.add("hidden"); // Verberg de vraag
    document.querySelector(".slideshow").style.display = "block"; // Toon de slideshow
    interval = setInterval(nextImage, 2000); // Verander elke 2 seconden
});

// Knop "No" - laat een bericht zien
document.getElementById("noButton").addEventListener("click", function() {
    alert("Aww, maybe next time! 💔");
});
