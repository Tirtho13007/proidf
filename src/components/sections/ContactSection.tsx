import React from 'react';
import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Mail, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <Section id="contact" className="bg-pro-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[56px] font-heading font-bold text-pro-navy tracking-tight leading-[1.1]">
              Discuss ProIDF.com
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-pro-muted font-medium max-w-xl mx-auto">
              For serious acquisition discussions, intended-use inquiries, or proposals, contact the owner directly.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="primary" showArrow href="mailto:williambuffetjnr@gmail.com" className="w-full sm:w-auto">
              <Mail className="mr-2" size={18} /> Email the Owner
            </Button>
            <Button variant="secondary" href="tel:+4915211253707" className="w-full sm:w-auto">
              <Phone className="mr-2" size={18} /> Call the Owner
            </Button>
          </motion.div>

          {/* Contact Details minimal display */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 pt-8 border-t border-pro-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <p className="text-[11px] font-bold tracking-[0.15em] text-pro-muted uppercase mb-1">Email Address</p>
              <a href="mailto:williambuffetjnr@gmail.com" className="text-lg font-semibold text-pro-navy hover:text-pro-israel transition-colors">
                williambuffetjnr@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[11px] font-bold tracking-[0.15em] text-pro-muted uppercase mb-1">Phone Number</p>
              <a href="tel:+4915211253707" className="text-lg font-semibold text-pro-navy hover:text-pro-israel transition-colors">
                +49 1521 1253707
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
