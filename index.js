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
const images = document.querySelectorAll('.imgC img');//aller chercher les éléments nécessaire à la créatin du caroussel
const dots = document.querySelectorAll('.rondvert');

function showImage(index) {//lui indiquer ce qu'il doit faire
    images.forEach((img, i) => {// vérifie si l'image actuelle correspond à l'index donné
        img.classList.toggle('caché', i !== index);//i l'image n'est pas celle à l'index spécifié, elle ajoute la classe caché (donc cache l'image).
        img.classList.toggle('active', i === index);//'image est celle à l'index spécifié, elle ajoute la classe active (donc montre l'image).
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextImage() {//indique qu'il faut faire la longeur entière du tableau mark en appuiyant sur next en fesant image d'apres
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {//image d'avant en faisant aussi la longeur complete du tableau en mettant length ca nous permet d'ajouter ou enlever des images si on le souhaite
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.getElementById('next').addEventListener('click', nextImage);// c'est pour dire que lorque l'on clique dur la flache next il faut lancer ll'evenemment prévut plus haut dans le script à cet effet
document.getElementById('prev').addEventListener('click', prevImage);

setInterval(nextImage, 3000); // c'est le temps imparti au passage d'évenement



//let currentIndex = 0;

//function showSlide(index) {
  //  const slides = document.querySelectorAll('.img');
    //const totalSlides = slides.length;

    // Ensure the index is within the valid range
    //if (index >= totalSlides) {
      //  currentIndex = 0;
    //} else if (index < 0) {
      //  currentIndex = totalSlides - 1;
    //} else {
      //  currentIndex = index;
    //}

    //const offset = -currentIndex * 100;
 //   document.querySelector('.img').style.transform = `translateX(${offset}%)`;
//}

//function nextSlide() {
  //  showSlide(currentIndex + 1);
//}

//function prevSlide() {
  //  showSlide(currentIndex - 1);
//}

// Show the first slide initially
showSlide(currentIndex);
