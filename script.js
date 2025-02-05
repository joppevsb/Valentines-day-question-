function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            document.getElementById('secret-message').classList.remove('hidden');
            startSlideshow();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    }
}

// Regenboog effect
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

// Draaiende kat links
function displayLeftCat() {
    var leftCatContainer = document.getElementById('left-cat-container');
    var leftCatImage = new Image();
    leftCatImage.src = 'cat.gif';
    leftCatImage.alt = 'Cat';
    leftCatImage.style.animation = "spin 4s linear infinite"; 
    leftCatImage.onload = function() {
        leftCatContainer.appendChild(leftCatImage);
    };
}

// Schattige kat rechts
function displayRightCat() {
    var rightCatContainer = document.getElementById('right-cat-container');
    var rightCatImage = new Image();
    rightCatImage.src = 'cutecat.gif';
    rightCatImage.alt = 'Cute Cat';
    rightCatImage.onload = function() {
        rightCatContainer.appendChild(rightCatImage);
    };
}

// Start slideshow
function startSlideshow() {
    var slideshow = document.getElementById('slideshow');
    slideshow.style.display = 'block';

    var images = [];
    for (var i = 1; i <= 11; i++) {
        images.push('image' + i + '.jpg');
    }

    var index = 0;
    setInterval(function() {
        index = (index + 1) % images.length;
        slideshow.src = images[index];
    }, 2000);
}

// Start de katten bij het laden van de pagina
displayLeftCat();
displayRightCat();
