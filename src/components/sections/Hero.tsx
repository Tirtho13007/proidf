import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 lg:pt-24 lg:pb-12 overflow-hidden bg-pro-white">
      {/* Background subtleties */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[100vh] bg-gradient-to-bl from-pro-accent/40 to-transparent rounded-bl-full opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-pro-border to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              className="mb-6 md:mb-8 flex items-center gap-4"
            >
              <div className="w-12 h-8 bg-white border border-pro-border shadow-sm flex flex-col justify-between py-1 relative">
                <div className="w-full h-1 bg-pro-israel"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0038B8"
                    strokeWidth="1.5"
                    className="w-3.5 h-3.5"
                  >
                    <polygon points="12,4 19,16 5,16" />
                    <polygon points="12,20 5,8 19,8" />
                  </svg>
                </div>
                <div className="w-full h-1 bg-pro-israel"></div>
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-pro-muted">
                Independent Asset
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[12vw] sm:text-[10vw] md:text-7xl lg:text-[100px] font-heading font-bold tracking-normal text-[#071A3A] mb-4 leading-[0.95] md:leading-[0.9]"
            >
              <span className="text-pro-israel">PRO</span>IDF.COM
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg sm:text-xl md:text-[22px] text-[#07111F] font-semibold mb-4 md:mb-5 leading-[1.35] max-w-xl"
            >
              A Powerful Name for the Next Generation of Pro-Israel Media &
              Digital Publishing.
            </motion.p>

            <motion.p
              variants={item}
              className="text-[15px] md:text-base text-[#526173] font-medium mb-8 md:mb-10 max-w-md leading-relaxed"
            >
              A premium .com domain designed for ambitious media platforms,
              publishers, creators, and creative agencies.
            </motion.p>

            <motion.div
              variants={item}
              className="mb-8 md:mb-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-[#F8FAFC] border border-pro-border/80 rounded-[20px] w-full max-w-md shadow-sm"
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#7A8798] mb-1.5">
                  Asking Price
                </p>
                <p className="text-3xl font-extrabold text-[#071A3A] tracking-tight">
                  €25,000
                </p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-pro-border/80"></div>
              <div className="flex-1">
                <p className="text-[13px] text-[#526173] font-medium leading-snug">
                  Private acquisition opportunity for a serious buyer.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                showArrow
                href="#contact"
                className="w-full sm:w-auto justify-center text-[15px]"
              >
                Inquire About ProIDF.com
              </Button>
              <Button
                variant="secondary"
                href="#potential"
                className="w-full sm:w-auto justify-center text-[15px]"
              >
                Explore Brand Potential
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7 relative"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-pro-navy/10 border border-pro-border/50 group">
              <div className="absolute inset-0 bg-pro-navy/5 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-700" />
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                alt="Premium digital media environment"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-pro-navy/60 to-transparent z-20" />
              <div className="absolute bottom-6 left-6 z-30">
                <div className="w-12 h-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center">
                  <div className="w-4 h-4 bg-white/90 rounded-sm shadow-sm" />
                </div>
              </div>
            </div>

            {/* Subtle graphic accent */}
            <div className="absolute -right-8 -top-8 w-32 h-32 border border-pro-israel/20 rounded-full opacity-50 hidden md:block" />
            <div className="absolute -left-6 bottom-1/4 w-12 h-12 bg-pro-accent rounded-full opacity-60 mix-blend-multiply hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
