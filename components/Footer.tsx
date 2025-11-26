import React from 'react';
import { ArrowRight, Mail, Linkedin, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkedinUrl = "https://www.linkedin.com/company/growyourbusiness-it";
  const emailContact = "mailto:contact@growyourbusiness.fr";

  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10 pt-24 pb-12 scroll-mt-32">
      <div className="container mx-auto px-6">
        
        {/* Final CTA */}
        <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 text-center mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-700 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Prêt à transformer votre entreprise ?</h2>
            <p className="text-slate-100 text-lg mb-10">
              Ne laissez pas vos concurrents prendre l'avantage avec l'IA. Discutons de vos besoins et construisons votre solution dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href={`${emailContact}?subject=Prise%20de%20rendez-vous`} className="px-8 py-4 bg-white text-brand-600 font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                    Prendre rendez-vous
                    <ArrowRight className="w-5 h-5" />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-brand-700/50 border border-white/20 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors">
                    Nous suivre sur LinkedIn
                </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-1.5 rounded-lg">
                    <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Grow<span className="text-brand-500">Your</span>Business</span>
            </div>
            <p className="text-slate-100 text-sm max-w-sm">
              L'ESN experte en Intelligence Artificielle et Automatisation pour les entreprises ambitieuses.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm text-slate-100">
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-brand-500 transition-colors cursor-pointer">Services</a></li>
              <li><a href="#usecases" onClick={(e) => handleNavClick(e, 'usecases')} className="hover:text-brand-500 transition-colors cursor-pointer">Cas Clients</a></li>
              <li><a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="hover:text-brand-500 transition-colors cursor-pointer">Process</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-brand-500 transition-colors cursor-pointer">À propos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-100">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={emailContact} className="hover:text-brand-500 transition-colors">contact@growyourbusiness.fr</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors">LinkedIn</a>
              </li>
              <li>Arras, France</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Grow Your Business. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;