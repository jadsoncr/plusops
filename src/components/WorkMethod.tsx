import React from 'react';

const WorkMethod: React.FC = () => (
  <section id="metodo" className="py-16 sm:py-20 lg:py-28 bg-slate-900 text-white">
    <div className="section-inner">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-xs sm:text-sm font-medium tracking-wider uppercase text-indigo-400 mb-3 sm:mb-4">Como trabalhamos</h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-12 sm:mb-16">Processo consultivo para crescimento sustentável</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
        {[
          {
            step: "01",
            title: "Pré-análise da operação",
            desc: "Coletamos informações iniciais para entender o momento da empresa."
          },
          {
            step: "02",
            title: "Análise da operação",
            desc: "Avaliação detalhada de processos, atendimento, vendas e experiência do cliente."
          },
          {
            step: "03",
            title: "Diagnóstico completo",
            desc: "Identificação dos gargalos operacionais."
          },
          {
            step: "04",
            title: "Plano de melhoria",
            desc: "Definição das mudanças necessárias para crescimento sustentável."
          },
          {
            step: "05",
            title: "Implementação e acompanhamento",
            desc: "Acompanhamento da execução das melhorias."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-800 p-8 sm:p-10 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all group flex flex-col h-full">
            <div>
              <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-700/80 group-hover:text-indigo-500/40 transition-colors mb-4 sm:mb-6 block">{item.step}</span>
              <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">{item.title}</h4>
              <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkMethod;
