
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Globe, 
  Bot, 
  Wrench, 
  CheckCircle2, 
  MessageCircle, 
  Linkedin,
  Monitor,
  Zap,
  ShieldCheck,
  TrendingUp,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';

// --- Types ---
interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  result: string;
}

interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  image: string;
  aspectRatio: string;
}

// --- Helper for Smooth Scrolling ---
const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string, callback?: () => void) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    if (callback) callback();
  }
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O que faço', id: 'servicos' },
    { name: 'Por que trabalhar comigo', id: 'diferenciais' },
    { name: 'Como trabalho', id: 'metodo' },
    { name: 'Portfólio', id: 'portfolio' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              PLUS<span className="text-indigo-600">OPS</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5521988551085" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id, () => setIsOpen(false))}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5521988551085"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 bg-indigo-600 text-white px-3 py-3 rounded-lg text-center font-semibold flex items-center justify-center gap-2"
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

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-20">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-400 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-400 rounded-full blur-[100px]"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
        Arquitetura de soluções digitais <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">e IA para negócios reais</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
        +20 anos de experiência real + modelos validados + tecnologia atual.<br/>
        Transformo estratégia em operação. Do site à automação, do funil à operação.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="#servicos" 
          onClick={(e) => scrollToSection(e, 'servicos')}
          className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
        >
          Ver serviços
          <ArrowRight size={20} />
        </a>
        <a 
          href="https://wa.me/5521988551085" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} className="text-green-500" />
          Falar comigo no WhatsApp
        </a>
      </div>

      <div className="mt-20 pt-10 border-t border-slate-200 flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-60">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-slate-800">20+ Anos</span>
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Liderando CX/CS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-slate-800">Estratégia</span>
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Visão Completa</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-slate-800">Execução</span>
          <span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Foco em Resultado</span>
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col h-full group">
    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.description}</p>
    
    <div className="space-y-3 mb-8 flex-grow">
      {service.features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
          <CheckCircle2 size={16} className="text-indigo-500 mt-0.5 shrink-0" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
    
    <div className="pt-6 border-t border-slate-50">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-1">Resultado:</p>
      <p className="text-sm font-medium text-slate-900">{service.result}</p>
    </div>
  </div>
);

