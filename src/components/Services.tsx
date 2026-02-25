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
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
      {service.icon}
    </div>
    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4">{service.title}</h3>
    <p className="text-sm sm:text-base font-normal text-slate-700 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
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
      id: 'operational',
      icon: <Layers size={24} />,
      title: 'Estruturação Operacional B2B',
      description: 'Consultoria especializada em estruturação de processos para empresas B2B. Transformamos operações caóticas em sistemas eficientes e previsíveis, com foco em escalabilidade e controle executivo.',
      features: [
        'Diagnóstico completo de processos operacionais',
        'Mapeamento e otimização de fluxos críticos',
        'Implementação de estruturação de processos',
        'Playbook operacional personalizado',
        'Acompanhamento de eficiência operacional'
      ],
      result: '60% melhoria na eficiência operacional, processos previsíveis e controle executivo total.'
    },
    {
      id: 'customer',
      icon: <Globe size={24} />,
      title: 'Jornada, Experiência e Sucesso do Cliente',
      description: 'Especialista em jornada do cliente B2B e experiência excepcional. Desenvolvemos estratégias de customer success que reduzem churn e aumentam o valor do cliente ao longo do tempo.',
      features: [
        'Mapeamento completo da jornada do cliente B2B',
        'Estratégia de experiência do cliente omnichannel',
        'Implementação de customer success proativo',
        'Redução de churn com análise preditiva',
        'Otimização de NPS e CLTV'
      ],
      result: 'Redução de churn em 40%, NPS +25 pontos e aumento significativo no valor do cliente.'
    },
    {
      id: 'ai',
      icon: <Bot size={24} />,
      title: 'IA Aplicada e Conversão Digital',
      description: 'Implementação de agentes de IA para atendimento com governança completa e criação de landing pages que convertem usando neurociência e dados. Tecnologia como ferramenta estratégica.',
      features: [
        'Desenvolvimento de agentes de IA para atendimento',
        'Governança e controle de IA aplicada',
        'Criação de landing pages que convertem',
        'Otimização de conversão com neurociência',
        'Integração de canais digitais inteligentes'
      ],
      result: 'Atendimento 24/7 com IA, conversão aumentada em 3x e ROI mensurável em marketing.'
    }
  ];

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-slate-50">
      <div className="section-inner">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-xs sm:text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-3 sm:mb-4">Nossos 3 Pilares Estratégicos</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 leading-tight">
            Consultoria Operacional B2B Completa
          </h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Estratégia integrada para transformar sua operação B2B: estruturação operacional, experiência do cliente excepcional e IA aplicada com governança.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
          {/* Duplicate one service to match visual density from the design (keeps copy unchanged) */}
          <ServiceCard key={'operational-dup'} service={services[0]} />
        </div>
      </div>
    </section>
  );
};

export default Services;
