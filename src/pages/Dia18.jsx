import { Page, Seta } from '../components/Layout.jsx';

export default function Dia18() {
  return (
    <Page ativo="18">
      <h1 className="titulo titulo--xl">Primeiro destino</h1>
      <img className="logo-parque" src="img/logo-beto-carrero.png" alt="Beto Carrero World" />
      <p className="texto texto--centro">
        O primeiro dia já começa com muita diversão! Depois da chegada à região de Florianópolis, nosso destino será o
        Beto Carrero World.
      </p>

      <h2 className="titulo titulo--lg titulo--esq">Programação:</h2>
      <p className="linha-destaque">
        <span className="hora">10h às 16h</span> <strong>Beto Carrero World</strong>
      </p>

      <p className="rotulo">Dress Code:</p>
      <p className="texto texto--grande texto--bold">Camiseta oficial De Férias 2026</p>
      <p className="texto texto--grande">
        Neste dia, todos os participantes deverão utilizar a camiseta oficial da viagem, que será enviada previamente.
      </p>
      <p className="texto texto--grande">
        Vista a camiseta e venha viver o primeiro dia dessa experiência com a gente!
      </p>

      <h2 className="titulo titulo--lg titulo--esq titulo--vermelho">Depois do parque:</h2>
      <ul className="lista-setas">
        <li>
          <Seta />
          Deslocamento para o Hotel Costão do Santinho
        </li>
        <li>
          <Seta />
          Check-in no hotel
        </li>
      </ul>
    </Page>
  );
}
