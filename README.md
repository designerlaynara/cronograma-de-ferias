# De Férias com a Poupa 2026 — cronograma

Site responsivo da programação da viagem (17 a 21 de dezembro), feito a partir do protótipo
**DFCP 2 – Cronograma** no Figma. Projeto React + Vite, independente do site Dose de Design.

## Rodando localmente

```bash
cd cronograma-de-ferias
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build     # gera a pasta dist/
npm run preview
```

O build usa caminhos relativos, então a pasta `dist/` pode ser publicada em qualquer hospedagem
estática (Netlify, Vercel, GitHub Pages, inclusive em subpasta).

## Páginas

| Rota                    | Tela no Figma                       |
| ----------------------- | ----------------------------------- |
| `#/`                    | capa                                |
| `#/roteiro`             | pág 1 — escolha o dia               |
| `#/dia/17`              | pág 3 — a viagem começa aqui        |
| `#/dia/18`              | pág 4 — Beto Carrero World          |
| `#/dia/19`              | pág 5 — um dia para aproveitar      |
| `#/dia/19/estrutura`    | pág 6 — conheça a estrutura         |
| `#/dia/19/bares`        | pág 7 — bares e restaurantes        |
| `#/dia/20`              | pág 8 — Poupa Awards                |
| `#/dia/21`              | pág 9 — hora de voltar              |

Os cards do dia 19 levam direto à seção correspondente (ex.: `#/dia/19/bares#kaigan`).

## Estrutura

```
public/img/            logos, capa e fotos (exportadas do Figma)
public/fonts/          coloque aqui as fontes originais (veja abaixo)
src/data/lugares.js    textos e fotos de estrutura, bares, cards e looks
src/components/        topo, rodapé, botão voltar, carrossel
src/pages/             uma página por tela
src/styles.css         todo o visual; --u = 1px do Figma (tela de 1080px)
```

## Fontes

O layout usa **Sunmor** (títulos) e **Mosvita** (textos), que são fontes comerciais e não vêm no
projeto. Enquanto elas não estiverem disponíveis, o site usa **Lilita One** e **Outfit** (Google Fonts).
Para usar as originais, adicione estes arquivos em `public/fonts/`:

```
Sunmor-Regular.woff2
Mosvita-Medium.woff2
Mosvita-SemiBold.woff2
Mosvita-Bold.woff2
Mosvita-ExtraBold.woff2
Mosvita-Black.woff2
```
