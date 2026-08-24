import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Handshake } from "lucide-react";

export function Acquisition() {
  const steps = [
    {
      num: "01",
      title: "Inquiry",
      desc: "Submit a serious acquisition inquiry.",
    },
    {
      num: "02",
      title: "Discussion",
      desc: "Discuss intended use, terms and acquisition details.",
    },
    {
      num: "03",
      title: "Secure Transfer",
      desc: "Complete the transaction and domain transfer through an appropriate secure process.",
    },
  ];

  return (
    <Section id="acquisition" className="bg-pro-soft py-16 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Pricing Panel - Liquid Glass Theme */}
        <motion.div
          className="bg-white/40 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden shadow-[0_30px_80px_rgba(7,26,58,0.1)] border border-white"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-transparent -z-10" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-pro-israel/10 blur-[80px] rounded-full pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#071A3A]/5 blur-[60px] rounded-full pointer-events-none -z-10" />

          <div className="relative z-10 flex flex-col items-start">
            <span className="inline-block px-4 py-2 bg-white/60 border border-white shadow-sm text-pro-israel text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-10 backdrop-blur-md">
              Private Acquisition
            </span>

            <p className="text-[#7A8798] text-[11px] uppercase tracking-[0.2em] font-extrabold mb-3">
              Current Asking Price
            </p>
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#071A3A] tracking-tighter mb-6 drop-shadow-sm">
              €25,000
            </h2>

            <p className="text-[#526173] text-base mb-10 max-w-sm leading-relaxed font-medium">
              Available for serious media organizations, digital creators,
              publishers, and{" "}
              <strong className="text-[#071A3A] font-extrabold">
                creative agencies
              </strong>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                variant="primary"
                className="w-full sm:w-auto"
                showArrow
                href="#contact"
              >
                Request Details
              </Button>
              <Button
                variant="ghost"
                className="w-full sm:w-auto"
                href="tel:+4915211253707"
              >
                Discuss Acquisition
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="flex flex-col justify-center">
          <motion.h3
            className="text-3xl font-bold text-pro-navy mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Acquisition Process
          </motion.h3>

          <div className="relative border-l border-pro-border pl-8 pb-4 space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-pro-white border-2 border-pro-navy flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-pro-israel" />
                </div>

                <span className="text-sm font-bold text-pro-israel mb-1 block">
                  {step.num}
                </span>
                <h4 className="text-xl font-bold text-pro-navy mb-2">
                  {step.title}
                </h4>
                <p className="text-pro-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
