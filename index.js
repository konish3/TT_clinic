

let burger = document.querySelector('menu__icon');
if(burger) {
  const menuMain = document.querySelector('main__menu')
  burger.addEventListener('click', function (e) {
    menuMain.classList.add('_active');
  })
}

