
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">STL Lab Pro</h3>
            <p className="text-sm text-gray-500">Modelos Premium para Impressão 3D</p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-sm text-gray-600 hover:text-black font-medium transition-colors">Termos de Uso</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black font-medium transition-colors">Políticas de Privacidade</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black font-medium transition-colors">Suporte</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black font-medium transition-colors">Contato</a>
          </nav>
        </div>

        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
          <p>© {year} STL Lab Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;