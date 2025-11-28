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
              <span className="text-xl font-bold text-white">LEX<span className="text-[var(--brand-primary)]">AI</span></span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              Pioneering the future of legal services through the perfect synergy of human expertise and artificial intelligence.
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
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Our Team</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">News & Insights</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Practice Areas</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Corporate Law</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Intellectual Property</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Litigation</a></li>
              <li><a href="#" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors text-sm">Real Estate</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Stay Informed</h4>
            <p className="text-[var(--text-secondary)] text-sm mb-4">Subscribe to our newsletter for the latest legal updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email address" className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-[var(--brand-primary)]" />
              <button className="bg-[var(--brand-primary)] text-black rounded-lg px-4 py-2 font-medium hover:bg-white transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-muted)] text-sm">© 2024 LEXAI Legal Firm. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--text-muted)] hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-[var(--text-muted)] hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
