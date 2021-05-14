let navUl = document.querySelector('#nav-ul');
let navigation = document.getElementById('navigation');

let count = 0;

function burger() {

    if (count == 0) {

        navUl.classList.add('burger-nav');
        navigation.classList.add('navigation');

        count++;

    } else {
        navUl.classList.remove('burger-nav');
        navigation.classList.remove('navigation');

        count = 0;
    }
}

// სლაიდერი

var slides = document.getElementsByClassName("mySlides");

var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[slideIndex - 1].classList.add('active')
}

// modal

let modals = document.querySelector('modal');
let modaActive = document.querySelector('#modal-active');

function modal() {
    modaActive.classList.add('test-modal')
}

function closeModal () {
    modaActive.classList.remove('test-modal')
}
