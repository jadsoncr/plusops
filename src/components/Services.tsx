import React from 'react';
import { Layers, Globe, Bot, Wrench, CheckCircle2 } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  result: string;
}

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="card-like p-6 sm:p-8 h-full flex flex-col group animate-slide-up relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
      {service.icon}
    </div>
    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4">{service.title}</h3>
    <p className="text-sm sm:text-base font-normal text-slate-700 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 grow">
      {service.features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-700">
          <CheckCircle2 size={14} className="text-indigo-500 mt-0.5 shrink-0 sm:w-4 sm:h-4" />
          <span>{feature}</span>
        </div>
      ))}
    </div>
    <div className="pt-4 sm:pt-6 border-t border-slate-100">
      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-600 mb-1">Resultado:</p>
      <p className="text-xs sm:text-sm font-medium text-slate-900">{service.result}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'funil-vendas',
      icon: <Layers size={24} />,
      title: 'Estruturação de Funil de Vendas',
      description: 'Criação e organização de funis que permitem crescimento previsível e sustentável.',
      features: ['Diagnóstico de funil atual', 'Mapeamento de etapas', 'Implementação de processos de vendas', 'Acompanhamento de conversão'],
      result: 'Funil estruturado, previsibilidade de vendas e crescimento sustentável.'
    },
    {
      id: 'onboarding-clientes',
      icon: <Globe size={24} />,
      title: 'Onboarding de Clientes',
      description: 'Estruturação do processo de entrada de novos clientes para evitar frustração e cancelamentos.',
      features: ['Mapeamento de jornada inicial', 'Padronização de onboarding', 'Redução de churn'],
      result: 'Clientes bem recebidos, menos cancelamentos e maior satisfação.'
    },
    {
      id: 'customer-success',
      icon: <Bot size={24} />,
      title: 'Customer Success',
      description: 'Criação de processos focados em retenção, satisfação e sucesso do cliente.',
      features: ['Implementação de customer success', 'Monitoramento de satisfação', 'Ações de retenção'],
      result: 'Maior retenção, clientes satisfeitos e redução de churn.'
    },
    {
      id: 'experiencia-cliente',
      icon: <Wrench size={24} />,
      title: 'Experiência do Cliente',
      description: 'Mapeamento da jornada do cliente e identificação de pontos de fricção.',
      features: ['Análise de jornada', 'Identificação de pontos críticos', 'Propostas de melhoria'],
      result: 'Experiência aprimorada e aumento do NPS.'
    },
    {
      id: 'gestao-cancelamentos',
      icon: <AlertTriangle size={24} />,
      title: 'Gestão de Cancelamentos e Reputação',
      description: 'Análise das causas de cancelamento e reclamações. Estruturação de melhorias para reduzir churn e melhorar reputação.',
      features: ['Diagnóstico de cancelamentos', 'Plano de ação para reputação', 'Monitoramento de resultados'],
      result: 'Churn reduzido e reputação fortalecida.'
    },
    {
      id: 'padronizacao-atendimento',
      icon: <CheckCircle2 size={24} />,
      title: 'Padronização de Atendimento',
      description: 'Criação de fluxos e processos para atendimento ao cliente.',
      features: ['Mapeamento de fluxos', 'Padronização de scripts', 'Treinamento de equipe'],
      result: 'Atendimento consistente e eficiente.'
    },
    {
      id: 'terceirizacao-atendimento',
      icon: <Users size={24} />,
      title: 'Terceirização de Atendimento',
      description: 'Estruturação e operação de atendimento ao cliente com equipe dedicada.',
      features: ['Montagem de equipe', 'Gestão de SLA', 'Monitoramento de qualidade'],
      result: 'Atendimento profissional e escalável.'
    },
    {
      id: 'indicadores-performance',
      icon: <TrendingDown size={24} />,
      title: 'Indicadores de Performance',
      description: 'Implementação de indicadores como churn, retenção, conversão de vendas, CAC vs LTV, satisfação do cliente.',
      features: ['Definição de KPIs', 'Dashboard de indicadores', 'Acompanhamento contínuo'],
      result: 'Gestão baseada em dados e decisões estratégicas.'
    },
    {
      id: 'landing-pages',
      icon: <Globe size={24} />,
      title: 'Criação de Landing Pages de Alta Conversão',
      description: 'Desenvolvimento de páginas focadas em geração de leads e vendas.',
      features: ['Design estratégico', 'Copy persuasiva', 'SEO avançado'],
      result: 'Mais leads qualificados e aumento de vendas.'
    },
    {
      id: 'solucoes-web',
      icon: <Bot size={24} />,
      title: 'Soluções Web Customizadas',
      description: 'Desenvolvimento de sistemas e soluções digitais sob medida para empresas.',
      features: ['Desenvolvimento sob demanda', 'Integração de sistemas', 'Automação de processos'],
      result: 'Tecnologia alinhada à operação e crescimento.'
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="section-inner">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-3 sm:mb-4">Serviços PlusOps</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Consultoria operacional para crescimento empresarial
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Estruturamos processos, atendimento, experiência do cliente e tecnologia para empresas que querem escalar com eficiência e previsibilidade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
