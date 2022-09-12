
const openModalBtns = document.querySelectorAll('.open-modal-btn');
const modalLogin = document.querySelector('.modal-login');
const removeModalIcon = document.querySelector('.x-modal');


export function init() {

    openModalBtns.forEach(btn =>{
        btn.addEventListener('click', handleOpenModalBtnClick);
        modalLogin.addEventListener('click', event => {
            if (event.target == modalLogin) {
                modalLogin.classList.remove('show-modal');
            }
        })
        removeModalIcon.addEventListener('click', handleRemoveModalIconClick);
    })

}

function handleOpenModalBtnClick() {
    modalLogin.classList.add('show-modal');
}

function handleRemoveModalIconClick() {
    modalLogin.classList.remove('show-modal');
}

