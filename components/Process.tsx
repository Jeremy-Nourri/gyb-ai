import React from 'react';
import { motion, Variants } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    { num: "01", title: "Audit & Diagnostic", desc: "Analyse de vos processus et identification des opportunités d'automatisation." },
    { num: "02", title: "Prototype & Validation", desc: "Création rapide d'un POC (Proof of Concept) pour valider la valeur ajoutée." },
    { num: "03", title: "Développement", desc: "Intégration robuste de la solution (IA, MCP, Automation) dans votre écosystème." },
    { num: "04", title: "Suivi & Optimisation", desc: "Accompagnement continu pour affiner les modèles et maximiser le ROI." }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, originX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1, 
      originX: 0,
      transition: { duration: 1.5, ease: "easeInOut" } 
    }
  };

  return (
    <section id="process" className="py-24 bg-slate-900 border-y border-white/5 overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Notre Méthodologie
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-100"
          >
            Un processus clair en 4 étapes pour garantir le succès de votre transformation.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-8 relative"
        >
          {/* Connecting Line (Desktop) */}
          <motion.div 
            variants={lineVariants}
            className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500/0 via-brand-500/50 to-brand-500/0 w-full z-0"
          />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-700 flex items-center justify-center mb-6 group-hover:border-brand-500 group-hover:scale-110 transition-all duration-300 shadow-xl relative">
                <span className="text-3xl font-extrabold text-white group-hover:text-brand-500 transition-colors">{step.num}</span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">{step.title}</h3>
              <p className="text-slate-100 text-sm px-4 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;