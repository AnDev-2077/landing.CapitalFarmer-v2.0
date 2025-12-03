import React from 'react';
import { Briefcase, Scale, FileText, Gavel, Shield, Globe } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="glass-panel p-8 rounded-2xl hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 group cursor-pointer border border-[rgba(255,255,255,0.05)] hover:border-[var(--brand-primary)]">
    <div className="w-14 h-14 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6 group-hover:bg-[var(--brand-primary)] transition-colors duration-300">
      <Icon size={28} className="text-[var(--brand-primary)] group-hover:text-black transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
    <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{description}</p>
    <div className="mt-6 flex items-center gap-2 text-[var(--brand-primary)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
      Explorar más <span className="text-lg">→</span>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Asesoría Legal Integral",
      description: "Soluciones legales integrales para empresas, desde fusiones y adquisiciones hasta gobierno corporativo y cumplimiento."
    },
    {
      icon: Scale,
      title: "Redacción de Documentos Legales",
      description: "Representación estratégica en litigios comerciales complejos, asegurando que tus intereses estén protegidos en y fuera de la corte."
    },
    {
      icon: FileText,
      title: "Patrocinio Legal Integral",
      description: "Protección de innovaciones y activos creativos a través de estrategias robustas de patentes, marcas registradas y protección de derechos de autor."
    },
    {
      icon: Globe,
      title: "Asesoría Contable para Personas Naturales y Jurídicas",
      description: "Navegando las complejidades de transacciones transfronterizas, regulaciones y expansión del mercado global."
    },
    {
      icon: Shield,
      title: "Servicios Especializados Contables y Tributarios",
      description: "Asesoramiento proactivo para garantizar que tus operaciones cumplen con los estándares legales y regulaciones del sector."
    },
    {
      icon: Gavel,
      title: "Servicios Administrativos Complementarios",
      description: "Asesoramiento sobre políticas laborales, contratos y resolución de conflictos para fomentar un ambiente laboral justo y productivo."
    }
  ];

  return (
    <section id="services" className="section-padding relative bg-[var(--bg-secondary)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg">Nuestros Servicios</h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Ofrecemos un espectro completo de servicios legales adaptados a las necesidades de las empresas y individuos modernos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
