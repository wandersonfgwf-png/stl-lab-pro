
import React from 'react';

const CategoryItem: React.FC<{ title: string; img: string }> = ({ title, img }) => (
  <div className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer">
    <img 
      src={img} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
      loading="lazy"
      width="400"
      height="533"
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
    <div className="absolute bottom-6 left-6 right-6">
      <h3 className="text-white text-xl font-bold tracking-tight">{title}</h3>
      <div className="w-8 h-1 bg-orange-500 mt-2 transition-all duration-300 group-hover:w-full"></div>
    </div>
  </div>
);

const Categories: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">Explore nossa Biblioteca Elite</h2>
            <p className="text-gray-500 text-lg">Milhares de arquivos organizados por nichos de alta lucratividade.</p>
          </div>
          <a href="#checkout" className="text-orange-600 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
            Ver catálogo completo <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <CategoryItem title="Action Figures" img="https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=60&w=400&auto=format&fit=crop" />
          <CategoryItem title="Decoração Luxo" img="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=60&w=400&auto=format&fit=crop" />
          <CategoryItem title="Cultura Pop" img="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=60&w=400&auto=format&fit=crop" />
          <CategoryItem title="Suportes & Tech" img="https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=60&w=400&auto=format&fit=crop" />
        </div>
      </div>
    </section>
  );
};

export default Categories;
