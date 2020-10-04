
// player-stats
const slidesOne = document.querySelector('.slides-one');
const imagesOne = document.querySelectorAll('.slides-one img');

const prevBtnOne = document.querySelector('#prev-btn-one');
const nextBtnOne = document.querySelector('#next-btn-one');

let counterOne = 1;
const sizeOne = imagesOne[0].clientWidth;

slidesOne.style.transform = 'translateX(' + (-sizeOne * counterOne) + 'px)';

nextBtnOne.addEventListener('click',() => {
    if(counterOne >= imagesOne.length -1) return;
    slidesOne.style.transition = "transform 0.4s ease-in-out";
    counterOne++;
    slidesOne.style.transform = 'translateX(' + (-sizeOne * counterOne) + 'px)';
});

prevBtnOne.addEventListener('click',() => {
    if(counterOne <=0) return;
    slidesOne.style.transition = "transform 0.4s ease-in-out"
    counterOne--;
    slidesOne.style.transform = 'translateX(' + (-sizeOne * counterOne) + 'px)';
});

slidesOne.addEventListener('transitionend',() => {
    if(imagesOne[counterOne].id === 'last-clone-one'){
        slidesOne.style.transition = "none";
        counterOne = imagesOne.length -2;
        slidesOne.style.transform = 'translateX(' + (-sizeOne * counterOne) + 'px)';
    }

    if(imagesOne[counterOne].id === 'first-clone-one'){
        slidesOne.style.transition = "none";
        counterOne = imagesOne.length -counterOne;
        slidesOne.style.transform = 'translateX(' + (-sizeOne * counterOne) + 'px)';
    }
});

// gallery

const slidesTwo = document.querySelector('.slides-two');
const imagesTwo = document.querySelectorAll('.slides-two img');

const prevBtnTwo = document.querySelector('#prev-btn-two');
const nextBtnTwo = document.querySelector('#next-btn-two');

let counterTwo = 1;
const sizeTwo = imagesTwo[0].clientWidth;

slidesTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';

nextBtnTwo.addEventListener('click',() => {
    if(counterTwo >= imagesTwo.length -1) return;
    slidesTwo.style.transition = "transform 0.4s ease-in-out";
    counterTwo++;
    slidesTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';
});

prevBtnTwo.addEventListener('click',() => {
    if(counterTwo <=0) return;
    slidesTwo.style.transition = "transform 0.4s ease-in-out"
    counterTwo--;
    slidesTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';
});

slidesTwo.addEventListener('transitionend',() => {
    if(imagesTwo[counterTwo].id === 'last-clone-two'){
        slidesTwo.style.transition = "none";
        counterTwo = imagesTwo.length -2;
        slidesTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';
    }

    if(imagesTwo[counterTwo].id === 'first-clone-two'){
        slidesTwo.style.transition = "none";
        counterTwo = imagesTwo.length -counterTwo;
        slidesTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';
    }
});