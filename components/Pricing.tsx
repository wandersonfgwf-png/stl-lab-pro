
import React, { useState } from 'react';
import Countdown from './Countdown';
import UpgradeModal from './UpgradeModal';

const Pricing: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const essentialLink = "https://pay.hotmart.com/link-essencial";
  const proLink = "https://pay.hotmart.com/link-completo";
  const upgradeSpecialLink = "https://pay.hotmart.com/upgrade-especial-27-90";

  const handleEssentialClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleContinueEssential = () => {
    window.location.href = essentialLink;
  };

  return (
    <section id="checkout" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Escolha o seu <span className="text-emerald-600">Nível de Acesso.</span></h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium">Preços exclusivos por tempo limitado.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Plan 1: Acesso Essencial */}
          <div className="bg-[#0f172a] rounded-[2.5rem] border border-slate-800 p-8 md:p-12 text-center text-white relative flex flex-col h-full shadow-2xl overflow-hidden">
            <h3 className="text-2xl font-bold mb-8">Acesso Essencial</h3>
            
            <div className="space-y-4 text-left mb-10 flex-grow">
              <div className="flex items-center gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-gray-300 text-sm">Biblioteca com 1.000 arquivos STL</span>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <span className="text-red-500 font-bold">✗</span>
                <span className="text-gray-400 text-sm">Licença de uso permanente</span>
              </div>
              <div className="flex items-center gap-3 opacity-50">
                <span className="text-red-500 font-bold">✗</span>
                <span className="text-gray-400 text-sm">Atualizações Mensais</span>
              </div>
            </div>

            <div className="mb-10">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Valor original: R$ 189,90</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-6xl font-black">9,90</span>
              </div>
            </div>

            <button 
              onClick={handleEssentialClick}
              className="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-5 rounded-2xl transition-all uppercase tracking-tight text-lg"
            >
              SELECIONAR ESSENCIAL
            </button>

            <div className="mt-6 flex justify-center gap-4 opacity-40">
              <div className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"></path></svg>
                Seguro
              </div>
            </div>
          </div>

          {/* Plan 2: Acesso Completo (PRO) */}
          <div className="bg-[#0f172a] rounded-[2.5rem] border-2 border-emerald-500/30 p-8 md:p-12 text-center text-white relative flex flex-col h-full shadow-[0_0_60px_-15px_rgba(16,185,129,0.2)] transform md:scale-105 z-10 overflow-hidden">
            {/* Diagonal Ribbon */}
            <div className="absolute top-0 right-0 overflow-hidden w-32 h-32">
              <div className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest py-1 w-[170px] text-center absolute top-6 -right-10 rotate-45 shadow-lg">
                Recomendado
              </div>
            </div>

            <h3 className="text-2xl font-black mb-4 text-emerald-400">Acesso Completo</h3>
            
            <div className="flex flex-col items-center mb-6">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">4.98/5 — 6.521 avaliações</p>
            </div>
            
            <div className="space-y-3 text-left mb-10 flex-grow">
              <div className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span className="text-gray-300 text-sm font-medium">Biblioteca com <span className="text-white font-bold">mais de 100 mil arquivos STL</span></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-500 font-bold">✓</span>
                <span className="text-gray-300 text-sm">Licença de uso permanente</span>
              </div>
              {[
                "Universo Marvel - Edição Completa",
                "Coleção Automotiva 3D Premium",
                "Biblioteca de Chaveiros Premium",
                "Soluções Funcionais Residenciais",
                "Coleção Articulada Interactive",
                "Personagens Clássicos da TV",
                "Organizadores estilosos",
                "Vasos decorativos",
                "ESPECIAL: Edição Temática de Ano Novo"
              ].map((bonus, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span className="text-gray-300 text-[11px] leading-tight"><span className="font-bold text-gray-100">Adicional {idx + 1}:</span> {bonus}</span>
                </div>
              ))}
            </div>

            <div className="mb-10">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Valor original: R$ 489,90</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-2xl font-bold text-emerald-400">R$</span>
                <span className="text-7xl font-black">37,90</span>
              </div>
              <div className="mt-4">
                <Countdown />
              </div>
            </div>

            <a 
              href={proLink}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-6 rounded-2xl shadow-[0_20px_60px_-15px_rgba(34,197,94,0.6)] transition-all transform animate-pulse-button text-xl uppercase tracking-tight"
            >
              LIBERAR MEU ACESSO
            </a>

            <div className="mt-6 flex flex-wrap justify-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <UpgradeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onContinue={handleContinueEssential}
        upgradeLink={upgradeSpecialLink}
      />
    </section>
  );
};

export default Pricing;
