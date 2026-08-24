import React, { useState } from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    website: "",
    intendedUse: "",
    offer: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMailto = () => {
    const subject = encodeURIComponent("ProIDF.com Acquisition Inquiry");
    const body = encodeURIComponent(
      `
Name: ${formData.name}
Organization: ${formData.organization}
Email: ${formData.email}
Website: ${formData.website}
Intended Use: ${formData.intendedUse}
Offer/Budget: ${formData.offer}

Message:
${formData.message}
    `.trim(),
    );

    // Trigger toast before redirecting to the email client
    toast.success("Inquiry prepared!", {
      description:
        "Opening your default email client to send the inquiry securely.",
      duration: 5000,
    });

    window.location.href = `mailto:williambuffetjnr@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      className="bg-pro-white py-16 md:py-32 border-y border-pro-border"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Info */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-pro-navy mb-6">
              Discuss ProIDF.com
            </h2>
            <p className="text-lg text-pro-muted mb-10 max-w-md">
              For serious acquisition discussions, intended-use inquiries, or
              proposals, contact the owner directly.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-bold text-pro-navy uppercase tracking-widest mb-2">
                  Phone
                </p>
                <a
                  href="tel:+4915211253707"
                  className="text-2xl md:text-3xl font-medium text-pro-muted hover:text-pro-israel transition-colors break-all"
                >
                  +49 1521 1253707
                </a>
              </div>

              <div>
                <p className="text-sm font-bold text-pro-navy uppercase tracking-widest mb-2">
                  Email
                </p>
                <a
                  href="mailto:williambuffetjnr@gmail.com"
                  className="text-2xl md:text-3xl font-medium text-pro-muted hover:text-pro-israel transition-colors break-all"
                >
                  williambuffetjnr@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                href="mailto:williambuffetjnr@gmail.com?subject=ProIDF.com%20Acquisition%20Inquiry"
                showArrow
              >
                Email the Owner
              </Button>
              <Button variant="secondary" href="tel:+4915211253707">
                Call the Owner
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            className="bg-pro-soft p-8 md:p-12 rounded-3xl border border-pro-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-pro-navy mb-8">
              Acquisition Inquiry
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleMailto();
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-pro-navy"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pro-white border border-pro-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pro-israel/20 focus:border-pro-israel transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-pro-navy"
                    htmlFor="organization"
                  >
                    Organization / Company
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pro-white border border-pro-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pro-israel/20 focus:border-pro-israel transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-pro-navy"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pro-white border border-pro-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pro-israel/20 focus:border-pro-israel transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-pro-navy"
                    htmlFor="website"
                  >
                    Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pro-white border border-pro-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pro-israel/20 focus:border-pro-israel transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-pro-navy"
                    htmlFor="intendedUse"
                  >
                    Intended Use
                  </label>
                  <input
                    id="intendedUse"
                    name="intendedUse"
                    type="text"
                    value={formData.intendedUse}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pro-white border border-pro-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pro-israel/20 focus:border-pro-israel transition-colors"
                    placeholder="e.g. News network"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium text-pro-navy"
                    htmlFor="offer"
                  >
                    Offer / Budget
                  </label>
                  <input
                    id="offer"
                    name="offer"
                    type="text"
                    value={formData.offer}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pro-white border border-pro-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pro-israel/20 focus:border-pro-israel transition-colors"
                    placeholder="€"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="text-sm font-medium text-pro-navy"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-pro-white border border-pro-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pro-israel/20 focus:border-pro-israel transition-colors resize-none"
                />
              </div>

              <Button
                variant="primary"
                showArrow
                type="submit"
                className="w-full py-4 text-base"
              >
                Send Acquisition Inquiry
              </Button>
              <p className="text-xs text-pro-muted text-center mt-4">
                This will open your default email client to send the inquiry
                securely.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
