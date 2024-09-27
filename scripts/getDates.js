// Current year
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

// Hamburger
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('nav');

hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// Dark mode
const drkBtn = document.querySelector('#darkButton');
const main = document.querySelector('main');
const body = document.querySelector('body');
const cards = document.querySelectorAll('.card');


drkBtn.addEventListener('click', () =>{
    main.classList.toggle('dark');
    body.classList.toggle('dark');
    
    cards.forEach(card => {
        card.classList.toggle('dark');
    });
});