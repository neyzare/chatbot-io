import viewMessage from './message';

export default () => {
 
  window.handleSendMessage = () => {
   
    const inputElement = document.querySelector('.form-control');
    const messageText = inputElement.value;

    
    const messageHtml = viewMessage('user', messageText, new Date().toLocaleString());
    
   
    const chatWindow = document.querySelector('.chat-window');
    chatWindow.innerHTML += messageHtml;
    
    inputElement.value = '';

    if (messageText === 'Bonjour') {
      const reponseBot =  'Bonjour Maitre '
      const messageBot = viewMessage('bot', reponseBot, new Date().toLocaleString())

      chatWindow.innerHTML += messageBot;

      inputElement.value = ''
    }
  };



  return (`
    <div class="col-9 chat">
      <div class="container-fluid overflow-auto chat-window">
        <!-- La fenêtre de chat sera mise à jour dynamiquement avec les messages -->
      </div>
      <div class="input-group fixed mt-3 ms-4 pe-5">
        <input type="text" class="form-control border border-3 rounded me-2" placeholder="/Type your message" aria-label="Message" aria-describedby="button-addon2">
        <button class="btn btn-outline-dark rounded-circle border border-3 send" type="button" id="button-addon2" onclick="handleSendMessage()"><i class="fa-solid fa-paper-plane"></i></button>
      </div>
    </div>
  `);
 };

