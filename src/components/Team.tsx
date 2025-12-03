import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const TeamMember = ({ name, role, image }) => (
  <div className="group relative overflow-hidden rounded-2xl">
    <div className="aspect-[3/4] w-full bg-gray-800 relative overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-[var(--brand-primary)] font-medium text-sm mb-4">{role}</p>
        
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          <button className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[var(--brand-primary)] hover:text-black transition-colors">
            <Linkedin size={16} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.1)] flex items-center justify-center hover:bg-[var(--brand-primary)] hover:text-black transition-colors">
            <Mail size={16} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Team = () => {
  const team = [
    {
      name: "Sarah Jenkins",
      role: "Managing Partner",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "David Chen",
      role: "Head of Corporate Law",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Elena Rodriguez",
      role: "Senior Litigator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Marcus Thorne",
      role: "IP Specialist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="team" className="section-padding bg-[var(--bg-secondary)]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="heading-lg">Equipo</h2>
            <p className="text-[var(--text-secondary)] text-lg">
              Un equipo diverso de abogados dedicados a tu éxito.
            </p>
          </div>
          <button className="btn-secondary">Ver todos los abogados</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
