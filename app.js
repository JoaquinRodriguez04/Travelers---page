const home = document.querySelector('.iconBars');
const close = document.querySelector('.iconClose');
const navbarMobile = document.querySelector('.navbar-mobile');

home.addEventListener('click', () => {
    navbarMobile.classList.remove('mobile-disabled');
});

close.addEventListener('click', () => {
    navbarMobile.classList.add('mobile-disabled');
});
