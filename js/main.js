'use strict';
//  массмвы данных для создания массива объявлений
var advertisementParms = {
  TITLES: ['двушка в центре', 'вилла с бассейном', 'однокомнатная квартира рядом с метро', 'стильный лофт 18+', 'семейные аппартаменты'],
  TYPES: ['palace', 'flat', 'house', 'bungalo'],
  TIMES: ['12:00', '13:00', '14:00'],
  FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  DESCRIPTIONS: ['Уютная квартирка с ручными привидениями', 'осторожно! злая собака', 'постоянно топят соседи сверху, держите зонт наготове', 'Незабудьте кормить хозяйских драконов утром и вечером. Корм в холодильнике', 'парковочное место для вашего вертолета предоставляется бесплатно'],
  PHOTOS: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
};
//  функция выбора элемента из массива
var getRandomElement = function (elements) {
  return elements[Math.floor((Math.random() * elements.length))];
};
//  функция генерации случайного числа из диапазона
var getRandomNumber = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
// данные для создания массива объявлений
var AMOUNT = 8;
var xCoord = {
  MIN: 0,
  MAX: 1200
};
var yCoord = {
  MIN: 130,
  MAX: 630
};
var pinParms = {
  WIDTH: 50,
  HEIGHT: 70
};
var MAX_PRICE = 10000000;
var ROOM_AMOUNT = 10;
var GUEST_AMOUNT = 10;
//  функция создания массива л=объявлений
var generateAdvertisements = function (advertisementAmount) {
  var advertisements = [];
  for (var i = 0; i < advertisementAmount; i++) {
    var coordX = getRandomNumber(xCoord.MIN, xCoord.MAX);
    var coordY = getRandomNumber(yCoord.MIN, yCoord.MAX);
    advertisements[i] = {
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png'
      },
      offer: {
        title: getRandomElement(advertisementParms.TITLES),
        address: 'coordX' + 'coordY',
        price: getRandomNumber(0, MAX_PRICE),
        type: getRandomElement(advertisementParms.TYPES),
        rooms: getRandomNumber(0, ROOM_AMOUNT),
        guests: getRandomNumber(0, GUEST_AMOUNT),
        checkin: getRandomElement(advertisementParms.TIMES),
        checkout: getRandomElement(advertisementParms.TIMES),
        features: getRandomElement(advertisementParms.FEATURES),
        description: getRandomElement(advertisementParms.DESCRIPTIONS),
        photos: getRandomElement(advertisementParms.PHOTOS),
      },
      location: {
        x: coordX,
        y: coordY
      }
    };
  }
  return advertisements;
};
//  активируем карту
// var map = document.querySelector('.map');
// map.classList.remove('map--faded');
//  определяем, куда вставлять новые пины
var similarAdvertList = document.querySelector('.map__pins');
//  определяем шаблон для пина
var similarPinTemplate = document.querySelector('#pin').content .querySelector('.map__pin');
// функция заполнения данными из сгенерированного массива по шаблону
var renderPins = function () {
  var fragment = document.createDocumentFragment();
  var adverts = generateAdvertisements(AMOUNT);
  adverts.forEach(function (advert) {
    var newPin = similarPinTemplate.cloneNode(true);
    newPin.style.left = advert.location.x - pinParms.WIDTH / 2 + 'px';
    newPin.style.top = advert.location.y - pinParms.HEIGHT + 'px';
    newPin.querySelector('img').src = advert.author.avatar;
    newPin.querySelector('img').alt = advert.offer.description;
    fragment.appendChild(newPin);
  });
  similarAdvertList.appendChild(fragment);
};
renderPins();
var advertForm = document.querySelector('.ad-form');
/* var fileInput = advertForm.querySelector('#avatar');
var titleInput = advertForm.querySelector('#title');
var addressInput = advertForm.querySelector('#address');
var typeSelect = advertForm.querySelector('#type');
var priceInput = advertForm.querySelector('#price');
var timeinSelect = advertForm.querySelector('#timein');
var timeoutSelect = advertForm.querySelector('#timeout');
var roomNumberSelect = advertForm.querySelector('#room_number');
var capacitySelect = advertForm.querySelector('#capacity');
var featuresFildset = advertForm.querySelector('.features');
var descriptionTextarea = advertForm.querySelector('#description');
var imagesInput = advertForm.querySelector('#images');
var submitButton = advertForm.querySelector('.ad-form__submit');
var mainPin = document.querySelector('.map__pin--main');
var pageActivation = function(){};

fileInput.setAttribute("disabled", "disabled");
titleInput.setAttribute("disabled", "disabled");
addressInput.setAttribute("disabled", "disabled");
typeSelect.setAttribute("disabled", "disabled");
priceInput.setAttribute("disabled", "disabled");
timeinSelect.setAttribute("disabled", "disabled");
timeoutSelect.setAttribute("disabled", "disabled");
roomNumberSelect.setAttribute("disabled", "disabled");
capacitySelect.setAttribute("disabled", "disabled");
featuresFildset.setAttribute("disabled", "disabled");
descriptionTextarea.setAttribute("disabled", "disabled");
imagesInput.setAttribute("disabled", "disabled");
submitButton.setAttribute("disabled", "disabled");
*/
var inputs = advertForm.querySelectorAll('input');
var selects = advertForm.querySelectorAll('select');
var textareas = advertForm.querySelectorAll('textarea');
var submitButton = advertForm.querySelector('.ad-form__submit');
var mainPin = document.querySelector('.map__pin--main');
var ENTER_KEYCODE = 13;
var notActivePinParms = {
  WIDTH: 65,
  HEIGHT: 65
};
var notActivePinPcoords = {
  COORDX: 570,
  COORDY: 370
};
var notActivePinLocation = {
  X: notActivePinPcoords.COORDX + notActivePinParms.WIDTH,
  Y: notActivePinPcoords.COORDY + notActivePinParms.HEIGHT
};
var addressInput = advertForm.querySelector('#address');
addressInput.value = notActivePinLocation;
for (var i = 0; i < inputs.length; i++) {
  inputs[i].setAttribute('disabled', 'disabled');
}
for (var j = 0; j < selects.length; j++) {
  selects[j].setAttribute('disabled', 'disabled');
}
for (var k = 0; k < textareas.length; k++) {
  textareas[k].setAttribute('disabled', 'disabled');
}
submitButton.setAttribute('disabled', 'disabled');
var pageActivation = function () {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].removeAttribute('disabled', 'disabled');
  }
  for (var j = 0; j < selects.length; j++) {
    selects[j].removeAttribute('disabled', 'disabled');
  }
  for (var k = 0; k < textareas.length; k++) {
    textareas[k].removeAttribute('disabled', 'disabled');
  }
  submitButton.removeAttribute('disabled', 'disabled');
};
mainPin.addEventListener('mousedown', function () {
  pageActivation();
});
mainPin.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    pageActivation();
  }
});
