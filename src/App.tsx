/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { MeaningSection } from './components/sections/MeaningSection';
import { EditorialStatement } from './components/sections/EditorialStatement';
import { MapSection } from './components/sections/MapSection';
import { BrandArchitecture } from './components/sections/BrandArchitecture';
import { UseCases } from './components/sections/UseCases';
import { WhySection } from './components/sections/WhySection';
import { PremiumAsset } from './components/sections/PremiumAsset';
import { Acquisition } from './components/sections/Acquisition';
import { ContactSection } from './components/sections/ContactSection';
import { FaqSection } from './components/sections/FaqSection';
import { Toaster } from 'sonner';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { CustomCursor } from './components/ui/CustomCursor';

export default function App() {
  return (
    <div className="min-h-screen bg-pro-white font-sans text-pro-text overflow-x-hidden selection:bg-pro-israel selection:text-white cursor-none">
      <CustomCursor />
      <Toaster 
        position="bottom-center"
        toastOptions={{
          className: 'bg-pro-navy text-pro-white border border-pro-border shadow-2xl !font-sans',
          style: {
            borderRadius: '12px',
            padding: '16px 20px',
          }
        }} 
      />
      <Navbar />
      <main>
        <Hero />
        <MeaningSection />
        <EditorialStatement />
        <MapSection />
        <BrandArchitecture />
        <UseCases />
        <WhySection />
        <PremiumAsset />
        <Acquisition />
        <ContactSection />
        <FaqSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
