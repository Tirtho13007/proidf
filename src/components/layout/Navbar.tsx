import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Meaning', href: '#meaning' },
    { label: 'Brand Potential', href: '#potential' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Acquisition', href: '#acquisition' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-pro-border/60 py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter text-pro-navy flex items-center gap-2 group">
            <span className="flex items-baseline font-heading tracking-tight">
              <span className="text-pro-israel font-bold">Pro</span>
              <span className="font-bold text-pro-navy">IDF</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] font-bold uppercase tracking-[0.05em] text-pro-muted hover:text-pro-israel transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pro-israel transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <Button variant="primary" showArrow href="#contact" className="py-2.5 px-6 text-sm">
              Acquire ProIDF.com
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-pro-navy p-2 -mr-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-lg flex flex-col px-6 py-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="flex justify-between items-center mb-12">
              <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter text-pro-navy flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <span className="flex items-baseline font-heading tracking-tight">
                  <span className="text-pro-israel font-bold">Pro</span>
                  <span className="font-bold text-pro-navy">IDF</span>
                </span>
              </a>
              <button
                className="text-pro-navy p-2 -mr-2 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-2xl font-bold font-heading text-pro-navy hover:text-pro-israel"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                className="mt-8 pt-8 border-t border-pro-border"
              >
                <Button variant="primary" showArrow href="#contact" className="w-full text-center justify-center" onClick={() => setMobileMenuOpen(false)}>
                  Acquire ProIDF.com
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
