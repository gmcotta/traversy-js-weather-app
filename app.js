const city = 'Guarulhos';
const weather = new Weather(city);

document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('São Paulo');

function getWeather() {
  weather.getWeather()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}


