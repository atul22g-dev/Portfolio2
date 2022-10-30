// Navigation Menu
const navMenu = document.querySelector('.navigation');
const navButton = document.querySelector('#navigation-button');
let isMenuActive = false;

const navButtonLinks = document.querySelectorAll('.navigation li a');

navButtonLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navIconMenu = `<i class="bi bi-list"></i>`;
        navButton.innerHTML = navIconMenu;
        isMenuActive = false;
        navMenu.classList.remove('show');
        navMenu.classList.remove('animate__animated');
        navMenu.classList.remove('animate__bounceInLeft');
    });
});

navButton.addEventListener('click', () => {
    if (!isMenuActive) {
        const navIconClose = `<i class="bi bi-x-lg"></i>`;
        navButton.innerHTML = navIconClose;
        isMenuActive = true;
    } else {
        const navIconMenu = `<i class="bi bi-list"></i>`;
        navButton.innerHTML = navIconMenu;
        isMenuActive = false;
    }
    // Show and Hide Menu
    navMenu.classList.toggle('show');
    navMenu.classList.toggle('animate__animated');
    navMenu.classList.toggle('animate__bounceInLeft');
});

// Scroll Reveal
ScrollReveal().reveal('.about', { delay: 300 });
ScrollReveal().reveal('.testimonials', { delay: 300 });
ScrollReveal().reveal('.contact', { delay: 300 });

// loading
var preloader = document.getElementById("loading");
function loading() {
  preloader.style.display = "none";
}