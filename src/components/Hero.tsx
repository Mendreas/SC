import React from 'react';
import { Calculator, TrendingUp, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-brand-red via-brand-red to-red-900 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Sublinha Conta
              <span className="block text-3xl lg:text-4xl font-normal text-red-200 mt-2">
                Lda.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-red-100 leading-relaxed">
              Contabilidade, Gestão de Empresas e Consultoria Fiscal
            </p>
            <p className="text-lg mb-10 text-red-100 opacity-90 leading-relaxed">
              Somos uma empresa especializada em soluções contabilísticas e fiscais, 
              localizada na Rinchoa, Sintra. Oferecemos serviços profissionais de 
              qualidade com foco no sucesso dos nossos clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#servicos"
                className="bg-white text-brand-red px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors text-center"
              >
                Conheça os Nossos Serviços
              </a>
              <a
                href="#contactos"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-red transition-colors text-center"
              >
                Entre em Contacto
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Calculator className="w-12 h-12 mb-4 text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Contabilidade</h3>
              <p className="text-red-100 text-sm">Gestão completa da contabilidade da sua empresa</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <TrendingUp className="w-12 h-12 mb-4 text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Gestão Empresarial</h3>
              <p className="text-red-100 text-sm">Apoio na gestão e crescimento do seu negócio</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Shield className="w-12 h-12 mb-4 text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Consultoria Fiscal</h3>
              <p className="text-red-100 text-sm">Orientação especializada em questões fiscais</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <Users className="w-12 h-12 mb-4 text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Apoio Personalizado</h3>
              <p className="text-red-100 text-sm">Atendimento dedicado às suas necessidades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;