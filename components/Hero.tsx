import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[128px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[128px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Expertise IA & Automatisation</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
            Accélérez votre croissance grâce à <br />
            <span className="gradient-text">l'IA & l'Automatisation</span>
          </h1>
          
          <p className="text-lg text-slate-100 mb-8 max-w-xl leading-relaxed">
            Nous intégrons l’intelligence artificielle au cœur de votre entreprise pour optimiser vos opérations, réduire vos coûts et décupler votre productivité.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl gradient-bg text-white font-bold text-lg shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Discutons de votre projet
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#audit"
              className="px-8 py-4 rounded-xl bg-slate-800/50 border border-white/10 text-white font-semibold hover:bg-slate-800 transition-all flex items-center justify-center"
            >
              Obtenir un audit gratuit
            </a>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-2">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              alt="Dashboard IA" 
              className="rounded-xl opacity-80"
            />
            
            {/* Floating Elements */}
            <div className="absolute top-8 -left-8 glass-card p-4 rounded-xl flex items-center gap-3 animate-bounce-slow shadow-xl">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-500 font-bold text-xs">+340%</span>
              </div>
              <div>
                <div className="text-xs text-slate-300">ROI Mensuel</div>
                <div className="font-bold text-white">Optimisé</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl flex items-center gap-3 animate-pulse shadow-xl border-l-4 border-l-brand-500">
              <div>
                <div className="text-xs text-slate-300">Statut Système</div>
                <div className="font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  IA Active
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;