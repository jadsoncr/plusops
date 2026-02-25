import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

const whatsappNumber = '5511999999999';
const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre a PlusOps.');

const FloatingActions: React.FC = () => (
  <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center gap-3">
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-colors"
      aria-label="WhatsApp"
    >
      <MessageCircle size={18} />
    </a>
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-lg transition-colors"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={16} />
    </button>
  </div>
);

export default FloatingActions;
