import React from 'react';
import { Bot, Workflow, Server, Code, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: "Intégration IA",
      desc: "Assistants personnalisés & chatbots intelligents.",
      features: ["Assistants sur-mesure", "Connexion CRM/ERP", "Analyse de documents"]
    },
    {
      icon: Workflow,
      title: "Automatisations",
      desc: "Workflows robustes pour vos processus internes.",
      features: ["Workflows complexes", "Pipelines de données", "Auto-Marketing"]
    },
    {
      icon: Server,
      title: "Architecture MCP",
      desc: "Serveurs Model Context Protocol sécurisés.",
      features: ["Serveurs dédiés", "Connecteurs internes", "Sécurité des données"]
    },
    {
      icon: Code,
      title: "Dev Sur-Mesure",
      desc: "Outils métiers intégrant l'IA nativement.",
      features: ["Apps Métier", "Connecteurs API", "Dashboards IA"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-32">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-slate-900 border border-slate-800 text-brand-500 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            Architecture & Technique
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-slate-100 leading-relaxed">
            Une infrastructure robuste pour propulser votre croissance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-brand-900/20 hover:border-brand-500/30 transition-all duration-300"
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />

              {/* Scan Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />

              <div className="p-8 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500/10 group-hover:border-brand-500/20 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-slate-100 group-hover:text-brand-500 transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 mb-3">{service.title}</h3>
                <p className="text-slate-100 text-sm mb-6 leading-relaxed min-h-[40px]">
                  {service.desc}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-slate-100 group-hover:text-white transition-colors"
                    >
                      <div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                        <Check className="w-2.5 h-2.5 text-slate-300 group-hover:text-white" />
                      </div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;