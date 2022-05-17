const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', clickOpen)
close.addEventListener('click', clickClose)

function clickOpen(event) {
    menu.classList.add('show');
    hamburger.classList.add('hide');
}

function clickClose(event) {
    menu.classList.remove('show');
    hamburger.classList.remove('hide');
}