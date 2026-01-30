
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Proteção simples contra erros de localStorage em sandboxes restritos
try {
  const testKey = "__storage_test__";
  window.localStorage.setItem(testKey, testKey);
  window.localStorage.removeItem(testKey);
} catch (e) {
  console.warn("LocalStorage access is restricted in this environment.");
}

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
