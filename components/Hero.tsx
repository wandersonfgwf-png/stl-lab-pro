
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20 md:pt-24 md:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] md:text-xs font-bold tracking-[0.2em] text-orange-600 uppercase bg-orange-50 rounded-full border border-orange-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              O Segredo dos Grandes Makers
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold leading-[1.05] text-gray-900 mb-8 tracking-tighter uppercase">
              A BIBLIOTECA DEFINITIVA PARA SUA <span className="text-orange-500">IMPRESSORA 3D.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
              Tenha acesso imediato a um pack completo de modelos 3D organizados, testados e prontos para usar na sua impressora.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#checkout" 
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-black py-6 px-12 rounded-2xl text-xl transition-all transform animate-pulse-button shadow-[0_20px_50px_-15px_rgba(34,197,94,0.4)] text-center uppercase"
              >
                LIBERAR MEU ACESSO
              </a>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path></svg>
                <span>Download Instantâneo</span>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-center md:justify-start gap-3">
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=stl${i}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="user" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">1.400+ Alunos satisfeitos</p>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest leading-none">Acesso vitalício liberado</p>
              </div>
            </div>
          </div>

          {/* Product Mockup Inspired by EliteSTL */}
          <div className="flex-1 relative w-full max-w-lg mx-auto md:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/5 rounded-[3rem] blur-2xl"></div>
              <div className="relative bg-white rounded-[2.5rem] p-3 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?q=75&w=600&auto=format&fit=crop" 
                  alt="STL Lab Pro Preview" 
                  className="rounded-[2rem] object-cover w-full aspect-[4/5] shadow-inner"
                  width="600"
                  height="750"
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  decoding="async"
                />
                
                {/* Float Elements */}
                <div className="absolute top-1/2 -left-10 bg-white p-4 rounded-2xl shadow-2xl border border-gray-50 flex items-center gap-3 animate-pulse">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div className="text-left pr-2">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Velocidade</p>
                    <p className="text-sm font-bold">Otimizado</p>
                  </div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-gray-900 text-white p-5 rounded-3xl shadow-2xl border-4 border-white max-w-[180px]">
                  <p className="text-[10px] text-orange-400 uppercase font-bold tracking-widest mb-1">Qualidade Pro</p>
                  <p className="text-xs font-medium text-gray-300">Arquivos esculpidos por especialistas da indústria.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;