import user from '../../assets/img/full-user.png';
import bot from '../../assets/img/Bot_1.png';

export default (message) => {
  const { name, textMessage, date } = message.message;

  if (message.name === 'ME') {
    return `
    <div class="row mb-4">
      <div class="col-6"></div>
      <div class="col-6">
        <div class="card user-message">
          <div class="card-header">
            <img src=${user} alt="User" width="30" height="30" class="border bg-light border-2 rounded-circle">
            ${name}
          </div>
          <div class="card-body bg-dark">
            <blockquote class="blockquote mb-0">
              <p class="text-message">${textMessage}</p>
              <footer class="blockquote-footer user-footer">${date}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  `;
  ) : ( `
    <div class="row mb-4">
      <div class="col-6">
        <div class="card user-message">
          <div class="card-header">
            <img src=${bot} alt="User" width="30" height="30" class="border bg-light border-2 rounded-circle">
            ${name}
          </div>
          <div class="card-body bg-dark">
            <blockquote class="blockquote mb-0">
              <p class="text-message">${textMessage}</p>
              <footer class="blockquote-footer user-footer">${date}</footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div class="col-6"></div>
    </div>
  `;
};
