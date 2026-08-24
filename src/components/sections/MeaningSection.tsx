import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
        <div>
          <motion.h2
            className="text-sm font-bold tracking-widest uppercase text-pro-israel mb-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={item}
          >
            The Identity
          </motion.h2>

          <motion.h3
            className="text-[9.5vw] sm:text-4xl md:text-5xl font-heading font-bold text-pro-navy mb-8 md:mb-12 leading-tight md:whitespace-nowrap tracking-tight"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={item}
          >
            What Does ProIDF Mean?
          </motion.h3>

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-12 rounded-[2rem] overflow-hidden border border-pro-border/50 shadow-[0_20px_50px_rgba(7,26,58,0.1)] relative aspect-[4/3] group"
          >
            <div className="absolute inset-0 bg-[#071A3A]/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-700" />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/35/Israeli_Defense_Forces_practice_shooting.jpg"
              alt="IDF Paratroopers"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
            />
          </motion.div>
        </div>
        <div>
          <div className="space-y-10">
            <motion.div
              className="relative pl-8 border-l-2 border-pro-israel"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3 className="text-2xl font-heading font-bold text-pro-navy mb-2 tracking-wide">
                PRO
              </h3>
              <p className="text-lg text-pro-muted leading-relaxed">
                Supportive of, favorable toward, or in favor of a subject,
                organization, or cause.
              </p>
            </motion.div>

            <motion.div
              className="relative pl-8 border-l-2 border-pro-navy"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-heading font-bold text-pro-navy mb-2 tracking-wide flex items-center gap-4">
                <span>IDF</span>
              </h3>
              <p className="text-lg text-pro-muted leading-relaxed">
                Israel Defense Forces.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white/40 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-lg text-pro-navy font-bold leading-relaxed">
                <span className="text-pro-israel">ProIDF</span> is a concise,
                independent brand name built for media, publishing, and digital
                advocacy.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}
