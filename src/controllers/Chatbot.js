import viewNav from '../views/nav';
import viewListBots from '../views/chatbot/list-bots';
import viewMessages from '../views/chatbot/list-messages';

const ChatBot = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
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
  }
};

export default ChatBot;
