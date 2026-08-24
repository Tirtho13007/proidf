import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";

export function MapSection() {
  const nodes = [
    { label: "MEDIA", x: "35%", y: "20%", delay: 0.2 },
    { label: "NEWS", x: "45%", y: "35%", delay: 0.3 },
    { label: "DIGITAL", x: "30%", y: "45%", delay: 0.4 },
    { label: "PODCAST", x: "45%", y: "60%", delay: 0.5 },
    { label: "VIDEO", x: "35%", y: "75%", delay: 0.6 },
    { label: "PUBLISHING", x: "25%", y: "90%", delay: 0.7 },
  ];

  return (
    <Section className="bg-[#07111F] text-white overflow-hidden py-12 md:py-24 relative" dark>
      {/* Immersive Background Glowing Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#0038B8] rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDuration: '8s' }} />
         <div className="absolute bottom-[-20%] left-[-10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-white rounded-full blur-[120px] opacity-[0.03]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <motion.div
          className="relative w-full rounded-[24px] md:rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Glass Highlights */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 md:p-12 relative z-10">
            
            <div className="lg:col-span-5 text-center lg:text-left">
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-heading font-bold mb-4 md:mb-6 leading-[1.05] tracking-tight drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                A Brand With a<br className="hidden lg:block"/>
                <span className="text-[#4D8BFF]"> Clear Identity.</span>
              </motion.h2>
              <motion.p
                className="text-white/60 text-sm sm:text-base md:text-lg font-medium max-w-sm mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Built for recognition. Positioned for impact across international digital networks and modern broadcasting channels.
              </motion.p>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end relative h-[200px] sm:h-[300px] md:h-[450px] w-full">
              {/* Abstract SVG Map of Israel (Simplified Silhouette) */}
              <motion.div 
                className="absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 top-0 w-[220px] sm:w-[280px] md:w-[320px] h-full opacity-90 pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <svg viewBox="0 0 200 600" className="w-full h-full text-[#4D8BFF]/20 drop-shadow-[0_0_20px_rgba(77,139,255,0.2)]">
                   <path 
                     fill="currentColor"
                     d="M120,50 L110,80 L130,120 L115,180 L125,240 L100,280 L105,320 L110,360 L90,400 L80,480 L65,580 L45,570 L50,460 L60,370 L40,320 L55,270 L30,220 L50,150 L60,110 L95,60 Z"
                   />
                   <path 
                     stroke="rgba(255,255,255,0.2)"
                     strokeWidth="1"
                     strokeOpacity="1"
                     fill="none"
                     d="M120,50 L110,80 L130,120 L115,180 L125,240 L100,280 L105,320 L110,360 L90,400 L80,480 L65,580 L45,570 L50,460 L60,370 L40,320 L55,270 L30,220 L50,150 L60,110 L95,60 Z"
                   />
                </svg>
                
                {/* SVG glowing connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  <motion.path
                    d="M140 120 Q 90 270 180 360"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.8 }}
                  />
                  <motion.path
                    d="M180 360 Q 120 450 100 540"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 1.3 }}
                  />
                </svg>
              </motion.div>

              {/* Network Nodes */}
              {nodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  className="absolute"
                  style={{ left: node.x, top: node.y }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + node.delay, type: "spring", stiffness: 200 }}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="relative group cursor-default">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] z-20 relative" />
                      <div className="absolute inset-0 bg-[#4D8BFF] rounded-full animate-ping opacity-80" />
                    </div>
                    <div className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-white drop-shadow-md">
                      {node.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </Section>
  );
}
