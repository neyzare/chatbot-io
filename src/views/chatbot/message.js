import user from '../../assets/img/full-user.png';

export default () => (`
<div class="row mb-4">
  <div class="col-6"></div>
  <div class="col-6">
    <div class="card user-message">
      <div class="card-header">
        <img src=${user} alt="User" width="30" height="30" class="border bg-light border-2 rounded-circle">
        ME
      </div>
      <div class="card-body bg-dark">
        <blockquote class="blockquote mb-0">
          <p>A well-known quote, contained in a blockquote element.</p>
          <footer class="blockquote-footer user-footer">00/00/00 00:00</footer>
        </blockquote>
      </div>
    </div>
  </div>
</div>
`);
