import logo from '../assets/img/cpu.png';

export default () => (`
  <nav class="navbar bg-body-tertiary mb-4 ps-4 pe-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src=${logo} alt="Logo" width="50" height="50" class="d-inline-block align-text-center text-light">
      </a>
      <h1>CHATBOT-IO</h1>
    </div>
  </nav>
`);
