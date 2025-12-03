import React, { Suspense } from 'react';
import { ChatInterface } from '../components/ChatbotCard';
import { ArrowRight, ShieldCheck, Users, Scale } from 'lucide-react';

// Lazy load Spline to avoid blocking initial render
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--brand-primary)] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)] animate-pulse"></span>
            <span className="text-xs font-medium tracking-wider uppercase text-[var(--text-secondary)]">IA-Powered</span>
          </div>
          
          <h1 className="heading-xl">
            Navegando la <br />
            Complejidad con <br />
            <span className="text-[var(--brand-primary)]">Claridad</span>
          </h1>
          
          <p className="text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed">
            Asesoramiento legal confiable para un mundo dinámico. Combinamos la excelencia legal con la tecnología de IA para entregar resultados más rápidos y más inteligentes.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">
              Explorar Servicios <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              Consulta Gratuita
            </button>
          </div>

          <div className="pt-8 flex items-center gap-8 border-t border-[rgba(255,255,255,0.1)]">
            <div className="flex flex-col gap-1">
              <ShieldCheck className="text-[var(--brand-primary)] mb-2" size={24} />
              <span className="text-2xl font-bold text-white">98%</span>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Tasa de éxito</span>
            </div>
            <div className="flex flex-col gap-1">
              <Users className="text-[var(--brand-primary)] mb-2" size={24} />
              <span className="text-2xl font-bold text-white">500+</span>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Clientes atendidos</span>
            </div>
            <div className="flex flex-col gap-1">
              <Scale className="text-[var(--brand-primary)] mb-2" size={24} />
              <span className="text-2xl font-bold text-white">24/7</span>
              <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Soporte AI</span>
            </div>
          </div>
        </div>

        {/* Right Content - Spline + Chatbot */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
          {/* Spline Background */}
          <div className="absolute inset-0 z-0">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-[var(--text-muted)]">Cargando escena 3D...</div>}>
               <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </Suspense>
          </div>
          
          {/* Floating Chatbot Card */}
          <div className="relative z-10 w-full max-w-md transform hover:scale-[1.02] transition-transform duration-500">
            <ChatInterface />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
