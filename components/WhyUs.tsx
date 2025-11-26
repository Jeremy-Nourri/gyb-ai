import React from 'react';
import { CheckCircle2, Shield, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: "Expertise Pointue",
      desc: "Maîtrise complète des environnements MCP et des derniers modèles LLM."
    },
    {
      icon: Zap,
      title: "Approche ROI",
      desc: "Nous ne développons que ce qui apporte une valeur mesurable et rapide."
    },
    {
      icon: CheckCircle2,
      title: "100% Sur-Mesure",
      desc: "Aucune solution générique. Tout est adapté à vos contraintes métiers."
    },
    {
      icon: Shield,
      title: "Sécurité & Scale",
      desc: "Architectures robustes conçues pour grandir avec votre entreprise."
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-8 text-white"
            >
              Pourquoi choisir <br />
              <span className="text-brand-500">Grow Your Business ?</span>
            </motion.h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Technologie de pointe, pragmatisme business et sécurité maximale. 
            </p>
        </div>
            
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 p-8 rounded-2xl bg-slate-900 border border-white/5 overflow-hidden transition-all duration-300 hover:border-brand-500/30"
            >
                {/* Spotlight Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(234,88,12,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative shrink-0 w-16 h-16 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-110 group-hover:border-brand-500/50 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-slate-300 group-hover:text-brand-500 transition-colors duration-300" />
                    {/* Icon Glow */}
                    <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {benefit.desc}
                    </p>
                </div>
            </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;