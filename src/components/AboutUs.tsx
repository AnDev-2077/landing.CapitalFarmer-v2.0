import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-gradient-to-l from-[rgba(0,255,209,0.05)] to-transparent pointer-events-none"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="glass-panel p-2 rounded-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
             {/* Placeholder for a high-quality office image */}
             <div className="bg-gray-800 rounded-xl h-[500px] w-full flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Law Office" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass-panel p-6 rounded-xl border border-[rgba(255,255,255,0.1)]">
                    <p className="text-white font-medium italic">"La justicia no consiste en ser neutral entre lo correcto y lo incorrecto, sino en encontrar lo correcto y defenderlo."</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="heading-lg">Redfiniendo la asesoria legal para la Era Digital</h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            En Capital&Farmer, creemos que el futuro de la legalidad se encuentra en la intersección de la experiencia humana y la inteligencia artificial. Fundada en 2024, nos propusimos desafiar el modelo tradicional de la firma legal integrando herramientas avanzadas de IA en nuestro flujo de trabajo.
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Esto nos permite enfocarnos en lo que verdaderamente importa: la pensamiento estratégico, la resolución de problemas complejos y las relaciones con los clientes, mientras que la IA maneja el análisis de datos y la revisión de documentos.
          </p>

          <div className="space-y-4 pt-4">
            {[
              "Enfoque estratégico",
              "Precios transparentes y predecibles",
              "Experto local",
              "Estándares éticos incomprometidos"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-[var(--brand-primary)]" size={20} />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>

          <button className="btn-secondary mt-6">
            Nuestra Historia
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
