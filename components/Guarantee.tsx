
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="relative shrink-0">
             <div className="w-40 h-40 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-24 h-24 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
             </div>
             <div className="absolute -bottom-2 -right-2 bg-gray-900 text-white p-3 rounded-2xl shadow-lg border-4 border-white text-center min-w-[100px]">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400">14 Dias de</span>
                <span className="block text-sm font-black">GARANTIA</span>
             </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-6">Risco Zero para você.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Eu confio tanto na qualidade deste Pack que ofereço uma garantia incondicional de 14 dias. Se você abrir os arquivos e achar que não são para você, basta um e-mail para receber seu dinheiro de volta. Sem perguntas, sem burocracia.
            </p>
            <p className="font-bold text-gray-900 italic">Sua satisfação total ou seu investimento de volta.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
