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
