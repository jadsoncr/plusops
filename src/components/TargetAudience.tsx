import React from 'react';

const TargetAudience: React.FC = () => (
  <section id="publico" className="py-12 sm:py-16 lg:py-20 bg-white text-slate-900">
    <div className="section-inner">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-xs sm:text-sm font-medium tracking-wider uppercase text-indigo-500 mb-3 sm:mb-4">Para quem é</h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8">Executivos B2B que precisam de eficiência operacional urgente</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg font-normal">Se você é CEO, founder ou diretor de PME/startup B2B enfrentando redução de churn, problemas de eficiência operacional ou necessidade de escalar com controle, nossos serviços são ideais para sua realidade.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10">
        {[
          {
            title: "Executivos com alta rotatividade",
            desc: "CEOs e diretores enfrentando redução de churn elevada, perda de clientes estratégicos e dificuldade em reter receita recorrente."
          },
          {
            title: "Líderes com gargalos operacionais",
            desc: "Founders e diretores com processos desorganizados, falta de eficiência operacional e dificuldade em escalar operações sem perder qualidade."
          },
          {
            title: "Empresários que querem crescer",
            desc: "Executivos que precisam estruturar operações para crescimento sustentável, com experiência do cliente B2B excepcional e tecnologia aplicada."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-100 p-6 sm:p-10 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-slide-up group" style={{ animationDelay: `${idx * 0.1}s` }}>
            <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-indigo-600 group-hover:text-indigo-800 transition-colors">{item.title}</h4>
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetAudience;
