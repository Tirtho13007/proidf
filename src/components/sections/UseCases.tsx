import React from 'react';
import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { 
  FileText, Globe, Tv, Mic, Mail, BookOpen, 
  MessageSquare, LayoutDashboard, PenTool, 
  Users, BarChart3, Radio
} from 'lucide-react';

export function UseCases() {
  const cases = [
    { title: "News", icon: <FileText size={20} strokeWidth={1.5} /> },
    { title: "Media", icon: <Globe size={20} strokeWidth={1.5} /> },
    { title: "TV", icon: <Tv size={20} strokeWidth={1.5} /> },
    { title: "Podcast", icon: <Mic size={20} strokeWidth={1.5} /> },
    { title: "Newsletter", icon: <Mail size={20} strokeWidth={1.5} /> },
    { title: "Publishing", icon: <BookOpen size={20} strokeWidth={1.5} /> },
    { title: "Commentary", icon: <MessageSquare size={20} strokeWidth={1.5} /> },
    { title: "Digital Platform", icon: <LayoutDashboard size={20} strokeWidth={1.5} /> },
    { title: "Content Studio", icon: <PenTool size={20} strokeWidth={1.5} /> },
    { title: "Creator Network", icon: <Users size={20} strokeWidth={1.5} /> },
    { title: "Research & Analysis", icon: <BarChart3 size={20} strokeWidth={1.5} /> },
    { title: "International Media", icon: <Radio size={20} strokeWidth={1.5} /> }
  ];

  return (
    <Section id="use-cases" className="bg-pro-white py-12 sm:py-16 md:py-24 border-y border-pro-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[56px] font-heading font-bold text-pro-navy tracking-tight leading-[1.1]">
            What Can ProIDF.com Become?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              whileHover={{ y: -2, borderColor: "rgba(0, 56, 184, 0.3)", backgroundColor: "#F8FAFC" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-2xl border border-pro-border/60 bg-white transition-all duration-300 group"
            >
              <div className="text-pro-navy group-hover:text-pro-israel transition-colors">
                {useCase.icon}
              </div>
              <h3 className="font-semibold text-pro-navy text-[14px] sm:text-[17px] leading-tight group-hover:text-pro-israel transition-colors">
                {useCase.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
