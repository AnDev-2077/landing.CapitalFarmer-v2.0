import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto">
        <div className="glass-panel rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.1)]">
          <div className="grid lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-10 md:p-16 bg-[rgba(0,0,0,0.4)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--brand-primary)] to-transparent"></div>
              
              <h2 className="heading-lg mb-8">Get in Touch</h2>
              <p className="text-[var(--text-secondary)] mb-12 text-lg">
                Ready to discuss your legal needs? Our team is here to provide the clarity and guidance you deserve.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0 text-[var(--brand-primary)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                    <p className="text-[var(--text-secondary)]">100 Legal Plaza, Suite 400<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0 text-[var(--brand-primary)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <p className="text-[var(--text-secondary)]">contact@lexai.firm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0 text-[var(--brand-primary)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <p className="text-[var(--text-secondary)]">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10 md:p-16">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-secondary)]">First Name</label>
                    <input type="text" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:border-[var(--brand-primary)] focus:outline-none transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--text-secondary)]">Last Name</label>
                    <input type="text" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:border-[var(--brand-primary)] focus:outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Email Address</label>
                  <input type="email" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:border-[var(--brand-primary)] focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Practice Area</label>
                  <select className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:border-[var(--brand-primary)] focus:outline-none transition-colors">
                    <option className="bg-black">Corporate Law</option>
                    <option className="bg-black">Litigation</option>
                    <option className="bg-black">Intellectual Property</option>
                    <option className="bg-black">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Message</label>
                  <textarea rows="4" className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:border-[var(--brand-primary)] focus:outline-none transition-colors" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="btn-primary w-full justify-center">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
