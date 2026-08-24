import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";

export function PremiumAsset() {
  const highlights = [
    "SHORT",
    "MEMORABLE",
    "BRANDABLE",
    ".COM",
    "SCALABLE",
    "INTERNATIONAL",
  ];

  return (
    <Section
      className="bg-[#F8FAFC] py-16 md:py-32 text-center relative overflow-hidden"
      containerClassName="max-w-5xl mx-auto px-4 md:px-8 relative z-10"
    >
      {/* Background Liquid Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-pro-israel/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#071A3A]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative py-20 px-6 md:py-28 md:px-12 rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(7,26,58,0.1)] border border-white bg-white/40 backdrop-blur-3xl group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-white/40 -z-10 group-hover:opacity-80 transition-opacity duration-1000" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-50" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[11px] md:text-sm font-extrabold text-[#071A3A]/60 uppercase tracking-[0.3em] mb-6">
            A Premium Digital Asset
          </h2>

          <h3 className="text-[12vw] sm:text-6xl md:text-8xl lg:text-[100px] font-heading font-bold text-[#071A3A] tracking-normal mb-10 leading-none drop-shadow-sm">
            PROIDF.COM
          </h3>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
            {highlights.map((item, i) => (
              <motion.span
                key={item}
                className="px-5 py-2.5 md:px-6 md:py-3 rounded-full border border-white/80 bg-white/40 backdrop-blur-md text-[#071A3A] shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] hover:bg-white/80 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,56,184,0.1)] transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
