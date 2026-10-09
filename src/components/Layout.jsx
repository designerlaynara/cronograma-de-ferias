import { href, goBack } from '../router.js';

export const DIAS = ['17', '18', '19', '20', '21'];

export function Header({ ativo }) {
  return (
    <header className="topo">
      <a className="topo__logo" href={href('/roteiro')} aria-label="Voltar ao roteiro">
        <img src="img/logo-de-ferias.png" alt="De Férias com a Poupa" />
      </a>
      <nav className="topo__dias" aria-label="Dias da viagem">
        {DIAS.map((dia) => (
          <a
            key={dia}
            href={href(`/dia/${dia}`)}
            className={`pilula${ativo === dia ? ' pilula--ativa' : ''}`}
            aria-current={ativo === dia ? 'page' : undefined}
          >
            Dia {dia}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function BackButton() {
  return (
    <button type="button" className="voltar" onClick={() => goBack()} aria-label="Voltar">
      <svg viewBox="0 0 43 43" aria-hidden="true">
        <circle cx="21.5" cy="21.5" r="21.5" fill="currentColor" />
        <path d="M30 21.5H14m0 0 7-7m-7 7 7 7" stroke="#faf3dd" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </button>
  );
}

export function Page({ ativo, children, className = '' }) {
  return (
    <div className="pagina">
      <Header ativo={ativo} />
      <main className={`conteudo ${className}`}>{children}</main>
      <div className="rodape-wrap">
        <BackButton />
        <footer className="rodape">
          Programação preliminar, sujeita a alterações. Os horários serão confirmados próximo à viagem.
        </footer>
      </div>
    </div>
  );
}

// Linha de programação: horário em vermelho + descrição
export function Agenda({ itens }) {
  return (
    <dl className="agenda">
      {itens.map(({ hora, texto, forte }) => (
        <div className="agenda__item" key={hora + texto}>
          <dt className="agenda__hora">{hora}</dt>
          <dd className={`agenda__texto${forte ? ' agenda__texto--forte' : ''}`}>{texto}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Aviso({ titulo, children }) {
  return (
    <aside className="aviso">
      <h3 className="aviso__titulo">{titulo}</h3>
      <p className="aviso__texto">{children}</p>
    </aside>
  );
}

export function Seta() {
  return (
    <svg className="seta" viewBox="0 0 40 37" aria-hidden="true">
      <path d="M2 18.5h34m0 0L19 2m17 16.5L19 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
