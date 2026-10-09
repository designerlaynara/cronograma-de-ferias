import { Page } from '../components/Layout.jsx';
import { bares } from '../data/lugares.js';
import Secoes from './Secoes.jsx';

export default function Bares() {
  return (
    <Page>
      <h1 className="titulo titulo--xl">Bares e restaurantes</h1>
      <Secoes itens={bares} />
    </Page>
  );
}
