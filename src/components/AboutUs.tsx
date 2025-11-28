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
                    <p className="text-white font-medium italic">"Justice consists not in being neutral between right and wrong, but in finding out the right and upholding it."</p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="heading-lg">Redefining Legal Counsel for the Digital Age</h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            At LEXAI, we believe that the future of law lies at the intersection of human expertise and artificial intelligence. Founded in 2024, we set out to disrupt the traditional law firm model by integrating advanced AI tools into our workflow.
          </p>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            This allows our attorneys to focus on what truly matters: strategic thinking, complex problem-solving, and personal client relationships, while AI handles the heavy lifting of data analysis and document review.
          </p>

          <div className="space-y-4 pt-4">
            {[
              "Data-Driven Legal Strategies",
              "Transparent & Predictable Pricing",
              "Global Reach, Local Expertise",
              "Uncompromising Ethical Standards"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-[var(--brand-primary)]" size={20} />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>

          <button className="btn-secondary mt-6">
            Read Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
