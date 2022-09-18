const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const comment1 = document.querySelector('#comment1');

console.log(dot1)

export function init(){
    dot1.addEventListener('click', handleDot1Click);

    dot2.addEventListener('click', handleDot2Click);

    dot3.addEventListener('click', handleDot3Click);
}

function handleDot1Click(){
    dot1.style.opacity = "1";
    dot2.style.opacity = "0.4";
    dot3.style.opacity = "0.4";
    comment1.style.marginLeft = "0%";
}

function handleDot2Click(){
    dot2.style.opacity = "1";
    dot1.style.opacity = "0.4";
    dot3.style.opacity = "0.4";
    comment1.style.marginLeft = "calc(-33.33% - 24px)";
}

function handleDot3Click(){
    dot3.style.opacity = "1";
    dot2.style.opacity = "0.4";
    dot1.style.opacity = "0.4";
    comment1.style.marginLeft = "calc(-66.666% - 48px)";
}

