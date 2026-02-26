import React from 'react';
import { Layers, TrendingUp, ShieldCheck } from 'lucide-react';

const WhyMe: React.FC = () => (
  <section id="diferenciais" className="py-12 sm:py-16 lg:py-20 bg-white">
    <div className="section-inner text-center">
      <h2 className="text-xs sm:text-sm font-medium tracking-wider uppercase text-indigo-600 mb-3 sm:mb-4">Por Que a PlusOps</h2>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-10 sm:mb-16">Autoridade Executiva em Consultoria Operacional B2B</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-float">
            <Layers size={20} />
          </div>
          <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4">20+ Anos de Experiência Executiva</h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Especialista em operações reguladas e de grande escala. Experiência comprovada em MetrôRio, GRU Airport, Oi, Contax, Invepar e Rede D'Or São Luiz, com foco em eficiência operacional e redução de churn em ambientes corporativos complexos.</p>
        </div>
        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-float" style={{ animationDelay: '0.5s' }}>
            <TrendingUp size={20} />
          </div>
          <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4">Resultados Mensuráveis e ROI</h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Redução de churn de até 40%, melhoria de eficiência operacional em 60% e aumento de NPS em +25 pontos. Foco em métricas que impactam diretamente o resultado financeiro e o crescimento sustentável.</p>
        </div>
        <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-float" style={{ animationDelay: '1s' }}>
            <ShieldCheck size={20} />
          </div>
          <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4">IA Aplicada com Governança Executiva</h4>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">Agentes de IA para atendimento e landing pages que convertem desenvolvidos com governança completa. Tecnologia como ferramenta estratégica para CEOs, não como fim em si mesma.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyMe;
