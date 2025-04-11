


// Получаем все кнопки с классом buttonminus и buttonplus
const buttonMinuses = document.querySelectorAll('.basketsec__item-minus');
const buttonPluses = document.querySelectorAll('.basketsec__item-plus');

// Функция для уменьшения значения
function updateMinus(e) {
    const input = e.target.nextElementSibling; // Получаем следующий элемент (input)
    if (input) {
        input.stepDown(); // Уменьшаем значение
    }
}

// Функция для увеличения значения
function updatePlus(e) {
    const input = e.target.previousElementSibling; // Получаем предыдущий элемент (input)
    if (input) {
        input.stepUp(); // Увеличиваем значение
    }
}

// Добавляем обработчики событий для всех кнопок minus
buttonMinuses.forEach(button => {
    button.addEventListener('click', updateMinus);
});

// Добавляем обработчики событий для всех кнопок plus
buttonPluses.forEach(button => {
    button.addEventListener('click', updatePlus);
});






window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('input[data-tel-input]'), function(input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
        this.value = new_value;
      }
      if (event.type == "blur" && this.value.length < 5) {
        this.value = "";
      }
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

var nameInputs = document.querySelectorAll('input[data-name-input]');

$(nameInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^аА-яЯ]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});








var emailInputs = document.querySelectorAll('input[data-email-input]');

$(emailInputs).on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^aA-zZ1234567890@.?!%&()><*-_]/g.exec(that.value);
        console.log(res);
        that.value = that.value.replace(res, '');
    }, 0);
});



/*---------!!! МОДАЛКА ИНИЦИАЛИЗАЦИЯ !!!------------------*/

window.addEventListener('DOMContentLoaded', function () {
   MicroModal.init({
      openTrigger: 'data-custom-open',
      closeTrigger: 'data-micromodal-close',
      disableScroll: true,
      disableFocus: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,
   });
});

var body1 = document.getElementsByTagName('body')[0];

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal"); // тут указываем ID элемента
    var divt2 = $(".modal-order"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order').mouseup(function (e){ // событие клика по веб-документу
    var divt3 = $(".container_modal_close"); // тут указываем ID элемента
    var divt4 = $(".modal-order"); // тут указываем ID элемента
    if (!divt3.is(e.target) // если клик был не по нашему блоку
        && divt3.has(e.target).length === 0) { // и не по его дочерним элементам
    
   
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
       divt4.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
      console.log(222);
    }
  });
});
});


jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order2').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal2"); // тут указываем ID элемента
    var divt2 = $(".modal-order2"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order2').mouseup(function (e){ // событие клика по веб-документу
    var divt3 = $(".container_modal_close"); // тут указываем ID элемента
    var divt4 = $(".modal-order2"); // тут указываем ID элемента
    if (!divt3.is(e.target) // если клик был не по нашему блоку
        && divt3.has(e.target).length === 0) { // и не по его дочерним элементам
    
   
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
       divt4.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
      console.log(222);
    }
  });
});
});


jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order3').mouseup(function (e){ // событие клика по веб-документу
    var divt = $(".container_modal3"); // тут указываем ID элемента
    var divt2 = $(".modal-order3"); // тут указываем ID элемента
    if (!divt.is(e.target) // если клик был не по нашему блоку
        && divt.has(e.target).length === 0) { // и не по его дочерним элементам
    
    divt2.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
      console.log(222);
    }
  });
});
});

jQuery(document).ready(function($){
  jQuery(function($){
  $('.modal-order3').mouseup(function (e){ // событие клика по веб-документу
    var divt3 = $(".container_modal_close"); // тут указываем ID элемента
    var divt4 = $(".modal-order3"); // тут указываем ID элемента
    if (!divt3.is(e.target) // если клик был не по нашему блоку
        && divt3.has(e.target).length === 0) { // и не по его дочерним элементам
    
   
        /*div.hide(); // скрываем его
    div2.hide(); // скрываем его*/
    console.log(111);
    }
    else{
       divt4.toggleClass("is-open");
    body1.setAttribute('style', 'overflow-y: scroll');
      console.log(222);
    }
  });
});
});




document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('customCheckbox');
    const button = document.querySelector('.modal_order_form_btn');

    // Устанавливаем начальное состояние кнопки
    button.disabled = !checkbox.checked;

    // Добавляем обработчик события на изменение состояния чекбокса
    checkbox.addEventListener('change', function() {
        button.disabled = !this.checked; // Включаем/выключаем кнопку в зависимости от состояния чекбокса
    });
});




document.addEventListener('DOMContentLoaded', function() {
  
    const checkbox = document.getElementById('customCheckbox2');
    const button = document.querySelector('.modal_order_form_btn2');
    if(checkbox){
    // Устанавливаем начальное состояние кнопки
    button.disabled = !checkbox.checked;

    // Добавляем обработчик события на изменение состояния чекбокса
    checkbox.addEventListener('change', function() {
        button.disabled = !this.checked; // Включаем/выключаем кнопку в зависимости от состояния чекбокса
    });
  }
    
});


document.addEventListener('DOMContentLoaded', function() {
  
    const checkbox = document.getElementById('customCheckbox3');
    const button = document.querySelector('.modal_order_form_btn3');
    if(checkbox){
    // Устанавливаем начальное состояние кнопки
    button.disabled = !checkbox.checked;

    // Добавляем обработчик события на изменение состояния чекбокса
    checkbox.addEventListener('change', function() {
        button.disabled = !this.checked; // Включаем/выключаем кнопку в зависимости от состояния чекбокса
    });
  }
    
});


$('.sertificatessec_aboutuscompanypage_content_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  dots: false,
  infinite: true,
  prevArrow: $('.sertificatessec_aboutuscompanypage_content_slider_buttons_prevarrow'),
  nextArrow: $('.sertificatessec_aboutuscompanypage_content_slider_buttons_nextarrow')
});


















let yandexmap = document.getElementsByClassName('yandexmap');

if (yandexmap[0]) {
ymaps.ready(function () {
    var myMap = new ymaps.Map('yandexmap', {
        center: [57.005893, 40.978599],
        zoom: 6,
        controls: ['zoomControl']
    }, 

    {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark1 = new ymaps.Placemark([56.326797, 44.006516], {}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/mapsec_baloon.svg',
      // Размеры метки.
      iconImageSize: [50, 74],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-45, -78],
    })

    myPlacemark2 = new ymaps.Placemark([55.755864, 37.617698], {}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/mapsec_baloon_2.svg',
      // Размеры метки.
      iconImageSize: [50, 74],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -68],
    })

    myPlacemark3 = new ymaps.Placemark([59.938784, 30.314997], {}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/mapsec_baloon_3.svg',
      // Размеры метки.
      iconImageSize: [50, 74],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -78],
    })

    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
});

}