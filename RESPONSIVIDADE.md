# Responsividade

O projeto já utiliza Tailwind CSS, que facilita a responsividade. Para testar e garantir responsividade:

## Ferramentas sugeridas
- Ferramenta de inspeção do navegador (Chrome DevTools, Firefox, Edge)
- [Responsively App](https://responsively.app/)
- [BrowserStack](https://www.browserstack.com/)

## Recomendações
- Teste em diferentes larguras de tela (mobile, tablet, desktop)
- Use breakpoints do Tailwind (`sm:`, `md:`, `lg:`, `xl:`)
- Teste navegação por toque e teclado

## Script útil
Adicione ao package.json para abrir o app local automaticamente:

```json
"scripts": {
  ...,
  "open": "vite --open"
}
```

Ou rode manualmente:

```
npm run dev
```
E acesse pelo navegador em diferentes tamanhos de tela.
