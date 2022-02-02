const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.onclick = function()
{
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
}

window.addEventListener('scroll',function()
{
    const header = document.querySelector('header');
    header.classList.toggle('pecorrer', window.scrollY > 0);
})


//Navegador//
function click1(){
    menu.classList.remove('active')
    navbar.classList.remove('active');
}