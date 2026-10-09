import { useRoute } from './router.js';
import Capa from './pages/Capa.jsx';
import Roteiro from './pages/Roteiro.jsx';
import Dia17 from './pages/Dia17.jsx';
import Dia18 from './pages/Dia18.jsx';
import Dia19 from './pages/Dia19.jsx';
import Estrutura from './pages/Estrutura.jsx';
import Bares from './pages/Bares.jsx';
import Dia20 from './pages/Dia20.jsx';
import Dia21 from './pages/Dia21.jsx';

const routes = {
  '/': Capa,
  '/roteiro': Roteiro,
  '/dia/17': Dia17,
  '/dia/18': Dia18,
  '/dia/19': Dia19,
  '/dia/19/estrutura': Estrutura,
  '/dia/19/bares': Bares,
  '/dia/20': Dia20,
  '/dia/21': Dia21,
};

export default function App() {
  const { path } = useRoute();
  const Page = routes[path] ?? Capa;
  return <Page key={path} />;
}
