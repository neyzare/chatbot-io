import viewMessage from './message';

export default () => {
  // Fonction pour gérer l'événement de clic sur le bouton d'envoi
  window.handleSendMessage = () => {
    // Récupérer la valeur saisie dans l'entrée de texte
    const inputElement = document.querySelector('.form-control');
    const messageText = inputElement.value;

    // Appeler la fonction viewMessage avec les données saisies et afficher le message
    const messageHtml = viewMessage('user', messageText, new Date().toLocaleString());
    
    // Ajouter le message à la fenêtre de chat
    const chatWindow = document.querySelector('.chat-window');
    chatWindow.innerHTML += messageHtml;

    // Effacer le contenu de l'entrée de texte après l'envoi
    inputElement.value = '';
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
