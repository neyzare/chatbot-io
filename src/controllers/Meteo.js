class WeatherService {
  constructor() {
    this.baseUrl = 'https://ai-weather-by-meteosource.p.rapidapi.com';
    this.apiKey = 'dbf0920287mshc50df06692353f5p127b1bjsn653dd4996129';
    this.host = 'ai-weather-by-meteosource.p.rapidapi.com';
    this.options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': this.host
      }
    };
  }

  async fetchWeather(cityName) {
    try {
      const encodedCityName = encodeURIComponent(cityName);
      const url = `${this.baseUrl}/find_places?text=${encodedCityName}&language=en`;
      const response = await fetch(url, this.options);
      const result = await response.json();
      return result; // Return weather data
    } catch (error) {
      console.error(error); // Log the error
      return null; // Return null in case of error
    }
  }
}

export default WeatherService;
