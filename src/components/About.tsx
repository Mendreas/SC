import React from 'react';
import { Award, Clock, MapPin, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="quem-somos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quem Somos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Sublinha Conta é uma empresa que sabe que os negócios dos nossos clientes 
            são o nosso negócio. A nossa maior preocupação é com o sucesso dos nossos clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">A Nossa Missão</h3>
            <div className="bg-brand-red text-white p-8 rounded-xl">
              <Target className="w-12 h-12 mb-4" />
              <p className="text-lg leading-relaxed">
                Proporcionar o melhor conjunto de serviços profissionais nas áreas da 
                Contabilidade, Apoio à Gestão de Empresas e Fiscalidade, com a máxima 
                qualidade e em tempo útil, garantindo assim aos seus clientes uma melhor 
                e célere informação para a tomada de decisões.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Qualidade Profissional</h4>
                <p className="text-gray-600">
                  Garantimos que temos os recursos para responder às vossas questões 
                  e aos serviços que desejam.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Serviço Atempado</h4>
                <p className="text-gray-600">
                  Os nossos clientes escolheram a Sublinha Conta porque apreciam a nossa 
                  forma de trabalhar e a qualidade do serviço prestado.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-brand-red" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Localização Estratégica</h4>
                <p className="text-gray-600">
                  Localizados na Rinchoa, Sintra, oferecemos proximidade e acessibilidade 
                  aos nossos clientes da região.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">A Nossa Filosofia</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Tudo isto devido à nossa filosofia de trabalho, que permite manter uma relação 
            franca e aberta sem descurar a qualidade profissional tão acarinhada por quem 
            em nós confia. Sinta-se em casa enquanto explora a nossa página.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;