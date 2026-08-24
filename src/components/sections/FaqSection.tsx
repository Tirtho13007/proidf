import React, { useState } from "react";
import { Section } from "../layout/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import { cn } from "../../lib/utils";

interface FAQItemProps {
  key?: React.Key;
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
          "w-full py-6 flex items-center justify-between text-left transition-colors duration-300",
          isOpen ? "text-pro-navy" : "text-pro-navy hover:text-pro-israel",
          isOpen ? "" : "hover:bg-pro-soft/50",
        )}
        onClick={onClick}
      >
        <span className="text-lg md:text-xl font-bold pr-8">{question}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-colors",
            isOpen ? "bg-pro-navy text-white" : "text-pro-muted",
          )}
        >
          {isOpen ? <X size={16} /> : <Plus size={20} />}
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
            <div className="pb-6 text-pro-muted text-lg leading-relaxed">
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
      answer:
        "Yes. ProIDF.com is currently offered as an independent domain asset for acquisition by a serious buyer.",
    },
    {
      question: "What does ProIDF mean?",
      answer:
        "“Pro” means supportive of or favorable toward a subject or position, while “IDF” stands for Israel Defense Forces.",
    },
    {
      question: "Is ProIDF.com an official IDF website?",
      answer:
        "No. It is an independently owned domain and independent brand concept.",
    },
    {
      question: "Who could use ProIDF.com?",
      answer:
        "Potential users include media organizations, publishers, creators, advocacy groups, entrepreneurs, investors, podcast networks and other serious end users.",
    },
    {
      question: "What could ProIDF.com be used for?",
      answer:
        "Potential applications include news, media, podcasts, television/video, newsletters, publishing, commentary, digital platforms and related projects.",
    },
    {
      question: "What is the asking price?",
      answer: (
        <div>
          The asking price is:{" "}
          <strong className="text-pro-navy">€25,000</strong>. Serious
          acquisition proposals may be considered.
        </div>
      ),
    },
    {
      question: "How would the domain be transferred?",
      answer:
        "Upon agreement, the domain can be transferred through an appropriate secure transaction and domain-transfer process.",
    },
  ];

  return (
    <Section id="faq" className="bg-pro-white py-16 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pro-navy">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-t border-pro-border"
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
    </Section>
  );
}
