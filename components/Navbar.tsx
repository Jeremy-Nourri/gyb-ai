import React, { useState, useEffect } from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Cas Clients', id: 'usecases' },
    { name: 'Process', id: 'process' },
    { name: 'À propos', id: 'about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // scrollIntoView with smooth behavior will respect scroll-margin-top CSS
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants for the mobile menu container
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  // Animation variants for individual menu items
  const itemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
          className="flex items-center gap-2 group"
          aria-label="Retour à l'accueil Grow Your Business"
        >
          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300">
            <Rocket className="w-6 h-6 text-white" fill="white" />
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
            Grow<span className="text-brand-500">Your</span>Business
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-slate-100 hover:text-white transition-colors text-sm font-medium uppercase tracking-wide cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:contact@growyourbusiness.fr"
            className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-500/50 transition-all text-sm font-semibold text-white cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button with Rotation Animation */}
        <motion.button
          className="md:hidden text-slate-100 hover:text-white focus:outline-none p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden shadow-2xl"
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  variants={itemVariants}
                  href={`#${link.id}`}
                  className="text-xl font-medium text-slate-100 hover:text-brand-500 transition-colors cursor-pointer flex items-center justify-between group py-2"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.name}
                  <span className="w-2 h-2 rounded-full bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              
              <motion.div variants={itemVariants} className="pt-4 border-t border-white/10">
                <a
                  href="mailto:contact@growyourbusiness.fr?subject=Discussion%20Projet"
                  className="block w-full text-center px-5 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg shadow-lg cursor-pointer active:scale-95 transition-transform"
                >
                  Discutons de votre projet
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;