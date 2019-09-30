var advertisementParms = {
  author: '',
  offer: {
    title: '', // строка, заголовок предложения
    address: '', //строка, адрес предложения. Для простоты пусть пока представляет собой запись вида "{{location.x}}, {{location.y}}", например, "600, 350"
    price: number, //число, стоимость
    type: ['palace', 'flat', 'house', 'bungalo'],
    rooms: number ,//число, количество комнат
    guests: number, //число, количество гостей, которое можно разместить
    checkin: ['12:00', '13:00', '14:00'],
    checkout: ['12:00', '13:00', '14:00'],
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: '', //строка с описанием,
    photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
  },
  location: {
    "x": , //случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
    "y": ,//случайное число, координата y метки на карте от 130 до 630.
  }
};
var getRandomElement = function (elemetns) {
  return elemetns[Math.floor((Math.random() * elemetns.length))];
};
var generateOffers = function {

};
var advertisementAmount = 8;
var generateAdvertisements = function (advertisementAmount) {
  var advertisements = [];
  for (var i = 0; i < advertisement; i++) {
    advertisement[i] =
  }
}
