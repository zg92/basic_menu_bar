const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerLine1 = document.querySelector('.line1')
const hamburgerLine2 = document.querySelector('.line2')
const hamburgerLine3 = document.querySelector('.line3')
const linksMenu = document.querySelector('.links-wrapper')

hamburgerMenu.addEventListener('click', () => {
    hamburgerLine1.classList.toggle('active');
    hamburgerLine2.classList.toggle('active');
    hamburgerLine3.classList.toggle('active');
    linksMenu.style.transition = 'ease-in-out .5s'
    linksMenu.classList.toggle('active');
});

