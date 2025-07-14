import React from 'react';
import { Calculator, MapPin, Phone, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/SC_1-removebg-preview__1_-removebg-preview.png" 
                alt="Sublinha Conta Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Sublinha Conta</h3>
                <p className="text-gray-400 text-sm">Lda.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Contabilidade, Gestão de Empresas e Consultoria Fiscal
            </p>
            <p className="text-gray-400 text-sm">
              Empresa especializada em soluções contabilísticas e fiscais, 
              com foco no sucesso dos nossos clientes.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#servicos" className="hover:text-white transition-colors">Contabilidade</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">IVA</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">IRS</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">IRC</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Processamento de Salários</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Consultoria Fiscal</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-red" />
                <span className="text-gray-400">
                  Calçada da Rinchoa 29, Loja 1.5<br />
                  2635-311 Rio de Mouro
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-red" />
                <a href="tel:+351911109216" className="text-gray-400 hover:text-white transition-colors">
                  +351 911 109 216
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-red" />
                <a href="mailto:sublinhaconta@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  sublinhaconta@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="w-5 h-5 text-brand-red" />
                <a href="https://facebook.com/sublinhaconta" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2024 Sublinha Conta Lda. Todos os direitos reservados.</p>
              <p className="mt-1">NIPC: 508 072 417 | Capital Social: 5000€</p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;