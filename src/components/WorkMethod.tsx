import React from 'react';

const WorkMethod: React.FC = () => (
  <section id="metodo" className="py-16 sm:py-20 lg:py-28 bg-slate-900 text-white">
    <div className="section-inner">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-xs sm:text-sm font-medium tracking-wider uppercase text-indigo-400 mb-3 sm:mb-4">Como trabalhamos</h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-12 sm:mb-16">Metodologia Estratégica para Resultados Executivos</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            step: "01",
            title: "Diagnóstico Executivo",
            desc: "Análise profunda dos processos atuais, identificação de gargalos e oportunidades de eficiência operacional.\n\nVocê recebe: relatório executivo com diagnóstico completo, métricas atuais e plano de ação prioritário."
          },
          {
            step: "02",
            title: "Implantação Estruturada",
            desc: "Estruturação de processos, implantação de canais de atendimento e implementação de agentes de IA com governança.\n\nVocê recebe: processos organizados, equipe treinada e tecnologia implementada com acompanhamento."
          },
          {
            step: "03",
            title: "Otimização Contínua",
            desc: "Monitoramento de resultados, ajustes estratégicos e garantia de eficiência operacional sustentável.\n\nVocê recebe: dashboard de métricas, relatórios mensais e suporte contínuo para crescimento."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-800 p-8 sm:p-10 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all group flex flex-col h-full">
            <div>
              <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-700/80 group-hover:text-indigo-500/40 transition-colors mb-4 sm:mb-6 block">{item.step}</span>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">{item.title}</h4>
              <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{item.desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700 text-slate-400 text-sm">
              <span className="font-medium">Entrega:</span> relatório executivo, plano de ação e prioridades.
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkMethod;
