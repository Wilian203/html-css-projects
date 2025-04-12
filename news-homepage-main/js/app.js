const body = document.querySelector('body');
const menu_Hamburguesa = document.querySelector('.header__menu-hamburguesa');
const cerrar_menu = document.querySelector('.menu__close')



menu_Hamburguesa.addEventListener('click', ()=>{
   body.classList.add('menu--open')
})

cerrar_menu.addEventListener('click', ()=>{
    body.classList.remove('menu--open')
})

