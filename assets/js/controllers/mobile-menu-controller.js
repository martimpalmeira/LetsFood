const menuMobile = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.mobile-icon-container');
const spanMId = document.querySelector('#hamburguer-mid');
const spanBot = document.querySelector('#hamburguer-bot');
const spanTop = document.querySelector('#hamburguer-top');



export function init(){
    
    menuIcon.addEventListener('click', ()=>{
        
        menuMobile.classList.toggle('show-mobile-nav');
        
        spanMId.classList.toggle('changeSpanMid');
        spanBot.classList.toggle('changeSpanBot');
        spanTop.classList.toggle('changeSpanTop');
    })
}