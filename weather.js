class Weather {
  constructor(city) {
    this.accessKey = 'b7b3eb2111f081d80bcb2f922b02fb64';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.weatherstack.com/current` + 
      `?access_key=${this.accessKey}&query=${this.city}`
    );
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}