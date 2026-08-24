import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { Tv, Radio, Mic, Globe, MonitorPlay, FileText } from "lucide-react";

export function BrandArchitecture() {
  const items = [
    {
      title: "ProIDF News",
      desc: "Breaking stories, reporting, analysis, current affairs and Israel-focused coverage.",
      icon: <FileText size={20} />,
      size: "large",
    },
    {
      title: "ProIDF Media",
      desc: "A broader digital media identity spanning editorial, social, video and digital content.",
      icon: <Globe size={20} />,
      size: "medium",
    },
    {
      title: "ProIDF TV",
      desc: "Video-first interviews, documentaries, commentary and original programming.",
      icon: <Tv size={20} />,
      size: "medium",
    },
    {
      title: "ProIDF Daily",
      desc: "A daily destination for news, updates, commentary and curated information.",
      icon: <MonitorPlay size={20} />,
      size: "small",
    },
    {
      title: "ProIDF Network",
      desc: "An umbrella identity for shows, creators, programs and digital properties.",
      icon: <Radio size={20} />,
      size: "small",
    },
    {
      title: "ProIDF Podcast",
      desc: "Long-form interviews, conversations and analysis.",
      icon: <Mic size={20} />,
      size: "large",
    },
  ];

  return (
    <Section id="potential" className="bg-[#F8FAFC] py-16 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-pro-israel/5 rounded-full blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-20 text-center max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-pro-navy mb-4 tracking-tighter">
          One Domain.
          <br />
          <span className="text-pro-muted font-bold">
            Multiple Brand Directions.
          </span>
        </h2>
      </motion.div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto relative z-10">
        {items.map((item, i) => {
          let spanClass = "col-span-1";
          if (item.size === "large")
            spanClass = "col-span-1 md:col-span-2 lg:col-span-2";
          else if (item.size === "medium")
            spanClass = "col-span-1 md:col-span-1 lg:col-span-2";

          return (
            <motion.div
              key={item.title}
              className={`bg-white/60 backdrop-blur-xl p-6 md:p-8 rounded-[24px] border border-white/60 flex flex-col justify-between group hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-pro-israel/20 transition-all duration-500 cursor-default ${spanClass}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                y: -6,
                scale: 1.01,
                rotateX: 1.5,
                rotateY: -1.5,
                boxShadow: "0 25px 50px -12px rgba(0, 56, 184, 0.25)",
              }}
              whileTap={{
                scale: 0.97,
                rotateX: 0,
                rotateY: 0,
                boxShadow: "0 10px 20px -5px rgba(0, 56, 184, 0.15)",
              }}
            >
              <div className="mb-8 md:mb-16 text-pro-navy group-hover:text-pro-israel transition-colors duration-300">
                <motion.div
                  className="w-12 h-12 bg-[#F8FAFC] flex items-center justify-center rounded-2xl group-hover:bg-[#F2F6FA] group-hover:scale-105 transition-all duration-300"
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
                  {item.icon}
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#071A3A] tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-[#526173] text-[15px] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
