
import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-10 bg-white rounded-3xl border border-gray-100 hover:border-orange-200 transition-all duration-300 group hover:shadow-2xl hover:shadow-orange-100">
    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all transform group-hover:rotate-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900 tracking-tight">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-medium">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">O que torna este pack <span className="text-orange-500">superior?</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Não entregamos apenas arquivos. Entregamos uma infraestrutura de produção pronta para escalar seu negócio maker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <FeatureCard 
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z"></path></svg>}
            title="Curadoria Elite"
            desc="Selecionamos apenas os modelos mais rentáveis do mercado. Nada de 'enchimento' ou arquivos inúteis."
          />
          <FeatureCard 
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>}
            title="Geometria Perfeita"
            desc="Malhas fechadas, sem buracos e testadas fisicamente. Esqueça falhas na metade da impressão."
          />
          <FeatureCard 
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
            title="Economia de Suporte"
            desc="Nossos modelos são esculpidos para exigir o mínimo de suportes possível, economizando material e tempo."
          />
          <FeatureCard 
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>}
            title="Categorias HDR"
            desc="Organização impecável por pastas. Encontre o modelo ideal para seu cliente em menos de 10 segundos."
          />
          <FeatureCard 
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>}
            title="Alertas de Upgrades"
            desc="Sempre que o mercado trendar com algo novo (ex: novo filme), nós adicionamos os modelos no pack."
          />
          <FeatureCard 
            icon={<svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>}
            title="Lucratividade"
            desc="Modelos pensados para venda. Peças que possuem alto valor percebido e baixo custo de produção."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
