import React from 'react';
import { Scale, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[rgba(255,255,255,0.1)] pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center">
                <Scale className="text-black" size={20} />
              </div>
              <span className="text-xl font-bold text-white">Capital<span className="text-[var(--brand-primary)]">Farmer</span></span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Capital Farmer es una empresa que se dedica a la asesoría legal integral, la redacción de documentos legales, el patrocinio legal integral y la asesoría contable para personas naturales y jurídicas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Enlaces</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Nosotros</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Equipo</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Carreras</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Noticias & Insights</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Asesoría Legal Integral</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Redacción de Documentos Legales</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Patrocinio Legal Integral</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Asesoría Contable para Personas Naturales y Jurídicas</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Servicios Especializados Contables y Tributarios</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Servicios Administrativos Complementarios</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Suscríbete</h4>
            <p className="text-[var(--text-secondary)] text-sm mb-4">Suscríbete a nuestro newsletter para estar al tanto de las últimas actualizaciones.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-[var(--brand-primary)]" />
              <button className="bg-[var(--brand-primary)] text-black rounded-lg px-4 py-2 font-medium hover:bg-white transition-colors">
                Suscríbete
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-muted)] text-sm">© 2024 Capital Farmer. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--text-muted)] hover:text-white text-sm">Política de Privacidad</a>
            <a href="#" className="text-[var(--text-muted)] hover:text-white text-sm">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
