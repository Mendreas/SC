import React, { useState } from 'react';
import { Menu, X, Calculator, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/image.png" 
              alt="Sublinha Conta Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold">
                <span style={{ color: '#841222' }}>Sublinha</span>{' '}
                <span style={{ color: '#969696' }}>Conta</span>
              </h1>
              <p className="text-sm text-gray-600">Lda.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-red-700 font-medium transition-colors">
              Início
            </a>
            <a href="#quem-somos" className="text-gray-700 hover:text-brand-red font-medium transition-colors">
              Quem Somos
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-brand-red font-medium transition-colors">
              Serviços
            </a>
            <a href="#contactos" className="text-gray-700 hover:text-brand-red font-medium transition-colors">
              Contactos
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+351 911 109 216</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>sublinhaconta@gmail.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-red hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-brand-red font-medium">
                Início
              </a>
              <a href="#quem-somos" className="text-gray-700 hover:text-brand-red font-medium">
                Quem Somos
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-brand-red font-medium">
                Serviços
              </a>
              <a href="#contactos" className="text-gray-700 hover:text-brand-red font-medium">
                Contactos
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+351 911 109 216</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>sublinhaconta@gmail.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;