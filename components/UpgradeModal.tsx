
import React from 'react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  upgradeLink: string;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose, onContinue, upgradeLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300 border border-slate-800">
        
        {/* Header Gradient */}
        <div className="bg-slate-900/50 py-6 px-6 text-center border-b border-slate-800">
          <h2 className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase">
            AGUARDE! OPORTUNIDADE EXCLUSIVA
          </h2>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 text-center">
          <h3 className="text-white text-xl md:text-2xl font-black mb-2 uppercase leading-tight">
            FAÇA UPGRADE PARA O ACESSO COMPLETO
          </h3>
          <p className="text-emerald-500 font-black text-lg md:text-xl mb-8 uppercase tracking-tight">
            COM DESCONTO ADICIONAL ESPECIAL
          </p>

          <div className="mb-10">
            <p className="text-slate-500 text-lg line-through mb-1 font-bold">De R$ 37,90</p>
            <div className="flex flex-col items-center">
               <span className="text-white text-2xl md:text-3xl font-black uppercase mr-2 tracking-tighter">Por apenas</span>
               <span className="text-5xl md:text-7xl font-black text-emerald-500 tracking-tighter">R$ 27,90</span>
            </div>
            <div className="mt-6 inline-block bg-emerald-500/10 text-emerald-500 px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-wider border border-emerald-500/20">
              Economia Imediata de R$ 10,00
            </div>
          </div>

          <div className="space-y-5 text-left max-w-sm mx-auto mb-12">
            <div className="flex items-start gap-4 text-white">
              <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <p className="text-sm md:text-base font-bold">Acesso a todos os 9 Conteúdos Adicionais</p>
            </div>
            <div className="flex items-start gap-4 text-white">
              <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <p className="text-sm md:text-base font-bold">Edição Temática de Ano novo inclusa</p>
            </div>
            <div className="flex items-start gap-4 text-white">
              <div className="w-6 h-6 bg-slate-800 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <p className="text-sm md:text-base font-bold">Atendimento prioritário garantido</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-6">
            <a 
              href={upgradeLink}
              className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-6 rounded-2xl text-lg md:text-xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)] transition-all transform animate-pulse-button uppercase tracking-tight"
            >
              ACEITAR UPGRADE COM DESCONTO
            </a>
            
            <button 
              onClick={onContinue}
              className="text-gray-400 hover:text-white transition-colors text-sm font-bold underline underline-offset-4 uppercase tracking-widest"
            >
              Continuar com o Acesso Essencial
            </button>
          </div>
        </div>

        {/* Security badges */}
        <div className="bg-black/20 py-4 flex justify-center gap-6 opacity-30">
          <div className="flex items-center gap-1 text-[8px] text-white font-black uppercase tracking-widest">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.9L10 1.154l7.834 3.746v5.203c0 5.107-3.367 9.716-7.834 11.238-4.467-1.522-7.834-6.131-7.834-11.238V4.9z" clipRule="evenodd"></path></svg>
            Compra Segura
          </div>
          <div className="flex items-center gap-1 text-[8px] text-white font-black uppercase tracking-widest">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Garantido
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
