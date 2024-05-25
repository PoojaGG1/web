const menuBtn = document.getElementById('menu-btn');
const navLink = document.getElementById('nav-links');


// let slideIndex = 1;
// showSlides(slideIndex);


// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }

// // Automatic slideshow (optional)
// let timer = setInterval(() => plusSlides(1), 2000); // Change 3000 to adjust time between slides in milliseconds

// // Stop automatic slideshow on hover (optional)
// let slideContainer = document.querySelector('.slideshow-container');
// slideContainer.addEventListener('mouseover', () => clearInterval(timer));
// slideContainer.addEventListener('mouseout', () => timer = setInterval(() => plusSlides(1), 2000));

menuBtn.addEventListener('click', () => {
    navLink.style.display = navLink.style.display === 'none' ? 'flex' : 'none';
});


// const hero = document.querySelector('.bg-img');
// const images = [
//     'images/grp_std.jpg',
//     'images/group study.png'
// ];
// let currentIndex = 0;

// function changeBackground() {
//     console.log("Function called");
//     hero.style.backgroundImage = `url(${images[currentIndex]})`;
//     currentIndex = (currentIndex + 1) % images.length;
// }

// // Initially set the background image
// changeBackground();

// // Change the background image every 5 seconds
// setInterval(changeBackground, 5000);