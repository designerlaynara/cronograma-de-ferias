import { href } from '../router.js';
import { Page, DIAS } from '../components/Layout.jsx';

export default function Roteiro() {
  return (
    <Page className="roteiro">
      <img className="roteiro__logo" src="img/logo-de-ferias.png" alt="De Férias com a Poupa" />
      <h1 className="titulo titulo--xl">Seu roteiro para uma experiência inesquecível</h1>
      <p className="texto texto--centro">
        De 17 a 21 de dezembro, prepare-se para dias de diversão, descanso, celebração e muitas experiências especiais.
      </p>
      <p className="texto texto--centro">
        Aqui, você encontra a programação inicial da viagem, horários, orientações e tudo o que precisa saber para
        aproveitar cada momento.
      </p>
      <h2 className="titulo titulo--md">Escolha o dia e confira a programação</h2>
      <nav className="roteiro__dias" aria-label="Escolha o dia">
        {DIAS.map((dia) => (
          <a key={dia} className="botao-dia" href={href(`/dia/${dia}`)}>
            {dia} de Dez
          </a>
        ))}
      </nav>
    </Page>
  );
}
