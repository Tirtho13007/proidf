import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-[100vh] flex items-center pt-24 pb-12 lg:pt-24 lg:pb-12 overflow-hidden bg-[#F8FAFC]">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[80vw] md:w-[60vw] h-[100vh] bg-gradient-to-bl from-pro-israel/10 via-transparent to-transparent opacity-80 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pro-border/80 to-transparent" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12 w-full relative z-10 mt-6 md:mt-8 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Content inside a subtle Liquid Glass Container */}
          <motion.div 
            className="order-last lg:order-first lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.04)] p-6 sm:p-8 md:p-10 rounded-[28px] md:rounded-[36px] relative overflow-hidden w-full"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Liquid shine effect */}
            <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />

            <motion.div variants={item} className="mb-4 flex items-center gap-3 relative z-10">
              <span className="w-2 h-2 rounded-full bg-pro-israel animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-pro-navy">PREMIUM .COM ASSET</span>
            </motion.div>
            
            <motion.h1 variants={item} className="text-[44px] min-[375px]:text-[48px] sm:text-6xl md:text-[76px] lg:text-[88px] font-heading font-bold tracking-tight text-pro-navy mb-4 leading-[1.1] sm:leading-[1.05] relative z-10 w-full whitespace-nowrap">
              ProIDF<span className="text-pro-muted font-medium">.com</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-base sm:text-xl md:text-2xl text-[#07111F] font-semibold mb-3 sm:mb-4 leading-[1.35] max-w-xl relative z-10">
              A Powerful Name for Pro-Israel Media & Digital Publishing.
            </motion.p>
            
            <motion.p variants={item} className="text-sm sm:text-base md:text-[17px] text-[#526173] font-medium mb-8 max-w-lg leading-relaxed relative z-10">
              A premium .com domain designed for news, media, digital publishing, podcasts, video and independent platforms.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 w-full relative z-10">
              <Button variant="primary" showArrow href="#contact" className="w-full sm:w-auto justify-center text-[14px] md:text-[15px] font-semibold py-3 sm:py-2.5 shadow-md">
                Request Acquisition Details
              </Button>
              <Button variant="secondary" href="#potential" className="w-full sm:w-auto justify-center text-[14px] md:text-[15px] font-semibold py-3 sm:py-2.5 bg-white/80 backdrop-blur-sm border-white">
                Explore Brand Potential
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Visual - Premium Full-Bleed Flag */}
          <motion.div 
            className="order-first lg:order-last lg:col-span-5 relative w-full flex justify-center mt-2 mb-6 lg:mt-0 lg:mb-0"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-full aspect-[3/2] sm:aspect-video md:aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(7,26,58,0.15)] border-[6px] border-white group mx-auto max-w-[400px] lg:max-w-none bg-white p-4 md:p-8 flex items-center justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg" 
                alt="Flag of Israel" 
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-[5s] ease-out drop-shadow-sm"
              />
              
              {/* Premium overlays (lightened to keep flag visible) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0038B8]/5 via-transparent to-black/5 pointer-events-none transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none opacity-50" />

              {/* Official Asset Indicator - Moved to a pill to avoid obscuring the flag */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border border-black/5">
                 <div className="w-2 h-2 rounded-full bg-pro-israel animate-pulse shadow-[0_0_8px_#0038B8]" />
                 <p className="text-pro-navy font-bold tracking-[0.2em] text-[9px] md:text-[10px] uppercase">Premium Asset</p>
              </div>
            </div>
            
            {/* Abstract accents */}
            <div className="absolute -right-12 -top-12 w-64 h-64 border-[1px] border-pro-israel/20 rounded-full opacity-60 z-0 hidden lg:block pointer-events-none" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
