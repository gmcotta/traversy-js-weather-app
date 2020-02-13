const city = 'Guarulhos';
const weather = new Weather(city);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('São Paulo');

function getWeather() {
  weather.getWeather()
    .then(data => ui.paint(data))
    .catch(err => console.log(err));
}


