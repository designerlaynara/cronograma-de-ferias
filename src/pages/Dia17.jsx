import { Page, Aviso } from '../components/Layout.jsx';

export default function Dia17() {
  return (
    <Page ativo="17">
      <h1 className="titulo titulo--xl">A viagem começa aqui!</h1>
      <p className="texto texto--intro texto--centro">
        É hora de preparar as malas e dar início ao <strong>De Férias com a Poupa 2026.</strong>
      </p>

      <h2 className="titulo titulo--lg titulo--esq">Nossa programação:</h2>
      <p className="linha-destaque">
        <span className="hora">
          18h<small>*</small>
        </span>{' '}
        <strong>Saída rumo a Florianópolis.</strong>
      </p>
      <p className="texto texto--grande">Prepare tudo e esteja pronto para começar essa experiência com a gente.</p>
      <p className="observacao">*Horário a confirmar</p>

      <Aviso titulo="Para lembrar:">
        Antes da viagem, confira suas orientações de embarque e deixe tudo preparado para a saída.
      </Aviso>
    </Page>
  );
}
