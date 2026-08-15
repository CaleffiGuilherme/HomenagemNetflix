# Homenagem Netflix 💕

Projeto feito com Vite (JavaScript puro) que imita o layout de perfil da Netflix como homenagem.

## Como rodar

```bash
npm install
npm run dev
```

Depois abra o link que aparecer no terminal (geralmente http://localhost:5173).

## Como gerar a versão final (build) para hospedar

```bash
npm run build
```

Isso cria a pasta `dist/` com os arquivos prontos pra subir em qualquer hospedagem (Vercel, Netlify, GitHub Pages, etc).

## Como personalizar

- **Foto principal**: clique no ícone de câmera na foto grande.
- **Foto de perfil**: clique no quadradinho vermelho no canto superior direito.
- **Galeria "Momentos Inesquecíveis Juntos"**: clique em cada quadradinho com "+" para adicionar fotos.
- **Textos** (nomes, ano, frase, descrição): clique diretamente em cima e edite.
- Para deixar os textos e imagens já fixos por padrão (sem precisar clicar toda vez que abrir), edite diretamente `index.html` (textos) e troque os `background` no `src/main.js` ou `src/style.css` pelas imagens que você quiser deixar fixas.

Feito sem fins comerciais, apenas uma homenagem pessoal.
