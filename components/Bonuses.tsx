
import React from 'react';

const BonusCard: React.FC<{ title: string; desc: string; val: string }> = ({ title, desc, val }) => (
  <div className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center gap-8 shadow-sm">
    <div className="flex-1">
      <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-md mb-4 uppercase tracking-tighter">Bônus Exclusivo</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-0">{desc}</p>
    </div>
    <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
      <p className="text-gray-400 text-sm mb-1">Valor real:</p>
      <p className="text-2xl font-bold text-gray-300 line-through">R$ {val}</p>
      <p className="text-lg font-bold text-orange-600">GRÁTIS</p>
    </div>
  </div>
);

const Bonuses: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Presentes Exclusivos para Você</h2>
          <p className="text-gray-600">Ao garantir o pack hoje, você leva esses bônus estratégicos sem pagar nada a mais.</p>
        </div>

        <div className="space-y-6">
          <BonusCard 
            title="Guia de Configuração Perfeita"
            desc="Um PDF prático com os melhores parâmetros de Cura e PrusaSlicer para os modelos deste pack."
            val="47,00"
          />
          <BonusCard 
            title="Checklist de Pós-Processamento"
            desc="Dicas de lixamento, pintura e acabamento para transformar peças de plástico em obras de arte."
            val="37,00"
          />
          <BonusCard 
            title="Pasta de Modelos Surpresa"
            desc="Uma coleção sazonal com modelos que não estão listados no pack principal."
            val="27,00"
          />
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
