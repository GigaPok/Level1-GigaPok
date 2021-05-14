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
