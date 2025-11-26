import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import UseCases from './components/UseCases';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import About from './components/About';
import Footer from './components/Footer';
import RocketLauncher from './components/RocketLauncher';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <UseCases />
        <WhyUs />
        <Process />
        <About />
      </main>
      <Footer />
      <RocketLauncher />
    </div>
  );
}

export default App;