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