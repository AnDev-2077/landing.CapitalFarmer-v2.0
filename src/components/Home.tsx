import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import AboutUs from './AboutUs';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-white selection:bg-[var(--brand-primary)] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
