

const burger = document.querySelector('.menu__icon');
const menuMain = document.querySelector('.main__menu');

if(burger) {
  burger.addEventListener('click', function (e) {
    console.log('1add')
    menuMain.classList.toggle('_active');
  })
}
