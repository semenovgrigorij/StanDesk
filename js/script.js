
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    speed: 1500,
    arrows: true,
    dots: false,
    infinity: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          infinity: true,
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider-gallery").slick({
    arrows: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    variabHeight: true,
    dotsClass: "slick-dots", // название класса для точек
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  // Получаем все кнопки с классом "image-btn"
  $(".order-button").click(function () {
    // Удаляем класс "active" у всех кнопок
    $(".order-button").removeClass("active_1");
    // Добавляем класс "active" к нажатой кнопке
    $(this).addClass("active_1");
    // Получаем ссылку на картинку из атрибута "data-src" кнопки
    var newImageSrc = $(this).data("src");

    // Устанавливаем новую картинку в элемент с id "image"
    $(".order-img").attr("src", newImageSrc);
  });
});

$(document).ready(function () {
  // Получаем все кнопки с классом "image-btn"
  $(".work-button_1, .work-button_2, .work-button_3").click(function () {
    // Удаляем класс "active" у всех кнопок
    $(".work-button_1, .work-button_2, .work-button_3").removeClass("active_2");
    // Добавляем класс "active" к нажатой кнопке
    $(this).addClass("active_2");
    // Получаем ссылку на картинку из атрибута "data-src" кнопки
    var newImageSrc = $(this).data("src");

    // Устанавливаем новую картинку в элемент с id "image"
    $(".work-img").attr("src", newImageSrc);
  });
});

/* Аккордеон */

var accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(function (item) {
  var header = item.querySelector(".accordion-header");

  header.addEventListener("click", function () {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      accordionItems.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
    }
  });
});

// UniMailMaster (Email)

$(document).ready(function () {
  $(".form-top, .form-bottom").submit(function () {
    //Change
    var th = $(this);
    var redirectUrl = "/response-message.html";
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize(),
    })
      .done(function (response) {
        setTimeout(function () {
          // Done Functions
          window.location.href = redirectUrl;
          th.trigger("reset");
          th.trigger(".r");
        }, 0);
      })
      .fail(function () {
        alert("Помилка відправки форми");
      });
    return false;
  });
});




// При выборе radio button меняем фон активного input

$(document).ready(function() {
  
  $('input[type="radio"]').change(function() {
    if ($(this).is(':checked')) {
      $(this).closest('.radio').addClass('active').siblings().removeClass('active');
      $(this).closest('.radio-bottom').addClass('active-bottom').siblings().removeClass('active-bottom');
    }
  });
});












