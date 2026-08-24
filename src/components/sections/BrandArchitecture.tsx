import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { Tv, Radio, Mic, Globe, MonitorPlay, FileText, LayoutDashboard } from "lucide-react";

export function BrandArchitecture() {
  const items = [
    {
      title: "ProIDF News",
      desc: "News & reporting",
      icon: <FileText size={22} strokeWidth={1.5} />,
      size: "large",
    },
    {
      title: "ProIDF Media",
      desc: "Digital media",
      icon: <Globe size={22} strokeWidth={1.5} />,
      size: "medium",
    },
    {
      title: "ProIDF TV",
      desc: "Video & broadcasting",
      icon: <Tv size={22} strokeWidth={1.5} />,
      size: "medium",
    },
    {
      title: "ProIDF Daily",
      desc: "Daily publication",
      icon: <MonitorPlay size={22} strokeWidth={1.5} />,
      size: "small",
    },
    {
      title: "ProIDF Network",
      desc: "Multi-show media network",
      icon: <Radio size={22} strokeWidth={1.5} />,
      size: "small",
    },
    {
      title: "ProIDF Podcast",
      desc: "Interviews & analysis",
      icon: <Mic size={22} strokeWidth={1.5} />,
      size: "medium",
    },
    {
      title: "ProIDF Digital",
      desc: "Digital platforms",
      icon: <LayoutDashboard size={22} strokeWidth={1.5} />,
      size: "large",
    },
  ];

  return (
    <Section id="potential" className="bg-[#F8FAFC] py-16 md:py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-pro-israel/5 rounded-full blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 max-w-[1280px] mx-auto px-6 md:px-12 relative z-10"
      >
        <h2 className="text-4xl md:text-[56px] font-heading font-bold text-pro-navy tracking-tight leading-[1.1]">
          One Domain.<br/>Multiple Brand Directions.
        </h2>
      </motion.div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        {items.map((item, i) => {
          let spanClass = "col-span-1";
          if (item.size === "large") spanClass = "col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2";
          else if (item.size === "medium") spanClass = "col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2";

          return (
            <motion.div
              key={item.title}
              className={`bg-white p-8 rounded-[24px] border border-pro-border/60 flex flex-col justify-between group hover:border-pro-israel/30 transition-all duration-300 cursor-default ${spanClass}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{
                y: -3,
                boxShadow: "0 20px 40px -10px rgba(0, 56, 184, 0.08)",
              }}
            >
              <div className="mb-10 text-pro-navy group-hover:text-pro-israel transition-colors duration-300">
                <motion.div
                  className="w-12 h-12 bg-pro-soft flex items-center justify-center rounded-2xl group-hover:bg-[#F2F6FA] group-hover:scale-105 transition-all duration-300 border border-pro-border/50"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.2, type: "spring", stiffness: 200, damping: 15 }}
                >
                  {item.icon}
                </motion.div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pro-navy tracking-tight mb-2 group-hover:text-pro-israel transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-pro-muted text-[17px] font-medium">
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
