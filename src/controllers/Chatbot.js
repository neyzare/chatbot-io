import viewNav from '../views/nav';

import viewListBots from '../views/chatbot/list-bots';

import viewMessages from '../views/chatbot/list-messages';

const ChatBot = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  writeMessage() {
    const elInputMessage = document.querySelector('.form-control');
    const elViewMessage = document.querySelector('.chat-window');
  }

  onKeyPressInputMessage() {
    const elInputMessage = document.querySelector('.form-control');
    const elViewMessage = document.querySelector('.chat-window');
    
    elInputMessage.addEventListener('keydown', (e) => {

    });
  }

  render() {
    return (`
      ${viewNav()}
      <div class="container">
        <div class="row">
          ${viewListBots()}
          ${viewMessages(this.data)}
        </div>
      </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
    this.onKeyPress();
  }
};

export default ChatBot;
