document.addEventListener('DOMContentLoaded', function () {
  const messageInput = document.querySelector('.form-control');
  const chatWindow = document.querySelector('.chat-window');
  const sendButton = document.querySelector('.send'); 

  sendButton.addEventListener('click', function () {
    let newCard = document.createElement('div');
    newCard.classList.add('card', 'user-message', 'mb-3');

    let newCardHeader = document.createElement('div');
    newCardHeader.classList.add('card-header');
    newCardHeader.innerHTML = '<img src="./assets/img/reversed-circuit.png" alt="User" width="30" height="30"> ME';

    let newCardBody = document.createElement('div');
    newCardBody.classList.add('card-body');

    let newBlockquote = document.createElement('blockquote');
    newBlockquote.classList.add('blockquote', 'mb-0');
    newBlockquote.innerHTML = `<p>${messageInput.value}</p><footer class="blockquote-footer">00/00/00 00:00</footer>`;

    newCardBody.appendChild(newBlockquote);
    newCard.appendChild(newCardHeader);
    newCard.appendChild(newCardBody);

    chatWindow.appendChild(newCard);

  
    messageInput.value = '';
  });
});
