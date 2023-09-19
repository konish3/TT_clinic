

const burger = document.querySelector('.menu__icon');
const menuMain = document.querySelector('.main__menu');
const menuButton = document.querySelector('.menu-button')
if(burger) {
  burger.addEventListener('click', function (e) {
    console.log('1add')
    menuMain.classList.toggle('_active');
  })
}

const button = document.querySelectorAll('.popup-link');
const popup = document.querySelector('.popup');
if (button.length > 1) {
  for (let i = 0; i < button.length; i++) {
    const popupLink = button[i];
    popupLink.addEventListener('click', function (e) {
      popup.classList.add('popup-open')
    })
  }
}
if (menuButton) {
  menuButton.addEventListener('click', function (e) {
    menuMain.classList.remove('_active')
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('popup__form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);
    
    
    if (error === 0) {
      let response = await fetch ('mail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        alert('OK')
        form.reset();
      } else {
        alert('Error')
      }
    } else {
      alert('Error')
    }

  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index <formReq.length; index ++) {
      const input = formReq[index]
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      }else {
        if(input.value === '') {
          formAddError(input);
          error++
        }
      }
    }
    return error
  }

  function formAddError(input) {
    // input.parentElement.classList.add('_error')
    input.classList.add('_error')
  }
  function formRemoveError(input) {
    // input.parentElement.classList.remove('_error')
    input.classList.remove('_error')
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
})