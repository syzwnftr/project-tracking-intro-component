const hamburger = document.querySelector('.hamburger')
const hamCloseIcon = document.querySelector('.hamburger-close');
const navLinks = document.querySelector('.nav-links');

let count = 0;
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('isActive');
    if(count === 0) {
        hamCloseIcon.src = './images/icon-close.svg';
        count = 1;
        navLinks.classList.remove('display-none');
        return;
   }
    if(count === 1) {
        hamCloseIcon.src = './images/icon-hamburger.svg';
        count = 0;
        navLinks.classList.add('display-none');
        return;
   }
});
