const hamburger = document.querySelector('.menu span');

hamburger.addEventListener('click', () => {

    const ul = document.querySelector('nav ul');
    ul.classList.add('menu-small')

});