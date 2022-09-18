const hiwText = document.querySelector('.animation-hiw');
const menuText = document.querySelector('.animation-menu');
const banner = document.querySelector('.banner');
const aboutUsLeft = document.querySelector('.about-food-container');
const aboutUsRight = document.querySelector('.about-text-container');

const serviceItens = document.querySelectorAll('.service-item');
const cardItens = document.querySelectorAll('.card-item');
const footerCol = document.querySelectorAll('.footer-col');

export function init() {

    let countService = 0;
    let countMenu = 0;
    let countFooterCol = 0;
    let count = 0

    handleScrollWindowUp(hiwText);
    handleScrollWindowUp(menuText);
    handleScrollWindowUp(banner);
    handleScrollWindowLeft(aboutUsLeft);
    handleScrollWindowRight(aboutUsRight);

    serviceItens.forEach(i => {
        handleScrollWindowUp(i);
        i.style.animationDelay = "0." + countService + "s";
        countService += 3;
    })

    cardItens.forEach(i => {
        handleScrollWindowUp(i);
        i.style.animationDelay = "0." + countMenu + "s";
        countMenu += 3;
    })

    footerCol.forEach(i => {
        if (count % 2 == 0) {
            handleScrollWindowUp(i);
        }else{
            handleScrollWindowDown(i);
        }
        i.style.animationDelay = "0." + countFooterCol + "s";
        countFooterCol += 25;
        count++;

    })

    window.addEventListener('scroll', () => {

        handleScrollWindowUp(hiwText);

        handleScrollWindowUp(menuText);

        handleScrollWindowUp(banner);

        handleScrollWindowLeft(aboutUsLeft);

        handleScrollWindowRight(aboutUsRight);

        serviceItens.forEach(i => {
            handleScrollWindowUp(i);
        })

        cardItens.forEach(i => {
            handleScrollWindowUp(i);
        })
        let countScroll = 0
        footerCol.forEach(i => {
            if (countScroll % 2 == 0) {
                handleScrollWindowUp(i);
            }else{
                handleScrollWindowDown(i);
            }
            countScroll++;
        })
    });



}


function handleScrollWindowUp(element) {
    let windowHeight = window.innerHeight;
    let topDistance = element.getBoundingClientRect().top;
    let botDistance = windowHeight - topDistance;
    if (botDistance >= 100 && botDistance < windowHeight + element.getBoundingClientRect().height) {
        element.classList.add('fade-in-up');
    }
}

function handleScrollWindowDown(element) {
    let windowHeight = window.innerHeight;
    let topDistance = element.getBoundingClientRect().top;
    let botDistance = windowHeight - topDistance;
    if (botDistance >= 100 && botDistance < windowHeight + element.getBoundingClientRect().height) {
        element.classList.add('fade-in-down');
    }
}

function handleScrollWindowLeft(element) {
    let windowHeight = window.innerHeight;
    let topDistance = element.getBoundingClientRect().top;
    let botDistance = windowHeight - topDistance;
    if (botDistance >= 100 && botDistance < windowHeight + element.getBoundingClientRect().height) {
        element.classList.add('fade-in-left');
    }
}

function handleScrollWindowRight(element) {
    let windowHeight = window.innerHeight;
    let topDistance = element.getBoundingClientRect().top;
    let botDistance = windowHeight - topDistance;
    if (botDistance >= 100 && botDistance < windowHeight + element.getBoundingClientRect().height) {
        element.classList.add('fade-in-right');
    }
}