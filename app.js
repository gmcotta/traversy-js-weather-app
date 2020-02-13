const storage = new Storage();
const weatherCity = storage.getLocationData();

const weather = new Weather(weatherCity);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', evt => {
  evt.preventDefault();
  
  const city = document.getElementById('city').value;
  weather.changeLocation(city);
  storage.setLocationData(city);
  getWeather();

  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
    .then(data => {
      ui.paint(data);
    })
    .catch(err => console.log(err));
}


