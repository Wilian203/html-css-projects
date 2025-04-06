const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.header__menu-hamburguesa');
const closeMenu = document.querySelector('.menu__close')

openMenu.addEventListener('click', ()=>{
    menu.classList.add('menu--active');
});

closeMenu.addEventListener('click', ()=>{
    menu.classList.remove('menu--active')
})