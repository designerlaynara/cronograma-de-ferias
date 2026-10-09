import { useRef, useState } from 'react';

// Carrossel com rolagem nativa (swipe no celular), pontos indicadores e setas no desktop.
export default function Carousel({ fotos, titulo }) {
  const trilho = useRef(null);
  const [atual, setAtual] = useState(0);

  const onScroll = () => {
    const el = trilho.current;
    if (!el) return;
    setAtual(Math.round(el.scrollLeft / el.clientWidth));
  };

  const ir = (i) => {
    const el = trilho.current;
    if (!el) return;
    const alvo = Math.max(0, Math.min(fotos.length - 1, i));
    el.scrollTo({ left: alvo * el.clientWidth, behavior: 'smooth' });
  };

  return (
    <div className="carrossel" role="region" aria-roledescription="carrossel" aria-label={titulo}>
      <div className="carrossel__trilho" ref={trilho} onScroll={onScroll}>
        {fotos.map((src, i) => (
          <img
            key={src}
            className="carrossel__foto"
            src={src}
            alt={`${titulo} — foto ${i + 1} de ${fotos.length}`}
            loading="lazy"
            draggable="false"
          />
        ))}
      </div>
      {fotos.length > 1 && (
        <>
          <button type="button" className="carrossel__seta carrossel__seta--esq" onClick={() => ir(atual - 1)} disabled={atual === 0} aria-label="Foto anterior">
            ‹
          </button>
          <button type="button" className="carrossel__seta carrossel__seta--dir" onClick={() => ir(atual + 1)} disabled={atual === fotos.length - 1} aria-label="Próxima foto">
            ›
          </button>
          <div className="carrossel__pontos">
            {fotos.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`carrossel__ponto${i === atual ? ' carrossel__ponto--ativo' : ''}`}
                onClick={() => ir(i)}
                aria-label={`Ir para a foto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
