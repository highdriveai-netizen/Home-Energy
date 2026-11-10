import React, { useState } from 'react';
import { Phone, ExternalLink, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenCompare: (postcode?: string) => void;
  onOpenBusinessQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCompare, onOpenBusinessQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top trust announcement strip */}
      <div className="bg-[#0c2328] text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#31bb8f] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Independent & Ofgem-Regulated Comparisons</span>
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-slate-300">
              Trusted UK energy guidance since 2016
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-1 text-slate-300">
              <span className="text-[#31bb8f] font-bold">★ 4.9/5</span>
              <span className="hidden md:inline">Trustpilot Rating</span>
            </div>
            <a
              href="tel:03301358266"
              className="flex items-center gap-1.5 text-white hover:text-[#10acb9] font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-[#10acb9]" />
              <span className="font-semibold">0330 135 8266</span>
              <span className="hidden lg:inline text-slate-400 font-normal">(Mon–Fri, 9am–5pm)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Energy Solutions Brand Mark */}
          <a
            href="/"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10acb9] rounded-lg p-1"
          >
            {/* Authentic Brand Logo Mark matching screenshot */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10acb9] to-[#31bb8f] p-0.5 shadow-sm flex items-center justify-center">
              <div className="w-full h-full bg-[#0c2328] rounded-[10px] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[#10acb9] fill-current"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline tracking-tight">
                <span className="text-xl font-extrabold text-[#0c2328]">Energy</span>
                <span className="text-xl font-extrabold text-[#10acb9]">Solutions</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-[#31bb8f] uppercase -mt-0.5">
                Compare & Save
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a
              href="/"
              className="hover:text-[#10acb9] transition-colors whitespace-nowrap"
            >
              Home
            </a>

            <div className="relative group">
              <span className="text-[#10acb9] font-semibold whitespace-nowrap cursor-pointer flex items-center gap-1 border-b-2 border-[#10acb9] py-1">
                Home Energy
              </span>
            </div>

            <button
              type="button"
              onClick={onOpenBusinessQuote}
              className="hover:text-[#10acb9] transition-colors whitespace-nowrap text-left"
            >
              Business Energy
            </button>

            <a
              href="#other-services"
              className="hover:text-[#10acb9] transition-colors whitespace-nowrap"
            >
              Renewable Energy
            </a>

            <a
              href="#how-it-works"
              className="hover:text-[#10acb9] transition-colors whitespace-nowrap"
            >
              How It Works
            </a>

            <a
              href="#faqs"
              className="hover:text-[#10acb9] transition-colors whitespace-nowrap"
            >
              FAQs
            </a>
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBusinessQuote}
              className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-[#0c2328] hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
            >
              Business Energy?
            </button>

            <button
              type="button"
              onClick={() => onOpenCompare()}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#10acb9] hover:bg-[#0d8c97] rounded-lg shadow-sm hover:shadow transition-all duration-150 flex items-center gap-2 whitespace-nowrap group"
            >
              <span>Compare Home Energy</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-150">
            <nav className="flex flex-col space-y-2 text-base font-medium text-slate-700">
              <a
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Home
              </a>
              <div className="px-3 py-2 rounded-lg bg-teal-50 text-[#10acb9] font-bold">
                Home Energy Comparison (Current)
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBusinessQuote();
                }}
                className="px-3 py-2 rounded-lg hover:bg-slate-50 text-left"
              >
                Business Energy Brokerage
              </button>
              <a
                href="#other-services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Renewable Energy Solutions
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                How It Works
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Home Energy FAQs
              </a>
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCompare();
                }}
                className="w-full py-3 text-sm font-bold text-white bg-[#10acb9] hover:bg-[#0d8c97] rounded-lg shadow-sm flex items-center justify-center gap-2"
              >
                <span>Compare Home Energy Suppliers</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBusinessQuote();
                }}
                className="w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg text-center"
              >
                Looking for Business Energy Quotes?
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
