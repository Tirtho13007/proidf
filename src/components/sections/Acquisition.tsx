import React from 'react';
import { Section } from '../layout/Section';
import { motion } from 'framer-motion';

export function Acquisition() {
  return (
    <Section id="acquisition" className="bg-[#030712] py-12 sm:py-16 md:py-32 relative overflow-hidden flex items-center justify-center border-t border-white/5">
      <div className="max-w-[800px] mx-auto px-6 sm:px-8 w-full relative z-10">
        <motion.div
          className="relative w-full rounded-[24px] sm:rounded-[40px] border border-white/10 bg-[#0B1221] shadow-2xl overflow-hidden px-5 py-8 sm:p-12 md:p-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle colored glow inside the card, matching the screenshot's top left purple dot */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-600/40 rounded-full blur-[50px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-block px-4 sm:px-5 py-1.5 rounded-full border border-white/20 bg-transparent text-white/90 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase mb-6 sm:mb-10">
                PRIVATE ACQUISITION
              </span>
            </motion.div>

            <motion.h2 
              className="text-[40px] min-[375px]:text-[48px] sm:text-[80px] md:text-[100px] font-heading font-bold text-white mb-2 tracking-tight leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              €25,000
            </motion.h2>

            <motion.p 
              className="text-base sm:text-2xl md:text-3xl text-[#3B82F6] font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Current Asking Price
            </motion.p>
            
            <motion.p 
              className="text-[15px] sm:text-[17px] text-white/60 mb-10 sm:mb-14 max-w-xs sm:max-w-sm mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Serious acquisition proposals and inquiries are welcome.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full sm:w-auto"
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#07111F] text-[15px] sm:text-[17px] font-bold hover:bg-white/90 transition-colors shadow-lg w-full sm:w-auto"
              >
                Request Acquisition Details
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
