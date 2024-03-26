import WeatherService from './Meteo';
import viewNav from '../views/nav';
import viewListBots from '../views/chatbot/list-bots';
import viewMessages from '../views/chatbot/list-messages';
import textMessage from '../views/chatbot/message';
import Api from './Api';

const ChatBot = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.weatherService = new WeatherService();
    this.Api = new Api()

    this.run();
  }

  async onKeyPressInputMessage() {
    const elInputMessage = document.querySelector('.form-control');
    const elViewMessage = document.querySelector('.chat-window');
    
    elInputMessage.addEventListener('keydown', async (e) => {
      // Check if enter key is pressed
      if (e.key === 'Enter') {
        const inputText = elInputMessage.value;
        if (inputText.startsWith('/weather')) { // Check if the user entered the weather command
          const cityName = inputText.slice('/weather'.length).trim();
          // Fetch weather data
          const weatherData = await this.weatherService.fetchWeather(cityName);
          // Display weather data in chat window
          if (weatherData) {
            elViewMessage.innerHTML += textMessage(weatherData.weather);
          } else {
            elViewMessage.innerHTML += textMessage('Unable to fetch weather for the specified city.');
          }
          // Clear input field
          elInputMessage.value = '';
        } else {
          // If it's not a weather command, treat it as a regular message
          // You can add your regular message handling logic here
          // For example, you might send the message to a chat server or process it in some other way.
        }
      }
    });
  }

  render() {
    return (`
      ${viewNav()}
      <div class="container">
        <div class="row">
          ${viewListBots()}
          ${viewMessages()}
        </div>
      </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
    this.onKeyPressInputMessage();
    this.Api();
  }
};

export default ChatBot;
