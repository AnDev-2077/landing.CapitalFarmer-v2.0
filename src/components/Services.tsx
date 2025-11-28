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
      Learn More <span className="text-lg">→</span>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Corporate Law",
      description: "Comprehensive legal solutions for businesses, from mergers and acquisitions to corporate governance and compliance."
    },
    {
      icon: Scale,
      title: "Litigation",
      description: "Strategic representation in complex commercial disputes, ensuring your interests are protected in and out of court."
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      description: "Safeguarding your innovations and creative assets through robust patent, trademark, and copyright protection strategies."
    },
    {
      icon: Globe,
      title: "International Trade",
      description: "Navigating the complexities of cross-border transactions, regulations, and global market expansion."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Proactive guidance to ensure your operations meet evolving legal standards and industry regulations."
    },
    {
      icon: Gavel,
      title: "Employment Law",
      description: "Advising on workplace policies, contracts, and dispute resolution to foster a fair and productive work environment."
    }
  ];

  return (
    <section id="services" className="section-padding relative bg-[var(--bg-secondary)]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg">Our Practice Areas</h2>
          <p className="text-[var(--text-secondary)] text-lg">
            We offer a full spectrum of legal services tailored to the needs of modern enterprises and individuals.
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
