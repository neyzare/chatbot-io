import viewMessage from './message';

export default () => (`
  <div class="col-9 chat">
    <div class="container-fluid overflow-auto chat-window">
      ${viewMessage()}
      ${viewMessage()}
      ${viewMessage()}
      ${viewMessage()}
      ${viewMessage()}
      ${viewMessage()}
      ${viewMessage()}
    </div>
    <div class="input-group fixed mt-3 ms-4 pe-5">
      <input type="text" class="form-control border border-3 rounded me-2" placeholder="/Type your message" aria-label="Message" aria-describedby="button-addon2">
      <button class="btn btn-outline-dark rounded-circle border border-3 send" type="button" id="button-addon2"><i class="fa-solid fa-paper-plane"></i></button>
    </div>
  </div>
`);
