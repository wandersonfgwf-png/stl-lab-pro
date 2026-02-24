
import React from 'react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  essentialLink: string;
  upgradeLink: string;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose, essentialLink, upgradeLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#0f172a] rounded-2xl sm:rounded-3xl overflow-y-auto max-h-[95vh] sm:max-h-none shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300 border border-slate-800">
        
        {/* Content */}
        <div className="p-6 sm:p-16 text-center">
          <h3 className="text-white text-xl sm:text-3xl font-black mb-8 sm:mb-16 uppercase leading-tight">
            FAÇA UPGRADE PARA O ACESSO COMPLETO
          </h3>

          <div className="mb-8 sm:mb-16">
            <p className="text-slate-500 text-sm sm:text-xl line-through mb-1 sm:mb-2 font-bold">De R$ 37,90</p>
            <div className="flex flex-col items-center">
               <span className="text-white text-xl sm:text-4xl font-black uppercase tracking-tighter">Por apenas</span>
               <span className="text-5xl sm:text-8xl font-black text-emerald-500 tracking-tighter leading-none">R$ 27,90</span>
            </div>
            <div className="mt-4 sm:mt-10 inline-block bg-emerald-500/10 text-emerald-500 px-6 sm:px-10 py-2 sm:py-4 rounded-full text-xs sm:text-lg font-black uppercase tracking-wider border border-emerald-500/20">
              Economia Imediata de R$ 10,00
            </div>
          </div>

          <div className="mb-10 sm:mb-20 flex justify-center">
            <div className="flex items-center gap-4 sm:gap-6 text-white bg-slate-800/50 px-6 sm:px-10 py-4 sm:py-6 rounded-3xl border border-slate-700 shadow-xl">
              <div className="w-6 h-6 sm:w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shrink-0 border border-slate-700">
                <svg className="w-4 h-4 sm:w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <p className="text-sm sm:text-2xl font-black uppercase tracking-tight">Acesso a todos os 9 Conteúdos Adicionais</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-6 sm:space-y-8">
            <a 
              href={upgradeLink}
              className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black py-5 sm:py-8 rounded-2xl sm:rounded-[2rem] text-lg sm:text-3xl shadow-[0_30px_60px_-15px_rgba(16,185,129,0.5)] transition-all transform animate-pulse-button uppercase tracking-tight"
            >
              ACEITAR UPGRADE COM DESCONTO
            </a>
            
            <a 
              href={essentialLink}
              className="block text-gray-400 hover:text-white transition-colors text-xs sm:text-lg font-bold underline underline-offset-4 uppercase tracking-widest"
            >
              Continuar com o Acesso Essencial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
