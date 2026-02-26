import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Menu } from 'lucide-react';

const navLinks = [
  { id: 'servicos', name: 'Serviços' },
  { id: 'diferenciais', name: 'Diferenciais' },
  { id: 'metodo', name: 'Método' },
];

const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string,
  callback?: () => void
) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (sectionId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (callback) callback();
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <a
            href="#top"
            onClick={(e) => scrollToSection(e, 'top')}
            className="text-lg md:text-xl font-extrabold tracking-tight text-slate-900 hover:text-indigo-600 transition-colors"
            aria-label="PlusOps - Voltar ao topo"
          >
            PLUS<span className="text-indigo-600">OPS</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5521988551085?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20diagnóstico."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg inline-flex items-center gap-2"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id, () => setIsOpen(false))}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5521988551085?text=Olá!%20Vim%20do%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 bg-indigo-600 text-white px-3 py-3 rounded-lg text-center font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
