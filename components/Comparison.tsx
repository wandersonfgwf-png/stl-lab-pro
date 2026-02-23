
import React from 'react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Aumente sua Produtividade</h2>
          <p className="text-gray-600">Não deixe sua impressora parada enquanto você luta com software de CAD.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Modeling from scratch */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-red-500">
              <span className="p-2 bg-red-100 rounded-lg">❌</span> Modelar do Zero
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-red-400 font-bold">•</span>
                <p className="text-gray-600">Horas perdidas tentando ajustar medidas e ângulos.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-400 font-bold">•</span>
                <p className="text-gray-600">Erros técnicos que resultam em desperdício de filamento.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-400 font-bold">•</span>
                <p className="text-gray-600">Curva de aprendizado frustrante em softwares complexos.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-red-400 font-bold">•</span>
                <p className="text-gray-600">Pouca variedade para oferecer a clientes ou amigos.</p>
              </li>
            </ul>
          </div>

          {/* With the Pack */}
          <div className="bg-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-800 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 bg-orange-600 text-[10px] font-bold uppercase tracking-widest -rotate-45 translate-x-12 -translate-y-4 w-40 text-center">Recomendado</div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-orange-400">
              <span className="p-2 bg-orange-900/50 rounded-lg">✅</span> Com o STL Lab Pro
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-orange-400 font-bold">•</span>
                <p className="text-gray-300">Escolha o modelo e comece a imprimir em segundos.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-orange-400 font-bold">•</span>
                <p className="text-gray-300">Arquivos otimizados para gastar menos suporte e filamento.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-orange-400 font-bold">•</span>
                <p className="text-gray-300">Foco total em vender ou aproveitar suas peças prontas.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-orange-400 font-bold">•</span>
                <p className="text-gray-300">Vasta biblioteca que atende a diversos nichos e demandas.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
            <p className="text-gray-500 mb-8 italic">Ideal para makers, artesãos e donos de lojas de impressão 3D.</p>
            <a href="#checkout" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-12 rounded-full text-lg shadow-lg">QUERO ECONOMIZAR TEMPO</a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;