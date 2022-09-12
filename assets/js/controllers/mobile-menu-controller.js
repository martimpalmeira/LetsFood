const menuMobile = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.mobile-icon-container')

export function init(){
    
    menuIcon.addEventListener('click', ()=>{
        
        menuMobile.classList.toggle('show-mobile-nav');
    })
}