import viewBot from './bot';

export default () => (`
<div class="col-3 border-end border-5 pe-4 overflow-auto bot-list">
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
