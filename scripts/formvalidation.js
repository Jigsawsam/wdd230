const p1 = document.querySelector("#password");
const p2 = document.querySelector("#confirmPassword");
const fb = document.querySelector("#feedback");

p2.addEventListener('focusout',controlar)

function controlar() {
    //console.log('inside the function')
    if (p1.value !== p2.value) {
       //console.log('no match')
        p1.value=''
        p2.value=''
        p1.focus()
        fb.textContent = 'Password did not match. Please try again.'
    } else {
        //console.log('match!')
        fb.textContent = ''
    }
}