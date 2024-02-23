import bot from '../../assets/img/bot.png';

export default () => (`
<li class="list-group-item d-flex border rounded-2 border-3 shadow justify-content-between align-items-center mb-2">
  <img src=${bot} alt="BOT1" width="50" height="50" class="border border-3 rounded-circle bg-light">
  BOT N°1
  <span class="badge bg-primary rounded-pill">14</span>
</li>
`);
