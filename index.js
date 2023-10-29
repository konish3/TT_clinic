document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".menu__icon");
  const menuMain = document.querySelector(".main__menu");
  const menuButton = document.querySelector(".menu-button");
  if (burger) {
    burger.addEventListener("click", function (e) {
      menuMain.classList.toggle("_active");
    });
  }

  const button = document.querySelectorAll(".popup-link");
  const popup = document.querySelector(".popup");
  if (button.length > 1) {
    for (let i = 0; i < button.length; i++) {
      const popupLink = button[i];
      popupLink.addEventListener("click", function (e) {
        popup.classList.add("popup-open");
      });
    }
  }
  if (menuButton) {
    menuButton.addEventListener("click", function (e) {
      menuMain.classList.remove("_active");
    });
  }

  const form = document.getElementById("popup__form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
      let response = await fetch("mail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("OK");
        form.reset();
      } else {
        console.log(response);
        alert("Ошибка в отправке данных.");
      }
    } else {
      alert("Введены неправильные данные.");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.classList.remove("_error");
  }
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});

// Слайдер

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function previousSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("check-up__content");
  const countSlide = document.querySelector("#counter-slider");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  countSlide.innerHTML = `${slideIndex}<span>/4</span>`;
}
