import React from 'react';
import { MessageSquare, FileText, Users, Zap, TrendingUp, ShieldCheck, Laptop, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const UseCases: React.FC = () => {
  const cases = [
    {
      icon: MessageSquare,
      title: "Support Client",
      tag: "Réactivité",
      desc: "Automatisation des réponses aux questions fréquentes pour un service 24/7.",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: FileText,
      title: "Analyse Docs",
      tag: "Administratif",
      desc: "Extraction intelligente des données de vos contrats et factures.",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      icon: Users,
      title: "Assistants Métiers",
      tag: "Productivité",
      desc: "Copilotes IA pour aider vos équipes dans leurs tâches quotidiennes.",
      gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
      icon: Zap,
      title: "Workflows",
      tag: "Gain de temps",
      desc: "Connexion CRM/ERP/Mails pour exécuter les tâches répétitives.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      tag: "Croissance",
      desc: "Personnalisation des campagnes et qualification automatique des leads.",
      gradient: "from-red-500/20 to-rose-500/20"
    },
    {
      icon: ShieldCheck,
      title: "Sécurité & MCP",
      tag: "Infrastructure",
      desc: "Serveurs sécurisés pour garder la maîtrise totale de vos données.",
      gradient: "from-indigo-500/20 to-violet-500/20"
    },
    {
      icon: Laptop,
      title: "Apps Sur-Mesure",
      tag: "Innovation",
      desc: "Interfaces et outils spécifiques développés pour vos besoins.",
      gradient: "from-fuchsia-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="usecases" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-32">
      {/* Soft Background Globs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-brand-500"></span>
            <span className="text-brand-500 font-bold uppercase tracking-widest text-xs">Exemples Concrets</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Comment l'IA transforme <br/>
            <span className="text-slate-200">votre quotidien</span>
          </motion.h2>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full"
            >
              <div className="h-full p-6 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col overflow-hidden relative shadow-lg hover:shadow-2xl hover:shadow-brand-900/10">
                
                {/* Subtle Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-white/5 group-hover:bg-white/10 transition-colors duration-300 shadow-inner">
                        <item.icon className="w-6 h-6 text-brand-500 group-hover:text-white transition-colors" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-[10px] uppercase font-bold text-white tracking-wide shadow-md">
                        {item.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-brand-100 transition-colors flex items-center gap-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-100 text-sm leading-relaxed group-hover:text-white transition-colors flex-grow">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Contact Card */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: cases.length * 0.05 }}
             whileHover={{ scale: 1.02 }}
             className="h-full min-h-[240px] rounded-2xl border-2 border-dashed border-slate-800 hover:border-brand-500/50 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group p-6"
             onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
             }}
          >
             <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-500 group-hover:shadow-lg group-hover:shadow-brand-500/40 transition-all duration-300">
                <ArrowUpRight className="w-8 h-8 text-brand-500 group-hover:text-white transition-colors" />
             </div>
             <h3 className="text-lg font-bold text-white mb-2">Un projet spécifique ?</h3>
             <p className="text-sm text-slate-100 group-hover:text-white transition-colors">Développons votre solution sur-mesure.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;