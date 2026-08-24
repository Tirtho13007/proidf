import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";

export function EditorialStatement() {
  return (
    <Section className="py-16 md:py-32 bg-pro-soft flex flex-col items-center justify-center text-center">
      <motion.div
        className="max-w-5xl mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-[#071A3A] tracking-normal mb-6 leading-tight flex flex-col md:flex-row items-center justify-center gap-2">
          <span>One Name.</span>
          <span className="text-pro-israel">Multiple Possibilities.</span>
        </h2>

        <p className="text-lg md:text-xl text-[#526173] font-medium leading-relaxed max-w-3xl mx-auto mb-16">
          ProIDF.com can evolve far beyond a domain name — into a recognizable
          media identity spanning news, video, podcasts, and digital commentary.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-3xl overflow-hidden shadow-2xl group"
        >
          <div className="absolute inset-0 bg-[#071A3A]/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-1000" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/06/IDF-Arsenal-09.jpg"
            alt="IDF Media Context"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2s] ease-out"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
