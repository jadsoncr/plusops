import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders main sections', () => {
    render(<App />);
    expect(screen.getByText(/Arquitetura de soluções digitais/i)).toBeInTheDocument();
    expect(screen.getByText(/O que eu faço/i)).toBeInTheDocument();
    expect(screen.getByText(/Diferenciais que fazem diferença/i)).toBeInTheDocument();
    expect(screen.getByText(/Da estratégia à operação/i)).toBeInTheDocument();
    expect(screen.getByText(/Soluções desenvolvidas/i)).toBeInTheDocument();
  });
});
