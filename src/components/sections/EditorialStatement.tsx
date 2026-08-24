import React from 'react';
import { Section } from '../layout/Section';
import { motion } from 'framer-motion';

export function EditorialStatement() {
  return (
    <Section className="bg-pro-white py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12">
        <motion.div 
          className="relative w-full min-h-[480px] sm:min-h-0 sm:aspect-[21/9] md:aspect-[24/9] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl group flex flex-col justify-end"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* High-quality press/editorial image, tinted for the brand */}
          <img 
            src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=80&w=2000" 
            alt="Official Press Briefing" 
            className="absolute inset-0 w-full h-full object-cover grayscale-[40%] opacity-90 object-[50%_40%] transform group-hover:scale-105 transition-transform duration-[3s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071A3A]/95 via-[#071A3A]/70 to-[#071A3A]/30 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A3A]/90 via-[#071A3A]/40 to-transparent pointer-events-none" />
          
          <div className="relative p-6 sm:p-8 md:p-16 flex flex-col justify-end max-w-4xl z-10 mt-auto">
            <h2 className="text-[32px] sm:text-4xl md:text-[56px] font-heading font-bold text-white mb-3 sm:mb-6 leading-[1.05] tracking-tight drop-shadow-md">
              A Platform for Clarity,<br className="hidden sm:block" />Analysis, and Truth.
            </h2>
            <p className="text-white/80 font-medium text-[15px] sm:text-lg md:text-2xl max-w-2xl leading-relaxed">
              An authoritative domain asset positioned for dedicated global broadcasting, deep analysis, and editorial excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
