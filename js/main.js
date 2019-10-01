var advertisementParms = {
  //author: {
  AVATARS: ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'],
//  },
  //offer: {
    TITLES: ['двушка в центре', 'вилла с бассейном', 'однокомнатная квартира рядом с метро', 'стильный лофт 18+', 'семейные аппартаменты'],
    TYPES: ['palace', 'flat', 'house', 'bungalo'],
    //rooms: number ,//число, количество комнат
    //guests: number, //число, количество гостей, которое можно разместить
    CHEKIN_TIMES: ['12:00', '13:00', '14:00'],
    CHECKOUT_TIMES: ['12:00', '13:00', '14:00'],
    FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    DESCRIPTIONS: ['Уютная квартирка с ручными привидениями', 'осторожно! злая собака', 'постоянно топят соседи сверху, держите зонт наготове', 'Незабудьте кормить хозяйских драконов утром и вечером. Корм в холодильнике', 'парковочное место для вашего вертолета предоставляется бесплатно'], //строка с описанием,
    PHOTOS: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
  //},
  //location: {
  //  "x": , //случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
  //  "y": ,//случайное число, координата y метки на карте от 130 до 630.
  //}
};
var getRandomElement = function (elements) {
  return elements[Math.floor((Math.random() * elements.length))];
};
var getRandomNumber = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var advertisementAmount = 8;
var MAP_WIDTH = 1200;
var X = {
  min: 0,
  max: MAP_WIDTH
}
var Y = {
  min: 130,
  max: 630
}

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
        price: getRandomNumber(0, 1000000),
        type: getRandomElement(advertisementParms.TYPES),
        rooms: getRandomNumber(0, 1000000),
        guests: getRandomNumber(0, 1000000),
        checkin: getRandomElement(advertisementParms.CHEKIN_TIMES),
        checkout: getRandomElement(advertisementParms.CHECKOUT_TIMES),
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
generateAdvertisements(advertisementAmount);
