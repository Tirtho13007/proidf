import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import {
  Newspaper,
  Mic,
  Tv,
  Globe,
  Briefcase,
  MonitorPlay,
} from "lucide-react";

export function UseCases() {
  const cases = [
    {
      title: "Digital News",
      icon: <Newspaper size={24} className="text-pro-israel" />,
    },
    {
      title: "Podcast Network",
      icon: <Mic size={24} className="text-pro-israel" />,
    },
    {
      title: "Video Channel",
      icon: <Tv size={24} className="text-pro-israel" />,
    },
    {
      title: "Global Platform",
      icon: <Globe size={24} className="text-pro-israel" />,
    },
    {
      title: "Digital Agency",
      icon: <Briefcase size={24} className="text-pro-israel" />,
    },
    {
      title: "Media Hub",
      icon: <MonitorPlay size={24} className="text-pro-israel" />,
    },
  ];

  return (
    <Section id="uses" className="bg-[#F8FAFC] py-16 md:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-pro-israel/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[#071A3A]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-pro-navy mb-6 leading-tight tracking-normal whitespace-normal md:whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Can ProIDF.com Become?
          </motion.h2>
          <motion.p
            className="text-pro-muted text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A versatile foundation for modern media. From global news platforms
            to independent creator networks and creative agencies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {cases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              className="bg-white/40 backdrop-blur-2xl border border-white/80 rounded-[2rem] p-6 md:p-10 flex flex-col items-center justify-center text-center group hover:bg-white/70 hover:border-pro-israel/30 hover:shadow-[0_15px_40px_rgba(0,56,184,0.08)] transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
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
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div
                className="mb-6 relative z-10 bg-white/90 p-4 rounded-2xl shadow-sm border border-white/50 group-hover:shadow-md transition-shadow duration-300 group-hover:scale-110 transform"
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
                {useCase.icon}
              </motion.div>
              <span className="text-[#071A3A] font-extrabold tracking-tight text-base md:text-lg relative z-10">
                {useCase.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
