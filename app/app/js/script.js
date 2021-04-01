const btn = document.querySelector('#btnHamburger');
const header = document.querySelector('header');
const fadeElems = document.querySelectorAll('.faded');
const body = document.querySelector('body');

let flag = false;

btn.addEventListener('click', () => {
    if (!flag) {
        header.classList.add('open');
        body.classList.add('no-scroll');
        fadeElems.forEach(ele => {
            ele.classList.add('fade-in');
            ele.classList.remove('fade-out');
        })
        
        flag = true;
    }
    else {
        header.classList.remove('open');
        body.classList.remove('no-scroll');
        fadeElems.forEach(ele => {
            ele.classList.add('fade-out');
            ele.classList.remove('fade-in');
        })
        
        flag = false;
    }
})