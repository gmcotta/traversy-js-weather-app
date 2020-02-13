class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feelslike');
    this.uv = document.getElementById('w-uv');
    this.precip = document.getElementById('w-precip');
  }

  paint(weather) {
    this.location.textContent = `${weather.location.name}, ${weather.location.country}`;
    this.description.textContent = weather.current.weather_descriptions;
    this.string.textContent = `${weather.current.temperature}°C`;
    this.icon.setAttribute('src', `${weather.current.weather_icons[0]}`);
    this.humidity.textContent = `Humidity: ${weather.current.humidity}%`;
    this.feelslike.textContent = `Feels like ${weather.current.feelslike}°C`;
    this.uv.textContent = `UV index: ${weather.current.uv_index}`;
    this.precip.textContent = `Precipitation: ${weather.current.precip} mm`;

  }
}