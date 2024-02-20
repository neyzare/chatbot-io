import viewNav from '../views/nav';

const Quatre04 = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  render() {
    return `
    ${viewNav()}
    <div class = container>
      <h1 class="error">Erreur 404</h1>
      <p>La page à laquelle vous tentez d'accéder n'existe pas ou n'existe plus.</p>
      <a href="/">Revenir à l'accueil</a>
    </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Quatre04;
