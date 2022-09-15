const hiwText = document.querySelector('.animation-hiw');
const menuText = document.querySelector('.animation-menu');
const banner = document.querySelector('.banner');

const serviceItens = document.querySelectorAll('.service-item');
const cardItens = document.querySelectorAll('.card-item');
const footerCol = document.querySelectorAll('.footer-col');

export function init() {

    var countService = 0;
    var countMenu = 0;
    var countFooterCol = 0;
    var count = 0

    handleScrollWindow(hiwText);
    handleScrollWindow(menuText);
    handleScrollWindow(banner);

    serviceItens.forEach(i => {
        handleScrollWindow(i);
        i.style.animationDelay = "0." + countService + "s";
        countService += 3;
    })

    cardItens.forEach(i => {
        handleScrollWindow(i);
        i.style.animationDelay = "0." + countMenu + "s";
        countMenu += 3;
    })

    footerCol.forEach(i => {
        if (count % 2 == 0) {
            handleScrollWindow(i);
        }else{
            handleScrollWindowDown(i);
        }
        i.style.animationDelay = "0." + countFooterCol + "s";
        countFooterCol += 25;
        count++;

    })

    window.addEventListener('scroll', () => {

        handleScrollWindow(hiwText);

        handleScrollWindow(menuText);

        handleScrollWindow(banner);

        serviceItens.forEach(i => {
            handleScrollWindow(i);
        })

        cardItens.forEach(i => {
            handleScrollWindow(i);
        })
        let countScroll = 0
        footerCol.forEach(i => {
            if (countScroll % 2 == 0) {
                handleScrollWindow(i);
            }else{
                handleScrollWindowDown(i);
            }
            countScroll++;
        })
    });



}


function handleScrollWindow(element) {
    var windowHeight = window.innerHeight;
    var topDistance = element.getBoundingClientRect().top;
    var botDistance = windowHeight - topDistance;
    if (botDistance >= 100 && botDistance < windowHeight + element.getBoundingClientRect().height) {
        element.classList.add('fade-in-up');
    }
}

function handleScrollWindowDown(element) {
    var windowHeight = window.innerHeight;
    var topDistance = element.getBoundingClientRect().top;
    var botDistance = windowHeight - topDistance;
    if (botDistance >= 100 && botDistance < windowHeight + element.getBoundingClientRect().height) {
        element.classList.add('fade-in-down');
    }
}