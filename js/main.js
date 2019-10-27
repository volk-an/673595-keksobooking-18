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
var fieldsets = advertForm.querySelectorAll('fieldset');
var mainPin = document.querySelector('.map__pin--main');
var map = document.querySelector('.map');
var ENTER_KEYCODE = 13;
var pinParams = {
  WIDTH: 65,
  START_HEIGHT: 65,
  HEIGHT: 87
};
var startCoords = {
  COORDX: 570,
  COORDY: 370
};
var startLocation = {
  X: Math.round(startCoords.COORDX + pinParams.WIDTH / 2),
  Y: Math.round(startCoords.COORDY + pinParams.START_HEIGHT / 2)
};
var startLocationActive = {
  X: Math.round(startCoords.COORDX + pinParams.WIDTH / 2),
  Y: Math.round(startCoords.COORDY + pinParams.HEIGHT / 2)
};
var addressInput = advertForm.querySelector('#address');
var setDisabled = function (element) {
  element.setAttribute('disabled', 'disabled');
};
var removeDisabled = function (element) {
  element.removeAttribute('disabled', 'disabled');
};
var pageActivation = function () {
  for (var i = 0; i < fieldsets.length; i++) {
    removeDisabled(fieldsets[i]);
  }
  map.classList.remove('map--faded');
  advertForm.classList.remove('ad-form--disabled');
  setLocation(startLocationActive);
};
var setLocation = function (location) {
  addressInput.value = [location.X, location.Y];
};
setLocation(startLocation);
for (var i = 0; i < fieldsets.length; i++) {
  setDisabled(fieldsets[i]);
}
mainPin.addEventListener('mousedown', function () {
  pageActivation();
});
mainPin.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    pageActivation();
  }
});