const Services = () => {
  const services: Service[] = [
    {
      id: 'arch',
      icon: <Layers size={28} />,
      title: 'Arquitetura de Soluções Digitais',
      description: 'Antes de qualquer código, eu desenho a solução certa para o seu cenário.',
      features: [
        'Diagnóstico do problema real',
        'Arquitetura de sistemas e fluxos',
        'Regras de negócio bem definidas',
        'Plano de implementação e evolução'
      ],
      result: 'Menos retrabalho, menos risco e investimento inteligente.'
    },
    {
      id: 'funnels',
      icon: <Globe size={28} />,
      title: 'Landing Pages e Funis de Venda',
      description: 'Não entrego só páginas. Entrego máquinas de conversão orientadas a decisão.',
      features: [
        'Copywriting orientado a decisão',
        'Integração com WhatsApp e CRM',
        'SEO técnico desde a base',
        'Estrutura de funil otimizada'
      ],
      result: 'Mais leads qualificados e menos desperdício de mídia.'
    },
    {
      id: 'ai',
      icon: <Bot size={28} />,
      title: 'Agentes de IA para Negócios',
      description: 'IA em produção exige governança. Agentes para informar, agendar e vender.',
      features: [
        'Previsibilidade de gastos',
        'Auditoria completa das conversas',
        'Regras antes da IA (controle)',
        'Alertas de alucinações'
      ],
      result: 'Confiança, segurança e uso profissional da IA.'
    },
    {
      id: 'on-demand',
      icon: <Wrench size={28} />,
      title: 'Soluções Sob Demanda',
      description: 'Quando ferramentas prontas não resolvem, eu construo tecnologia que se adapta ao seu negócio.',
      features: [
        'Dashboards operacionais',
        'Ferramentas internas para times',
        'Integrações entre sistemas',
        'MVPs e produtos digitais'
      ],
      result: 'Tecnologia que se adapta ao seu negócio — não o contrário.'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-base font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">O que eu faço</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Tecnologia aplicada ao negócio — não o contrário
          </h3>
          <p className="text-lg text-slate-600">
            Eu projeto e implemento soluções digitais que resolvem problemas reais: vendas, atendimento, operação e crescimento.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyMe = () => (
  <section id="diferenciais" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-base font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Por que trabalhar comigo</h2>
      <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-16">Diferenciais que fazem diferença</h3>
      
      <div className="grid md:grid-cols-3 gap-12">
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
            <Layers size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-4">Arquitetura antes da tecnologia</h4>
          <p className="text-slate-600">Eu parto da operação, não do hype. Tecnologia é ferramenta, não fim.</p>
        </div>
        
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
            <TrendingUp size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-4">Visão de venda e CX</h4>
          <p className="text-slate-600">Tudo é pensado para gerar valor e conversão. +20 anos liderando CX/CS.</p>
        </div>
        
        <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={24} />
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-4">IA com controle e auditoria</h4>
          <p className="text-slate-600">Sem surpresas ou improviso. Custo previsível e execução consistente.</p>
        </div>
      </div>
    </div>
  </section>
);

const WorkMethod = () => (
  <section id="metodo" className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-base font-bold text-indigo-400 uppercase tracking-[0.2em] mb-4">Como eu trabalho</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Da estratégia à operação</h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 relative">
        {[
          {
            step: "01",
            title: "Diagnóstico claro",
            desc: "Entendo o problema antes de sugerir qualquer tecnologia."
          },
          {
            step: "02",
            title: "Arquitetura e Desenho",
            desc: "Fluxos, regras e integrações bem definidos em blueprint."
          },
          {
            step: "03",
            title: "Implementação e Operação",
            desc: "Entrega funcionando, pronta para evoluir no dia a dia."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-800 p-10 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all group">
            <span className="text-5xl font-black text-slate-700 group-hover:text-indigo-500/30 transition-colors mb-6 block">{item.step}</span>
            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PortfolioCard = ({ project }: { project: Project }) => {
  const [error, setError] = useState(false);
  
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
      <div className={`relative overflow-hidden bg-slate-100 ${project.aspectRatio === 'mobile' ? 'aspect-[9/16] max-w-[280px] mx-auto my-4 rounded-xl shadow-lg' : 'aspect-video'}`}>
        <img 
          src={error ? `https://via.placeholder.com/800x450/4f46e5/ffffff?text=${project.title}` : project.image} 
          alt={project.title}
          className={`${project.aspectRatio === 'desktop' ? 'object-contain' : 'object-cover'} w-full h-full transition-transform duration-500 group-hover:scale-105`}
          onError={() => setError(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl"
          >
            Ver Projeto <ExternalLink size={18} />
          </a>
        </div>
      </div>
      <div className="p-8 flex-grow text-center md:text-left">
        <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h4 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "BRO.est",
      description: "Plataforma de governança operacional e controle de CMV, com foco em dados, rotina e resultado.",
      url: "https://broai-saas.vercel.app/",
      tags: ["Arquitetura", "SaaS", "Hospitalidade"],
      image: "/images/broai.svg",
      aspectRatio: "desktop"
    },
    {
      title: "DUUS",
      description: "Produto autoral de clareza emocional e escrita guiada, com IA aplicada de forma consciente.",
      url: "https://duus.vercel.app/",
      tags: ["IA", "UX Editorial", "Wellness"],
      image: "https://api.microlink.io?url=https://duus.vercel.app/&screenshot=true&embed=screenshot.url",
      aspectRatio: "mobile"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Soluções desenvolvidas</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Laboratórios de arquitetura e IA</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {projects.map((p, idx) => (
            <PortfolioCard key={idx} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => (
  <section className="py-24 bg-white border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-12">Para quem é</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "Empresas que querem vender melhor e operar com mais controle",
          "Negócios que já tentaram automação ou IA e se frustraram",
          "Fundadores e gestores que valorizam execução e resultado",
          "Times que precisam transformar processos em sistemas"
        ].map((text, idx) => (
          <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center justify-center text-center h-full">
            <p className="text-slate-700 font-semibold text-sm leading-snug">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-50 border-t border-slate-200 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-8">
        <span className="text-2xl font-black tracking-tight text-slate-900">
          PLUS<span className="text-indigo-600">OPS</span>
        </span>
        <p className="mt-4 text-slate-500 text-sm max-w-lg mx-auto">
          Jadson Campos • Arquitetura de soluções digitais • IA aplicada a negócios
        </p>
      </div>
      
      <div className="flex justify-center gap-6 mb-10">
        <a 
          href="https://wa.me/5521988551085" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-700 transition-all shadow-xl"
        >
          <MessageCircle size={24} />
          Falar no WhatsApp
        </a>
      </div>
      
      <div className="flex justify-center gap-6 text-slate-400 mb-8">
        <a href="https://www.linkedin.com/in/jadsoncampos/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
          <Linkedin size={24} />
        </a>
      </div>
      
      <p className="text-slate-400 text-xs">
        © {new Date().getFullYear()} PlusOps • Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyMe />
        <WorkMethod />
        <Portfolio />
        <TargetAudience />
      </main>
      <Footer />
    </div>
  );
}
