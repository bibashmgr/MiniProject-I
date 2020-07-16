const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-container');
const links = document.querySelector('.navlinks li');
const main = document.querySelector('main');


hamburger.addEventListener('click', () => {
    navlinks.classList.toggle("open");
    main.classList.toggle("open");
});

function validation(){
    
    let email =document.getElementById=('email');
    let password =document.getElementById=('password');
}