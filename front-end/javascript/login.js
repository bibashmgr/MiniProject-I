// hamburger effect

const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-container');
const links = document.querySelector('.navlinks li');
const main = document.querySelector('main');


hamburger.addEventListener('click', () => {
    navlinks.classList.toggle("open");
    main.classList.toggle("open");
});

// form-validation

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === ''){
        setErrorFor(Email,'Email cannot be blank');
    }
}

function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}
