import { Page, Agenda } from '../components/Layout.jsx';
import { looks } from '../data/lugares.js';

const noite = [
  { hora: '20h00:', texto: 'Início da premiação' },
  { hora: '21h00:', texto: 'Início do jantar e serviço de bebidas' },
  { hora: '21h30:', texto: 'Início da banda' },
  { hora: '23h00:', texto: 'Encerramento do jantar' },
  { hora: '00h00:', texto: 'Encerramento do serviço de bebidas e do evento' },
];

export default function Dia20() {
  return (
    <Page ativo="20">
      <img className="logo-awards" src="img/logo-poupa-awards.png" alt="Poupa Awards" />
      <h1 className="titulo titulo--lg titulo--estreito">Uma noite para celebrar quem deixou sua marca.</h1>
      <p className="texto texto--centro">Durante o dia, aproveite mais um momento livre no Costão do Santinho.</p>
      <p className="texto texto--centro">
        Mas à noite, temos um encontro marcado para celebrar as conquistas que fizeram parte de 2026.
      </p>

      <h2 className="titulo titulo--lg titulo--esq">Programação da noite:</h2>
      <Agenda itens={[{ hora: 'Local:', texto: 'Rancho do Pescador', forte: true }, ...noite]} />

      <h2 className="titulo titulo--lg titulo--esq">Dress code:</h2>
      <p className="hora hora--bloco">Tropical Chic</p>
      <div className="texto">
        <p>Uma produção elegante, leve e adequada ao clima à beira-mar.</p>
        <p>São bem-vindos:</p>
        <ul className="lista-pontos">
          <li>Vestidos e macacões;</li>
          <li>Conjuntos;</li>
          <li>Camisas e polos;</li>
          <li>Calças de sarja;</li>
          <li>Alfaiataria casual;</li>
          <li>Peças em tecidos leves.</li>
        </ul>
      </div>
      <p className="texto texto--bold">Não é necessário traje de gala.</p>

      <h2 className="titulo titulo--lg titulo--esq">Para te inspirar:</h2>
      <div className="looks">
        {looks.map((l) => (
          <img key={l.foto} src={l.foto} alt={l.alt} loading="lazy" />
        ))}
      </div>
    </Page>
  );
}
