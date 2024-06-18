var robertImage = document.getElementById('Robert');
var angle = 0;
var direction = 1;


function rotateImage() {
   
    angle += direction * 1; 
    robertImage.style.transform = 'rotate(' + angle + 'deg)';

   
    if (angle >= 25 || angle <= -25) { 
        direction *= -1;
    }
}


setInterval(rotateImage, 50); 


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.img');
    const totalSlides = slides.length;

    // Ensure the index is within the valid range
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.img').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Show the first slide initially
showSlide(currentIndex);
