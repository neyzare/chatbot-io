import viewBot from './bot';
import circuits from '../../assets/img/circuits.png';

export default () => (`
<div class="col-3 border-end border-5 pe-4 overflow-auto bot-list" style="background-image: url(${circuits})">
  <ul class="list-group">
    ${viewBot()}
    ${viewBot()}
    ${viewBot()}
    ${viewBot()}
    ${viewBot()}
    ${viewBot()}
    ${viewBot()}
    ${viewBot()}
    ${viewBot()}
    ${viewBot()}
  </ul>
</div>
`);
