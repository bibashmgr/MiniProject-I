const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-container');
const links = document.querySelector('.navlinks li');


hamburger.addEventListener('click', () => {
    navlinks.classList.toggle("open");
});