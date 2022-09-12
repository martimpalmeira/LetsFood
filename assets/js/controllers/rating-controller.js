
export function init() {

    const ratingIcons = document.querySelectorAll('.rating');
    const numberLikedFoodsSelector = document.querySelector('.number-liked-foods');
    let numberLikedFoods;



    ratingIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            changeIcon(icon);
            numberLikedFoods = calculateNumberOfFavorites(ratingIcons);
            numberLikedFoodsSelector.innerHTML = numberLikedFoods;
        });
    });



}

function changeIcon(icon) {
    console.log(icon.src);
    if (icon.src.includes('true')) {
        icon.src = "./assets/img/menu/like-false.svg";
    } else {
        icon.src = "./assets/img/menu/like-true.svg";
    }
}

function calculateNumberOfFavorites(icons) {
    let count = 0;
    icons.forEach(icon => {
        if (icon.src.includes('true'))
            count++;
    })
    return count;
}