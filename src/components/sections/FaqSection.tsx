import React, { useState } from "react";
import { Section } from "../layout/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { cn } from "../../lib/utils";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-pro-border last:border-0">
      <button
        className={cn(
          "w-full py-6 md:py-8 flex items-center justify-between text-left transition-colors duration-300 group",
          isOpen ? "text-pro-navy" : "text-pro-navy hover:text-pro-israel"
        )}
        onClick={onClick}
      >
        <span className="text-xl md:text-2xl font-bold tracking-tight pr-8">{question}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors",
            isOpen ? "bg-pro-navy text-white" : "bg-pro-soft text-pro-navy group-hover:bg-pro-israel/10 group-hover:text-pro-israel"
          )}
        >
          {isOpen ? <X size={18} /> : <Plus size={20} />}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-pro-muted text-lg font-medium leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is ProIDF.com available?",
      answer: "Yes. ProIDF.com is currently offered as an independent domain asset for acquisition by a serious buyer.",
    },
    {
      question: "What does ProIDF mean?",
      answer: "“Pro” means supportive of or favorable toward a subject or position, while “IDF” stands for Israel Defense Forces.",
    },
    {
      question: "Is ProIDF.com an official IDF website?",
      answer: "No. It is an independently owned domain and independent brand concept.",
    },
    {
      question: "Who could use ProIDF.com?",
      answer: "Potential users include media organizations, publishers, creators, advocacy groups, entrepreneurs, investors, podcast networks and other serious end users.",
    },
    {
      question: "What is the asking price?",
      answer: (
        <div>
          The asking price is: <strong className="text-pro-navy">€25,000</strong>. Serious acquisition proposals may be considered.
        </div>
      ),
    },
    {
      question: "How would the domain be transferred?",
      answer: "Upon agreement, the domain can be transferred through an appropriate secure transaction and domain-transfer process.",
    },
  ];

  return (
    <Section id="faq" className="bg-pro-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-[56px] font-heading font-bold text-pro-navy tracking-tight leading-[1.1] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-pro-muted font-medium">
              Find answers to common questions about the acquisition process and brand potential.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-t-[2px] border-pro-navy"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
