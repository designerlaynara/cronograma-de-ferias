import Carousel from '../components/Carousel.jsx';

// Lista de lugares com título, texto e carrossel de fotos (estrutura / bares e restaurantes)
export default function Secoes({ itens }) {
  return itens.map((item) => (
    <section className="secao" id={item.id} key={item.id}>
      <h2 className="hora hora--bloco">{item.titulo}</h2>
      {item.paragrafos.map((p) => (
        <p className="texto texto--secao" key={p}>
          {p}
        </p>
      ))}
      {item.destaque && (
        <p className="texto texto--secao texto--bold">
          {item.destaque.map((linha, i) => (
            <span key={linha}>
              {i > 0 && <br />}
              {linha}
            </span>
          ))}
        </p>
      )}
      {item.nota && <p className="nota">{item.nota}</p>}
      <Carousel fotos={item.fotos} titulo={item.titulo} />
    </section>
  ));
}
