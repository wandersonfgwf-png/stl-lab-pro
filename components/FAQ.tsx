
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-emerald-600 transition-colors"
      >
        <span className="font-bold text-lg pr-8">{question}</span>
        <svg 
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-600">As respostas que você precisa antes de começar.</p>
        </div>

        <div className="bg-gray-50/50 px-8 rounded-3xl border border-gray-100">
          <FAQItem 
            question="Os arquivos funcionam em qualquer impressora?"
            answer="Sim! Os arquivos STL são universais e funcionam em qualquer impressora FDM (filamento) ou SLA (resina), independente da marca (Creality, Anycubic, Bambu Lab, etc)."
          />
          <FAQItem 
            question="Preciso saber modelagem 3D?"
            answer="De jeito nenhum. Todos os modelos já estão prontos para impressão. Você só precisa abrir no seu fatiador favorito e mandar imprimir."
          />
          <FAQItem 
            question="Como recebo os arquivos?"
            answer="O envio é automático e imediato. Assim que o pagamento for confirmado, você receberá um link de download no e-mail cadastrado."
          />
          <FAQItem 
            question="Posso vender as peças impressas?"
            answer="Sim, você tem total liberdade para imprimir e vender as peças físicas resultantes dos arquivos deste pack."
          />
          <FAQItem 
            question="É um pagamento único ou mensalidade?"
            answer="É pagamento único. Você paga uma vez e tem acesso vitalício ao pack e a todas as futuras atualizações que forem adicionadas a esta coleção."
          />
          <FAQItem 
            question="Tem algum suporte se eu tiver dúvidas?"
            answer="Com certeza. Temos um canal de suporte via e-mail e WhatsApp disponível no rodapé para te ajudar com qualquer dificuldade técnica."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
