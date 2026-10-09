import { href } from '../router.js';
import { Page } from '../components/Layout.jsx';
import { cardsEstrutura, cardsBares } from '../data/lugares.js';

export default function Dia19() {
  return (
    <Page ativo="19">
      <h1 className="titulo titulo--xl">Um dia para aproveitar</h1>
      <p className="texto texto--centro">
        Depois de começar a viagem com muita adrenalina, chegou a hora de curtir o Costão.
      </p>
      <img
        className="hero"
        src="img/costao-hero.jpg"
        alt="Vista aérea do Costão do Santinho: “O Resort para viver, se encantar e lembrar pra sempre”"
      />

      <h2 className="titulo titulo--lg titulo--esq">Programação:</h2>
      <p className="hora hora--bloco">Dia livre</p>
      <p className="texto texto--grande">
        Aproveite para descansar, conhecer o resort e curtir as experiências disponíveis durante a sua estadia.
      </p>

      <h2 className="titulo titulo--lg titulo--esq">Confira o que te espera:</h2>

      <h3 className="hora hora--bloco" id="estrutura">
        Estrutura
      </h3>
      <div className="cards-verticais">
        {cardsEstrutura.map((c) => (
          <a key={c.titulo} className="card-vertical" href={href('/dia/19/estrutura', c.alvo)}>
            <img src={c.foto} alt="" loading="lazy" />
            <span>{c.titulo}</span>
          </a>
        ))}
      </div>

      <h3 className="hora hora--bloco">Bares e restaurantes</h3>
      <div className="cards-bares">
        {cardsBares.map((c) => (
          <a key={c.titulo} className="card-bar" href={href('/dia/19/bares', c.alvo)}>
            <img src={c.foto} alt="" loading="lazy" />
            <span>{c.titulo}</span>
          </a>
        ))}
      </div>
    </Page>
  );
}
