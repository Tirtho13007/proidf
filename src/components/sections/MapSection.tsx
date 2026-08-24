import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";

export function MapSection() {
  const nodes = [
    { label: "MEDIA", x: "20%", y: "20%" },
    { label: "NEWS", x: "70%", y: "30%" },
    { label: "DIGITAL", x: "80%", y: "60%" },
    { label: "PODCAST", x: "25%", y: "75%" },
    { label: "VIDEO", x: "45%", y: "50%" },
    { label: "PUBLISHING", x: "60%", y: "85%" },
  ];

  return (
    <Section className="bg-pro-navy text-pro-white overflow-hidden py-32" dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A Brand With a <br className="hidden md:block" />
            <span className="text-pro-israel">Clear Identity</span>
          </motion.h2>
          <motion.p
            className="text-pro-muted text-xl max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Built for recognition. Positioned for impact across international
            digital networks and modern broadcasting channels.
          </motion.p>
        </div>

        <div className="relative aspect-square w-full max-w-md mx-auto">
          {/* Abstract geometric structure representing connectivity */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full absolute inset-0 opacity-20"
            fill="none"
          >
            <path
              d="M200 50 L350 150 L300 350 L100 350 L50 150 Z"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <path d="M200 50 L200 350" stroke="white" strokeWidth="1" />
            <path d="M50 150 L350 150" stroke="white" strokeWidth="1" />
            <path d="M100 350 L350 150" stroke="white" strokeWidth="1" />
            <circle
              cx="200"
              cy="200"
              r="150"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="2 6"
            />
          </svg>

          {/* Map Image Placeholder (using a high-end tech network image) */}
          <motion.div
            className="absolute inset-4 rounded-full overflow-hidden border border-pro-israel/30 shadow-[0_0_60px_rgba(0,56,184,0.15)] bg-[#0A192F]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-pro-israel/20 mix-blend-screen z-10" />
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Global digital network"
              className="w-full h-full object-cover opacity-70"
            />
          </motion.div>

          {/* Network Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              className="absolute flex items-center justify-center"
              style={{ left: node.x, top: node.y }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
            >
              <div className="relative group cursor-default">
                <div className="w-3 h-3 bg-pro-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 relative" />
                <div className="absolute inset-0 bg-pro-israel rounded-full animate-ping opacity-50" />
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-pro-white/10 backdrop-blur-md border border-pro-white/20 rounded text-[10px] font-bold tracking-widest text-pro-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                  {node.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
