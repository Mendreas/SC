import React from 'react';
import { Award, Mail, Phone, User } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Helena Paula Marcelino',
      role: 'Contabilista Certificada',
      qualifications: [
        'Licenciada em Gestão de Empresas',
        'Pós Graduada em Fiscalidade',
        'Sócia Gerente'
      ],
      phone: '+351 911 109 216',
      email: 'sublinhaconta@gmail.com'
    },
    {
      name: 'Ana Rita Gamito',
      role: 'Contabilista Certificada',
      qualifications: [
        'Licenciada em Economia',
        'Mestre em Contabilidade, Fiscalidade e Finanças Empresariais'
      ],
      phone: '+351 935 048 262',
      email: 'scontarita@gmail.com'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">A Nossa Equipa</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais qualificados e certificados ao seu serviço
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-brand-red font-semibold">{member.role}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Qualificações:</h4>
                      <ul className="space-y-1">
                        {member.qualifications.map((qual, qualIndex) => (
                          <li key={qualIndex} className="text-gray-600 text-sm">
                            • {qual}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-brand-red" />
                    <a href={`tel:${member.phone}`} className="text-gray-600 hover:text-brand-red transition-colors">
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-brand-red" />
                    <a href={`mailto:${member.email}`} className="text-gray-600 hover:text-brand-red transition-colors">
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;