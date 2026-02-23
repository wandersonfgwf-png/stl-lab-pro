
import React from 'react';

const TestimonialCard: React.FC<{ name: string; role: string; content: string }> = ({ name, role, content }) => (
  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 italic">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-700 mb-6 leading-relaxed">"{content}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-400 text-xs">
        {name[0]}
      </div>
      <div>
        <p className="text-sm font-bold text-gray-900 not-italic">{name}</p>
        <p className="text-xs text-gray-500 not-italic">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Quem já baixou aprova</h2>
          <p className="text-gray-600">Junte-se a centenas de makers que elevaram o nível de suas impressões.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            name="Ricardo Oliveira"
            role="Dono de Loja 3D"
            content="O pack me salvou. Consegui diversificar o catálogo da minha loja sem precisar contratar um modelador. O retorno sobre o investimento veio na primeira semana."
          />
          <TestimonialCard 
            name="Mariana Santos"
            role="Hobbyista"
            content="Os modelos são perfeitos. Já tentei baixar muita coisa gratuita que dava erro na metade da impressão, mas esses aqui rodam liso!"
          />
          <TestimonialCard 
            name="Felipe Mendes"
            role="Maker e Designer"
            content="Uso o pack como base para minhas criações. Economizo horas de modelagem básica e foco só nos detalhes finais. Recomendo muito para quem quer agilidade."
          />
          <TestimonialCard 
            name="João Paulo"
            role="Iniciante"
            content="Acabei de comprar minha Ender 3 e estava perdido sobre o que imprimir. O pack é muito organizado e fácil de usar. Vale cada centavo."
          />
          <TestimonialCard 
            name="Carla Braga"
            role="Artesã"
            content="Fiquei surpresa com a qualidade dos arquivos. Até os suportes são fáceis de tirar porque as peças são pensadas para impressão."
          />
          <TestimonialCard 
            name="Lucas Ferrari"
            role="Estudante de Engenharia"
            content="Suporte excelente e arquivos de altíssima fidelidade. Comprei principalmente pelos modelos técnicos e me surpreendi com a variedade."
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
