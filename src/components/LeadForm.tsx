import React, { useState } from 'react';

const initialState = {
  nome: '',
  empresa: '',
  email: '',
  telefone: '',
  mensagem: '',
  honeypot: '',
};

const LeadForm: React.FC = () => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.nome || !form.empresa || !form.email || !form.telefone) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }
    if (form.honeypot) {
      setError('Spam detectado.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm(initialState);
      } else {
        setError('Erro ao enviar. Tente novamente.');
      }
    } catch {
      setError('Erro ao enviar. Tente novamente.');
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="glass-card max-w-lg mx-auto p-8 text-center rounded-2xl shadow-lg border border-green-200 animate-fade-in">
        <h3 className="text-2xl font-display font-bold text-green-700 mb-2">Recebemos suas informações.</h3>
        <p className="text-green-800 text-base">Nossa equipe irá analisar os dados e entrar em contato para entender melhor a operação da sua empresa.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card max-w-md mx-auto p-6 rounded-2xl shadow-lg border border-slate-200 animate-fade-in space-y-5">
      <h2 className="text-2xl font-display font-bold text-navy mb-2">Solicitar pré-análise da operação</h2>
      <p className="mb-4 text-gray-text text-sm">Antes de qualquer diagnóstico completo, realizamos uma pré-análise para entender o momento da operação da empresa.</p>
      <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" autoComplete="off" tabIndex={-1} />
      <div className="grid grid-cols-1 gap-3">
        <div>
          <label className="block font-medium mb-1 text-navy">Nome *</label>
          <input name="nome" value={form.nome} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-navy-text focus:border-blue focus:ring-2 focus:ring-blue/20 transition" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-navy">Empresa *</label>
          <input name="empresa" value={form.empresa} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-navy-text focus:border-blue focus:ring-2 focus:ring-blue/20 transition" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-navy">Email *</label>
          <input name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-navy-text focus:border-blue focus:ring-2 focus:ring-blue/20 transition" type="email" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-navy">Telefone *</label>
          <input name="telefone" value={form.telefone} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-navy-text focus:border-blue focus:ring-2 focus:ring-blue/20 transition" />
        </div>
        <div>
          <label className="block font-medium mb-1 text-navy">Mensagem</label>
          <textarea name="mensagem" value={form.mensagem} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-slate-300 bg-white text-navy-text focus:border-blue focus:ring-2 focus:ring-blue/20 transition min-h-15" />
        </div>
      </div>
      {error && <div className="text-red-600 font-medium mb-2">{error}</div>}
      <button type="submit" className="bg-orange text-white font-bold py-3 rounded-lg w-full hover:bg-orange-light transition shadow-md" disabled={loading}>
        {loading ? 'Enviando...' : 'Solicitar pré-análise'}
      </button>
    </form>
  );
};

export default LeadForm;
