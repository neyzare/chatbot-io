export default class ChatApp {
  constructor() {
    // Sélectionnez les éléments du DOM nécessaires
    this.messageInput = document.querySelector('.form-control');
    this.chatWindow = document.querySelector('.chat-window');
    this.sendButton = document.querySelector('.send');

    // Ajoutez un gestionnaire d'événements pour le clic sur le bouton d'envoi
    this.sendButton.addEventListener('click', this.sendMessage.bind(this));
  }

  sendMessage() {
    // Créez un nouvel élément div pour la carte
    let newCard = document.createElement('div');
    newCard.classList.add('card', 'user-message', 'mb-3');

    // Créez un nouvel élément div pour l'en-tête de la carte
    let newCardHeader = document.createElement('div');
    newCardHeader.classList.add('card-header');
    newCardHeader.innerHTML = '<img src="./assets/img/reversed-circuit.png" alt="User" width="30" height="30"> ME';

    // Créez un nouvel élément div pour le corps de la carte
    let newCardBody = document.createElement('div');
    newCardBody.classList.add('card-body');

    // Créez un nouvel élément blockquote pour le message
    let newBlockquote = document.createElement('blockquote');
    newBlockquote.classList.add('blockquote', 'mb-0');
    // Ajoutez le contenu du message et l'horodatage au blockquote
    newBlockquote.innerHTML = `<p>${this.messageInput.value}</p><footer class="blockquote-footer">00/00/00 00:00</footer>`;

    // Ajoutez le blockquote au corps de la carte
    newCardBody.appendChild(newBlockquote);
    // Ajoutez l'en-tête et le corps de la carte à la carte
    newCard.appendChild(newCardHeader);
    newCard.appendChild(newCardBody);

    // Ajoutez la carte à la fenêtre de discussion
    this.chatWindow.appendChild(newCard);

    // Effacez le contenu de l'entrée du message après l'envoi
    this.messageInput.value = '';
  }
}
