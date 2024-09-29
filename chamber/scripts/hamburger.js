// Hamburger
const hamburgerElement = document.querySelector('#navButton');
const navElement = document.querySelector('nav');

hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});