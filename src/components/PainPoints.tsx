import React from 'react';
import { AlertTriangle, Users, TrendingDown, Clock } from 'lucide-react';

const PainPoints: React.FC = () => (
  <section id="dores" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white">
    <div className="section-inner">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-xs sm:text-sm font-medium tracking-wider uppercase text-indigo-400 mb-3 sm:mb-4">Problemas Executivos</h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8">Se Você Reconhece Estes Desafios, Está no Momento Certo</h3>
        <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg font-normal">CEOs e diretores de PME B2B enfrentam diariamente estes gargalos que impactam diretamente o crescimento sustentável e a rentabilidade.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {[
          {
            icon: <TrendingDown size={24} />,
            title: "Churn Elevado Erodindo Receita Recorrente",
            desc: "Perda sistemática de clientes estratégicos, forçando vendas desesperadas para compensar. Impacto direto no CLTV e previsibilidade financeira."
          },
          {
            icon: <Clock size={24} />,
            title: "Operações Caóticas sem Eficiência",
            desc: "Processos desorganizados, retrabalho constante e falta de estruturação operacional impedindo escalabilidade e controle executivo."
          },
          {
            icon: <Users size={24} />,
            title: "Experiência do Cliente B2B Fragmentada",
            desc: "Atendimento inconsistente, canais desconectados e ausência de jornada do cliente B2B resultando em insatisfação e perda de oportunidades."
          },
          {
            icon: <AlertTriangle size={24} />,
            title: "Tecnologia sem Estratégia ou Governança",
            desc: "Implementações de IA e automação sem controle, gerando riscos operacionais, compliance e perda de confiança dos stakeholders."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-slate-800 p-6 sm:p-8 rounded-2xl border border-slate-700 hover:border-red-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300 animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
              {item.icon}
            </div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-white">{item.title}</h4>
            <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 sm:mt-16">
        <p className="text-slate-300 text-lg font-medium mb-6">Estes problemas não se resolvem sozinhos. Requerem estratégia executiva e implementação profissional.</p>
        <a
          href="https://wa.me/5521988551085?text=Olá!%20Reconheço%20estes%20desafios%20em%20minha%20operação%20B2B.%20Gostaria%20de%20agendar%20diagnóstico%20estratégico."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 animate-pulse"
        >
          Agendar Diagnóstico Estratégico
        </a>
      </div>
    </div>
  </section>
);

export default PainPoints;