import React from 'react';
import { Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-block p-4 rounded-full bg-slate-900 border border-white/10 mb-8">
            <Rocket className="w-8 h-8 text-brand-500" />
        </div>
        <h2 className="text-3xl font-bold mb-6">Qui est <span className="text-brand-500">Grow Your Business</span> ?</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Nous sommes une ESN nouvelle génération. Contrairement aux agences classiques, nous ne nous contentons pas de développer du code : nous construisons des systèmes intelligents. Spécialistes de l'IA appliquée, de l'automatisation et des architectures MCP, notre mission est de transformer votre entreprise en une machine de croissance autonome et efficace.
        </p>
      </div>
    </section>
  );
};

export default About;