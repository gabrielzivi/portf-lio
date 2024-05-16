var menu = document.querySelector('#menu-bars');
var header = document.querySelector('header');
var cursor1 = document.querySelector('.cursor-1');
var cursor2 = document.querySelector('.cursor-2');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

menu.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


