// Functie om de "Ja" of "Nee" optie te verwerken
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            document.getElementById('secret-message').classList.remove('hidden'); // Toon de geheime boodschap
            startSlideshow(); // Start de afbeeldingenpresentatie
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    }
}

// Regenboog effect bij "Ja"
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

// Draaiende kat weergeven
function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.style.animation = "spin 4s linear infinite"; // Kat laten draaien
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Start de afbeeldingenpresentatie
function startSlideshow() {
    var slideshow = document.getElementById('slideshow');
    slideshow.style.display = 'block';

    var images = ['Afbeelding(4) (3).jpg', 'Afbeelding(3) (3).jpg', 'Afbeelding(2) (4).jpg']; // Voeg hier je afbeeldingen toe
    var index = 0;

    setInterval(function() {
        index = (index + 1) % images.length;
        slideshow.src = images[index];
    }, 2000); // Verandert afbeelding elke 2 seconden
}

// Start de kat bij het laden van de pagina
displayCat();
