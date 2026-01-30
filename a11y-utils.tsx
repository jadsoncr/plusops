// Componente utilitário para acessibilidade: Skip to Content
import React from 'react';

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white text-indigo-700 px-4 py-2 rounded z-50 shadow"
      tabIndex={0}
    >
      Pular para o conteúdo principal
    </a>
  );
}

// Documentação de boas práticas de acessibilidade:
// - Use sempre alt em imagens
// - Garanta contraste suficiente
// - Use landmarks (main, nav, footer)
// - Teste navegação por teclado
// - Use aria-labels quando necessário
