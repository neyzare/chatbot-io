class WeatherService {
  constructor() {
    this.url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en';
    this.options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dbf0920287mshc50df06692353f5p127b1bjsn653dd4996129',
        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
      }
    };
  }

  async fetchWeather() {
    try {
      const response = await fetch(this.url, this.options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

// Example usage:
const weatherService = new WeatherService();
weatherService.fetchWeather();

export default weatherService;
