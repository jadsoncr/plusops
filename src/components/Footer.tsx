import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-slate-400 py-8 px-4 border-t border-slate-800">
    <div className="section-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        <span className="font-semibold text-white">plusops</span> &copy; {new Date().getFullYear()} &mdash; Todos os direitos reservados.
      </div>
      <div className="flex items-center gap-4">
        <a
          href="mailto:contato@plusops.com.br"
          className="hover:text-indigo-400 transition-colors"
          aria-label="Enviar e-mail para PlusOps"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/plusops/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition-colors"
          aria-label="LinkedIn PlusOps"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
    </div>
  </footer>
);

export default Footer;
