/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { HowEnergySolutionsHelps } from './components/HowEnergySolutionsHelps';
import { HowToCompare } from './components/HowToCompare';
import { WhyDedicatedService } from './components/WhyDedicatedService';
import { OtherEnergyServices } from './components/OtherEnergyServices';
import { SuppliersSection } from './components/SuppliersSection';
import { BusinessCrossSell } from './components/BusinessCrossSell';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { BusinessQuoteModal } from './components/BusinessQuoteModal';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { ServiceCardData } from './data/homeEnergyData';

export default function App() {
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);

  const handleOpenCompare = () => {
    window.open('https://www.energysolutions.co.uk/compare-home-energy', '_blank', 'noopener,noreferrer');
  };

  const handleOpenBusinessQuote = () => {
    setIsBusinessModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#10acb9]/20 selection:text-[#0c2328]">
      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCompare={handleOpenCompare}
          onOpenBusinessQuote={handleOpenBusinessQuote}
        />

        {/* Section: How Energy Solutions Helps Homeowners */}
        <HowEnergySolutionsHelps
          onOpenCompare={() => handleOpenCompare()}
        />

        {/* Section: 3-Step Process */}
        <HowToCompare
          onOpenCompare={() => handleOpenCompare()}
        />

        {/* Section: Why We Use a Dedicated Home Energy Service */}
        <WhyDedicatedService />

        {/* Section: Other Energy Services for Your Home (Solar, Battery, Heat Pump, Infrared) */}
        <OtherEnergyServices
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* Section: Major UK Energy Suppliers Strip */}
        <SuppliersSection />

        {/* Section: Business Energy Cross-Sell */}
        <BusinessCrossSell
          onOpenBusinessQuote={handleOpenBusinessQuote}
        />

        {/* Section: Home Energy FAQs */}
        <FAQSection />

        {/* Section: Final Conversion Call to Action */}
        <FinalCTA
          onOpenCompare={() => handleOpenCompare()}
          onOpenBusinessQuote={handleOpenBusinessQuote}
        />

        {/* End of Page Referral & Provider Disclaimer Banner */}
        <DisclaimerBanner />
      </main>

      {/* Sticky Mobile Bar */}
      <StickyMobileCTA
        onOpenCompare={() => handleOpenCompare()}
      />

      {/* Interactive Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <BusinessQuoteModal
        isOpen={isBusinessModalOpen}
        onClose={() => setIsBusinessModalOpen(false)}
      />
    </div>
  );
}
