import { Page } from '../components/Layout.jsx';
import { estrutura } from '../data/lugares.js';
import Secoes from './Secoes.jsx';

export default function Estrutura() {
  return (
    <Page>
      <h1 className="titulo titulo--xl">Conheça a estrutura</h1>
      <Secoes itens={estrutura} />
    </Page>
  );
}
