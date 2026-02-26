import React, { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setForm(initialState);
    }, 1200);
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-slate-900 text-white">
      <div className="section-inner">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-xs sm:text-sm font-medium tracking-wider uppercase text-indigo-400 mb-3 sm:mb-4">Agende Agora</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">Não perca mais clientes. Não deixe gargalos operacionais afetarem seu crescimento.</h3>
          <p className="text-slate-400 text-base sm:text-lg font-normal mb-6">Agende seu diagnóstico gratuito de 30 minutos e descubra como reduzir churn, melhorar eficiência operacional e implementar agentes de IA com governança.</p>
          
          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">Resultados que nossos clientes conquistaram:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-indigo-400">40%</div>
                <div className="text-sm text-slate-400">Redução de Churn</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-400">60%</div>
                <div className="text-sm text-slate-400">Melhoria na Eficiência Operacional</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-400">85%</div>
                <div className="text-sm text-slate-400">Aumento na Satisfação do Cliente</div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-slate-800 p-6 sm:p-10 rounded-2xl border border-slate-700 shadow-lg">
          <div className="grid grid-cols-1 gap-6">
            <input
              className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="name"
              placeholder="Nome"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <input
              className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <input
              className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              name="company"
              placeholder="Empresa"
              value={form.company}
              onChange={handleChange}
              autoComplete="organization"
            />
            <textarea
              className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px]"
              name="message"
              placeholder="Como podemos ajudar?"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar mensagem'}
            </button>
            {submitted && (
              <div className="text-green-400 text-center font-medium mt-2">Mensagem enviada! Retornaremos em breve.</div>
            )}
          </div>
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
