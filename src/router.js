import { useEffect, useState } from 'react';

// Rotas por hash (#/dia/17, #/dia/19/bares#kaigan) — funciona em qualquer hospedagem estática.
function parse() {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const [path, anchor] = raw.split('#');
  return { path: path || '/', anchor: anchor || null };
}

export function useRoute() {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  useEffect(() => {
    if (route.anchor) {
      const el = document.getElementById(route.anchor);
      if (el) {
        el.scrollIntoView({ block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [route.path, route.anchor]);

  return route;
}

export const href = (path, anchor) => `#${path}${anchor ? `#${anchor}` : ''}`;

export function goBack(fallback = '/roteiro') {
  if (window.history.length > 1) window.history.back();
  else window.location.hash = fallback;
}
