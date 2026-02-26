import React from 'react';
import { ArrowRight, MessageCircle, ArrowDown } from 'lucide-react';

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

const Hero: React.FC = () => (
  <section id="top" className="relative pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 overflow-hidden animate-fade-in">
    {/* Precise background blobs (SVG) placed for stable rendering) */}
    <svg className="absolute -top-10 -left-8 w-[560px] h-[560px] -z-20 pointer-events-none opacity-30" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <filter id="b" x="0" y="0" width="100%" height="100%">
          <feGaussianBlur stdDeviation="60" result="blur" />
        </filter>
      </defs>
      <circle cx="280" cy="280" r="200" fill="#4f46e5" filter="url(#b)" />
    </svg>
    <svg className="absolute -bottom-16 -right-8 w-[420px] h-[420px] -z-20 pointer-events-none opacity-20" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <filter id="c" x="0" y="0" width="100%" height="100%">
          <feGaussianBlur stdDeviation="50" result="blur" />
        </filter>
      </defs>
      <circle cx="210" cy="210" r="160" fill="#0ea5e9" filter="url(#c)" />
    </svg>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-hero-xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 sm:mb-6">
        Consultoria Operacional B2B Premium:<br className="hidden sm:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-plus-indigo to-blue-500">
          Reduza Churn 40%, Aumente Eficiência 60%
        </span>
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-slate-700 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0">
        Especialista em estruturação operacional B2B, jornada do cliente B2B e IA aplicada com governança. 
        Transformamos operações caóticas em máquinas de crescimento sustentável. Para CEOs e diretores que precisam de resultados executivos, não promessas vazias.
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
        <a
          href="https://wa.me/5521988551085?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20diagnóstico%20estratégico%20gratuito%20de%20operações%20B2B."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 sm:px-8 py-3.5 sm:py-4 bg-plus-indigo text-white font-bold rounded-full hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm sm:text-base hover:-translate-y-0.5 animate-pulse"
        >
          Agendar Diagnóstico Estratégico (30 min)
          <ArrowRight size={18} />
        </a>
        <a
          href="https://wa.me/5521988551085?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20consultoria%20operacional%20B2B%20e%20redução%20de%20churn."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-slate-900 border-2 border-indigo-600 font-bold rounded-full hover:bg-indigo-50 hover:text-indigo-700 transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          <MessageCircle size={18} className="text-green-500" />
          Conversar com Especialista
        </a>
      </div>
      <div className="mt-6 sm:mt-8">
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed px-4 sm:px-0">
          Resultados comprovados em operações B2B: redução de churn de até 40%,<br className="hidden sm:block" />
          eficiência operacional aumentada em 60% e NPS melhorado em +25 pontos.
        </p>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-slate-200 flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <div className="flex flex-col items-center px-4">
          <span className="text-xl sm:text-2xl font-bold text-slate-800">40%</span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-medium">Redução de Churn</span>
        </div>
        <div className="flex flex-col items-center px-4">
          <span className="text-xl sm:text-2xl font-bold text-slate-800">60%</span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-medium">Eficiência Operacional</span>
        </div>
        <div className="flex flex-col items-center px-4">
          <span className="text-xl sm:text-2xl font-bold text-slate-800">+25</span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-medium">Pontos NPS</span>
        </div>
      </div>
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-slate-400" />
      </div>
    </div>
  </section>
);

export default Hero;
