import React from 'react';
import { MessageCircle } from 'lucide-react';

const whatsappNumber = '5511999999999'; // Substitua pelo número real
const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da PlusOps.');

const MobileCTA: React.FC = () => (
  <a
    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-colors"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle size={20} />
  </a>
);

export default MobileCTA;
