import React, { useState } from 'react';
import { Calculator, FileText, TrendingUp, Users, ChevronRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState('contabilidade');

  const services = {
    contabilidade: {
      title: 'Contabilidade',
      icon: Calculator,
      description: 'Serviços completos de contabilidade para empresas de todos os tamanhos',
      details: [
        'Classificação e Preenchimento das declarações fiscais',
        'Balancetes',
        'Balanços',
        'Demonstrações dos resultados',
        'Demonstrações financeiras'
      ]
    },
    iva: {
      title: 'IVA',
      icon: FileText,
      description: 'Gestão completa do IVA da sua empresa',
      details: [
        'Declarações periódicas de IVA',
        'Regularizações de IVA',
        'Pedidos de reembolso',
        'Consultoria em IVA',
        'Auditoria fiscal'
      ]
    },
    irs: {
      title: 'IRS',
      icon: Users,
      description: 'Apoio completo na declaração de IRS',
      details: [
        'Declaração anual de IRS',
        'Otimização fiscal',
        'Simulações fiscais',
        'Apoio em inspeções',
        'Consultoria personalizada'
      ]
    },
    irc: {
      title: 'IRC',
      icon: TrendingUp,
      description: 'Gestão do Imposto sobre o Rendimento das Pessoas Coletivas',
      details: [
        'Declaração anual de IRC',
        'Pagamentos por conta',
        'Derrama estadual e municipal',
        'Benefícios fiscais',
        'Planeamento fiscal'
      ]
    },
    salarios: {
      title: 'Processamento de Salários',
      icon: Users,
      description: 'Gestão completa de recursos humanos e processamento salarial',
      details: [
        'Processamento mensal de salários',
        'Declarações à Segurança Social',
        'Mapas de férias e subsídios',
        'Contratos de trabalho',
        'Gestão de faltas e horas extra'
      ]
    },
    consultoria: {
      title: 'Consultoria Fiscal',
      icon: CheckCircle,
      description: 'Consultoria especializada em questões fiscais e empresariais',
      details: [
        'Planeamento fiscal',
        'Reestruturações empresariais',
        'Fusões e aquisições',
        'Compliance fiscal',
        'Representação em processos fiscais'
      ]
    }
  };

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Os Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços contabilísticos e fiscais 
            adaptados às necessidades da sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Áreas de Serviço</h3>
              <nav className="space-y-2">
                {Object.entries(services).map(([key, service]) => {
                  const IconComponent = service.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveService(key)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                        activeService === key
                          ? 'bg-brand-red text-white'
                          : 'text-gray-700 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{service.title}</span>
                      <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                        activeService === key ? 'rotate-90' : ''
                      }`} />
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              {(() => {
                const service = services[activeService];
                const IconComponent = service.icon;
                return (
                  <>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-brand-red" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Serviços Incluídos:</h4>
                      <ul className="space-y-3">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <a
                        href="#contactos"
                        className="inline-flex items-center space-x-2 bg-brand-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors"
                      >
                        <span>Solicitar Orçamento</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;