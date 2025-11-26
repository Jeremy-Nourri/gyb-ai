import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const googleLink = "https://share.google/vWqgZZRVM8ROXg9tw";

  const reviews = [
    {
      name: "Thomas D.",
      role: "Directeur Opérationnel",
      date: "il y a 2 semaines",
      content: "L'équipe de Grow Your Business a su identifier nos goulots d'étranglement en un temps record. L'automatisation mise en place nous fait gagner près de 15h par semaine. Bluffant.",
      rating: 5
    },
    {
      name: "Sarah L.",
      role: "Head of Sales",
      date: "il y a 1 mois",
      content: "Nous avions besoin d'un CRM connecté à une IA pour qualifier nos leads. Le résultat dépasse nos attentes. Une expertise technique rare sur le marché.",
      rating: 5
    },
    {
      name: "Marc-Antoine R.",
      role: "Fondateur Startup Tech",
      date: "il y a 3 mois",
      content: "Excellente maîtrise des environnements MCP. Ils ont déployé une architecture sécurisée et scalable pour nos agents IA internes. Je recommande vivement.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ils nous font <span className="text-brand-500">confiance</span>
          </h2>
          
          {/* Google Rating Badge */}
          <motion.a 
            href={googleLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-1">
               {/* Google G Logo simplified */}
               <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
               </svg>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex text-yellow-500 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-slate-500 font-semibold">5.0/5 sur Google Reviews</span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-colors ml-2" />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative group hover:bg-slate-900/60 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand-500/20 group-hover:text-brand-500/40 transition-colors" />
              
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{review.content}"
              </p>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-red-600 flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{review.name}</div>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    {review.role}
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    {review.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href={googleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-white underline decoration-slate-600 hover:decoration-brand-500 transition-all"
          >
            Voir tous les avis sur Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;