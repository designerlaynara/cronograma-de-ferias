import { href } from '../router.js';

export default function Capa() {
  return (
    <div className="capa">
      <img className="capa__fundo" src="img/capa-fundo.jpg" alt="" aria-hidden="true" />
      <img className="capa__selo" src="img/selo.png" alt="" aria-hidden="true" />
      <img className="capa__carimbo" src="img/carimbo.png" alt="" aria-hidden="true" />
      <main className="capa__centro">
        <h1 className="capa__logo">
          <img src="img/logo-de-ferias.png" alt="De Férias com a Poupa" />
        </h1>
        <a className="capa__botao" href={href('/roteiro')}>
          Começar jornada
        </a>
      </main>
      <img className="capa__poupacred" src="img/logo-poupacred.png" alt="Poupacred" />
    </div>
  );
}
