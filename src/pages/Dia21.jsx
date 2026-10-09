import { Page, Agenda, Aviso } from '../components/Layout.jsx';

const manha = [
  { hora: 'Manhã:', texto: 'Café da Manhã', forte: true },
  { hora: 'Até 11h:', texto: 'Check-out' },
  { hora: '12h00:', texto: 'Almoço no hotel' },
  { hora: '14h30:', texto: 'Saída do hotel para o retorno' },
];

export default function Dia21() {
  return (
    <Page ativo="21">
      <h1 className="titulo titulo--xl">Hora de voltar</h1>
      <p className="texto texto--centro">
        Depois de dias de diversão, descanso e celebração, chegou a hora de encerrar o De Férias com a Poupa 2026.
      </p>

      <h2 className="titulo titulo--lg titulo--esq">Programação:</h2>
      <Agenda itens={manha} />

      <Aviso titulo="Antes de sair:">
        Confira seus pertences, organize suas malas e esteja pronto para a saída no horário e local indicado.
      </Aviso>

      <h2 className="titulo titulo--lg titulo--esq">Até a próxima experiência!</h2>
    </Page>
  );
}
