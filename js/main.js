// массмвы данных для создания массива объявлений
var advertisementParms = {
  AVATARS: ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'],
  TITLES: ['двушка в центре', 'вилла с бассейном', 'однокомнатная квартира рядом с метро', 'стильный лофт 18+', 'семейные аппартаменты'],
  TYPES: ['palace', 'flat', 'house', 'bungalo'],
  TIMES: ['12:00', '13:00', '14:00'],
  FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  DESCRIPTIONS: ['Уютная квартирка с ручными привидениями', 'осторожно! злая собака', 'постоянно топят соседи сверху, держите зонт наготове', 'Незабудьте кормить хозяйских драконов утром и вечером. Корм в холодильнике', 'парковочное место для вашего вертолета предоставляется бесплатно'], //строка с описанием,
  PHOTOS: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
};
//функция выбора элемента из массива
var getRandomElement = function (elements) {
  return elements[Math.floor((Math.random() * elements.length))];
};
//функция генерации случайного числа из диапазона
var getRandomNumber = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// данные для создания массива объявлений
var ADVERT_AMOUNT = 8;
var MAP_WIDTH = 1200;
var X = {
  min: 0,
  max: MAP_WIDTH
}
var Y = {
  min: 130,
  max: 630
}
var MAX_PRICE = 10000000;
var ROOM_AMOUNT = 10;
var GUEST_AMONT = 10;
//функция создания массива л=объявлений
var generateAdvertisements = function (advertisementAmount) {
  var advertisements = [];
  for (var i = 0; i < advertisementAmount; i++) {
    var coordX = getRandomNumber(X.min, X.max);
    var coordY = getRandomNumber(Y.min, Y.max);
    advertisements[i] = {
      author: {
        avatar: getRandomElement(advertisementParms.AVATARS)
      },
      offer: {
        title: getRandomElement(advertisementParms.TITLES),
        adderss: 'coordX'  +  'coordY',
        price: getRandomNumber(0, MAX_PRICE),
        type: getRandomElement(advertisementParms.TYPES),
        rooms: getRandomNumber(0, ROOM_AMOUNT),
        guests: getRandomNumber(0, GUEST_AMONT),
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
  };

console.log(advertisements);
};
//активируем карту
var map = document.querySelector('.map');
map.classList.remove('map--faded');
//определяем, куда вставлять новые пины
var similarAdvertList = document.querySelector('.map__pins');
//определяем шаблон для пина
var similarPinTemplate = document.querySelector('#pin');
//функция заполнения данными из сгенерированного массива по шаблону
var renderPin = function () {
  var fragment = document.createDocumentFragment();
  var adverts = generateAdvertisements(ADVERT_AMOUNT);
  adverts.forEach(function(advert) {
    var newPin = similarPinTemplate.cloneNode(true);
    newPin.querySelector('.map__pin').style.left = advert.location.x;
    newPin.querySelector('.map__pin').style.top = advert.location.y;
    newPin.querySelector('img').src = advert.author.avatr;
    newPin.querySelector('.img').alt = advert.offer.description;
    fragment.appendChild(newPin);
  });
  similarAdvertList.appendChild(fragment);
}

//generateAdvertisements(ADVERT_AMOUNT);
