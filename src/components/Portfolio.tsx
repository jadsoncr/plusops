
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
  image: string;
  aspectRatio: 'desktop' | 'mobile';
};

const projects: Project[] = [
  {
    title: 'BRO.ext - SaaS de Governança Operacional',
    description: 'Plataforma completa para controle de CMV e governança operacional. Resultado: 60% de melhoria na eficiência operacional e redução de custos administrativos em 40%.',
    url: 'https://broai-saas.vercel.app/',
    tags: ['Governança Operacional', 'SaaS B2B', 'Eficiência'],
    image: '/images/broai.svg',
    aspectRatio: 'desktop',
  },
  {
    title: 'DUUS - IA para Clareza Emocional',
    description: 'Produto autoral com agentes de IA para atendimento emocional. Implementação resultou em 85% de satisfação do cliente e automação de 70% das interações iniciais.',
    url: 'https://duus.vercel.app/',
    tags: ['Agentes IA', 'Atendimento', 'Conversão'],
    image: '/images/duus-placeholder.svg',
    aspectRatio: 'mobile',
  },
];

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const [error, setError] = useState(false);
  return (
    <div className={`${project.aspectRatio === 'desktop' ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white' : 'bg-white'} rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full animate-slide-up card-hover relative` }>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <div className={`relative overflow-hidden ${project.aspectRatio === 'mobile' ? 'aspect-[9/16] max-w-[280px] mx-auto my-4 rounded-xl shadow-lg' : 'aspect-video'}`}>
        <img
          src={error ? `https://via.placeholder.com/800x450/4f46e5/ffffff?text=${project.title}` : project.image}
          alt={project.title}
          className={
            (project.aspectRatio === 'desktop' ? 'object-contain' : 'object-cover') +
            ' w-full h-full transition-transform duration-500 group-hover:scale-105'
          }
          onError={() => setError(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl"
            aria-label={`Ver projeto ${project.title}`}
          >
            Ver Projeto <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className={`p-8 flex-grow ${project.aspectRatio === 'desktop' ? 'text-white text-center md:text-left' : 'text-center md:text-left'}`}>
        <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">{project.title}</h4>
        <p className="text-base font-normal text-slate-600 leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => (
  <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
    <div className="section-inner">
      <div className="text-center mb-16">
        <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-indigo-600 mb-4">
          Cases de Sucesso
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-16">
          Resultados Reais em Consultoria em Operações B2B
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {projects.map((p) => (
          <PortfolioCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;



