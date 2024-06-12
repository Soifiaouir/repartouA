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
