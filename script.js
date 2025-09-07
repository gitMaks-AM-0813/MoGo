let menuBtn = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu');
let menuLink = document.querySelector('.menu__link');
let menuList = document.querySelector('.menu__list');
const page = document.querySelector('.page');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    menuList.classList.toggle('active');
    page.classList.toggle('blur');

    const links = menuList.querySelectorAll('a');
    links.forEach(link => link.classList.toggle('active'));

    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
})