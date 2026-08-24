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
      className="bg-pro-white py-16 md:py-32 text-center relative overflow-hidden border-y border-pro-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative py-12 sm:py-16 md:py-24 px-5 sm:px-8 md:px-12 rounded-[24px] sm:rounded-[32px] overflow-hidden border border-pro-border/60 bg-pro-soft group"
        >
          <div className="absolute inset-0 pointer-events-none opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-0" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-[11px] md:text-sm font-bold text-pro-muted uppercase tracking-[0.2em] mb-4 sm:mb-6">
              A Premium Digital Asset
            </h2>
            
            <h3 className="text-4xl sm:text-5xl md:text-[96px] font-heading font-bold text-pro-navy tracking-tight mb-8 md:mb-10 leading-[1]">
              ProIDF<span className="text-pro-israel">.com</span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-2xl mx-auto">
              {highlights.map((item, i) => (
                <motion.span
                  key={item}
                  className="px-5 py-2.5 rounded-full border border-pro-border bg-white text-pro-navy text-[11px] font-bold tracking-[0.15em] hover:border-pro-israel/30 hover:text-pro-israel transition-colors cursor-default"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
