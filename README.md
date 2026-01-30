<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>


# PlusOps – Arquitetura de Soluções & IA

> Solução inteligente para sua operação. Especialista em arquitetura de soluções digitais e IA aplicada para negócios reais.

## Visão Geral
Aplicação React + Vite + TypeScript, com interface moderna, responsiva e pronta para integração com IA (Google Gemini).

## Rodando Localmente

**Pré-requisitos:** Node.js 18+

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie um arquivo `.env.local` na raiz e adicione sua chave:
   ```env
   GEMINI_API_KEY=coloque_sua_chave_aqui
   ```
3. Rode o app:
   ```bash
   npm run dev
   ```

## Scripts Disponíveis
- `npm run dev` – inicia o servidor de desenvolvimento
- `npm run build` – gera build de produção
- `npm run preview` – preview do build
- `npm run test` – executa testes automatizados (Vitest)

## Testes Automatizados
O projeto usa [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/):

```bash
npm run test
```

## Qualidade de Código
- ESLint e Prettier recomendados para padronização
- Scripts sugeridos:
  ```json
  "lint": "eslint . --ext .ts,.tsx",
  "format": "prettier --write ."
  ```

## Responsividade
Consulte o arquivo [RESPONSIVIDADE.md](RESPONSIVIDADE.md) para dicas e ferramentas.

## SEO
- Arquivos `robots.txt` e `sitemap.xml` incluídos para melhor indexação.

## CI/CD
Sugestão: use GitHub Actions, Vercel ou Netlify para deploy contínuo.

## Acessibilidade
Veja exemplos e utilitários em `a11y-utils.tsx`.

## Estrutura do Projeto
- `App.tsx` – componente principal
- `index.tsx` – ponto de entrada
- `useAsync.ts` – hook utilitário para async/erros
- `a11y-utils.tsx` – utilitários de acessibilidade
- `App.test.tsx` – exemplo de teste

---
Desenvolvido por Jadson Campos • [LinkedIn](https://www.linkedin.com/in/jadsoncampos/)
