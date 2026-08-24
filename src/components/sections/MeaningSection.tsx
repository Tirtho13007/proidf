import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { Info, Shield } from "lucide-react";

export function MeaningSection() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Section
      id="meaning"
      className="bg-pro-white border-y border-pro-border py-16 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="lg:col-span-5">
          <motion.h3
            className="text-3xl sm:text-4xl md:text-[56px] font-heading font-bold text-pro-navy mb-8 sm:mb-12 leading-[1.1] tracking-tight"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={item}
          >
            What Does<br/>ProIDF Mean?
          </motion.h3>

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-[24px] overflow-hidden border border-pro-border/50 shadow-[0_20px_50px_rgba(7,26,58,0.08)] relative aspect-[4/3] group"
          >
            <div className="absolute inset-0 bg-[#071A3A]/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-700" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/35/Israeli_Defense_Forces_practice_shooting.jpg"
              alt="IDF Paratroopers"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
          </motion.div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
          
          <motion.div
            className="flex flex-wrap sm:flex-nowrap items-center text-5xl sm:text-[80px] font-heading font-bold tracking-tight mb-8 sm:mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.span variants={item} className="text-pro-israel">PRO</motion.span>
            <motion.span variants={item} className="text-pro-muted font-light mx-4 opacity-30 font-sans text-5xl">*</motion.span>
            <motion.span variants={item} className="text-pro-navy">IDF</motion.span>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              className="relative pl-8 border-l-[3px] border-pro-israel"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-pro-navy mb-2 flex items-center gap-3">
                <Info size={20} className="text-pro-israel" /> PRO
              </h3>
              <p className="text-lg text-pro-muted font-medium">
                Supportive of / favorable toward.
              </p>
            </motion.div>

            <motion.div
              className="relative pl-8 border-l-[3px] border-pro-navy"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl md:text-2xl font-bold text-pro-navy mb-2 flex items-center gap-3">
                <Shield size={20} className="text-pro-navy" /> IDF
              </h3>
              <p className="text-lg text-pro-muted font-medium">
                Israel Defense Forces.
              </p>
            </motion.div>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-[#07111F] font-semibold leading-relaxed">
                <span className="text-pro-israel">ProIDF</span> is an independent brand concept for Pro-Israel media, publishing, commentary and digital platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
