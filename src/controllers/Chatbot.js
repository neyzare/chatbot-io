import viewNav from '../views/nav';

const ChatBot = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
    ${viewNav()}
    <div class="container">
      <div class="row">Toto</div>
    </div>
    `;
  }

  run() {
    this.el.innerhtml = this.render();
  }
};

export default ChatBot;
