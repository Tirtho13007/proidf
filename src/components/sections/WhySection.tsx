import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { Target, Globe2, Sparkles, MoveRight, Layers, Fingerprint } from "lucide-react";

export function WhySection() {
  const reasons = [
    { title: "Short & Punchy", desc: "Concise and easy to remember.", icon: <Target className="w-5 h-5" /> },
    { title: "Memorable", desc: "Strong recognition.", icon: <Fingerprint className="w-5 h-5" /> },
    { title: "Premium .com", desc: "Global top-level domain.", icon: <Sparkles className="w-5 h-5" /> },
    { title: "Brandable", desc: "Standalone identity.", icon: <Globe2 className="w-5 h-5" /> },
    { title: "Scalable", desc: "Extends across media.", icon: <Layers className="w-5 h-5" /> },
    { title: "Flexible", desc: "Versatile models.", icon: <MoveRight className="w-5 h-5" /> },
  ];

  return (
    <Section className="bg-pro-soft py-12 sm:py-16 md:py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pro-israel/5 rounded-full blur-[80px]" />
      </div>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[56px] font-heading font-bold text-pro-navy tracking-tight leading-[1.1]">
            Why ProIDF.com?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="bg-white p-5 sm:p-6 md:p-8 rounded-[20px] sm:rounded-[24px] border border-pro-border/60 flex flex-col group hover:border-pro-israel/30 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -3, boxShadow: "0 20px 40px -10px rgba(0, 56, 184, 0.08)" }}
            >
              <div className="mb-4 sm:mb-6 text-pro-navy group-hover:text-pro-israel transition-colors">
                <div className="w-10 h-10 bg-pro-soft flex items-center justify-center rounded-xl border border-pro-border/50 group-hover:bg-[#F2F6FA] transition-colors">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-pro-navy tracking-tight mb-2 group-hover:text-pro-israel transition-colors">
                {reason.title}
              </h3>
              <p className="text-pro-muted text-[15px] sm:text-base font-medium">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
