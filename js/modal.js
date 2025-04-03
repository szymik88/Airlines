const modalBg = document.querySelector('#modal');
const modalwindow = document.querySelector('#modal-window');
const modalClose = document.querySelector('#modal-window .material-symbols-outlined');

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-window');
});


modalwindow.addEventListener('click', (e) => {
    e.stopPropagation();
});

modalBg.addEventListener('click', () => {
    
    modalBg.classList.remove('modal-window');
});

const menu_burger = document.querySelector('#menu');
menu_burger.addEventListener('click', () => {
    alert('click burger');
});