import Router from './Router';
import ChatBot from './controllers/Chatbot';
import './index.scss';
import './assets/img/circuits.png';

const routes = [{
  url: '/chatbot',
  controller: ChatBot
}];

new Router(routes);
