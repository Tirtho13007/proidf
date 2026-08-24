import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import {
  Target,
  Globe2,
  Sparkles,
  MoveRight,
  Layers,
  Fingerprint,
} from "lucide-react";

export function WhySection() {
  const reasons = [
    {
      title: "Short & Punchy",
      desc: "A highly concise and easy-to-remember name.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Memorable",
      desc: "Built for strong recognition across all platforms.",
      icon: <Fingerprint className="w-6 h-6" />,
    },
    {
      title: "Premium .com",
      desc: "A globally recognizable top-level domain.",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Brandable",
      desc: "Functions perfectly as a standalone identity.",
      icon: <Globe2 className="w-6 h-6" />,
    },
    {
      title: "Scalable",
      desc: "Extends across media, content and apps.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Flexible",
      desc: "Suitable for a wide variety of publishing models.",
      icon: <MoveRight className="w-6 h-6" />,
    },
  ];

  return (
    <Section className="bg-[#F8FAFC] py-16 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pro-israel/5 rounded-full blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 text-center relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-pro-navy tracking-tighter">
          Why ProIDF.com?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto relative z-10">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            className="bg-white/40 backdrop-blur-2xl p-8 md:p-10 rounded-[2rem] border border-white relative overflow-hidden hover:shadow-[0_20px_50px_rgba(7,26,58,0.06)] hover:bg-white/70 transition-all duration-500 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -6,
              scale: 1.02,
              rotateX: 2,
              rotateY: -2,
              boxShadow: "0 25px 50px -12px rgba(0, 56, 184, 0.25)",
            }}
            whileTap={{
              scale: 0.96,
              rotateX: 0,
              rotateY: 0,
              boxShadow: "0 10px 20px -5px rgba(0, 56, 184, 0.15)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <motion.div
              className="relative z-10 w-14 h-14 bg-white border border-white/80 shadow-[0_4px_15px_rgba(0,0,0,0.03)] group-hover:shadow-[0_8px_20px_rgba(0,56,184,0.1)] transition-all duration-500 rounded-[18px] flex items-center justify-center text-[#071A3A] group-hover:text-pro-israel mb-8 group-hover:scale-110"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1 + 0.3,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              {reason.icon}
            </motion.div>
            <h3 className="relative z-10 text-xl md:text-2xl font-extrabold text-[#071A3A] tracking-tight mb-3">
              {reason.title}
            </h3>
            <p className="relative z-10 text-[#526173] text-[15px] font-medium leading-relaxed">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
