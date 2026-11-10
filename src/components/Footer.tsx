import React from 'react';
import { Phone, Mail, MapPin, Shield, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenCompare: () => void;
  onOpenBusinessQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCompare, onOpenBusinessQuote }) => {
  return (
    <footer className="bg-[#0c2328] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#10acb9] to-[#31bb8f] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0c2328] rounded-[10px] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#10acb9] fill-current">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 10.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline tracking-tight">
                  <span className="text-xl font-extrabold text-white">Energy</span>
                  <span className="text-xl font-extrabold text-[#10acb9]">Solutions</span>
                </div>
                <span className="text-[10px] font-bold tracking-widest text-[#31bb8f] uppercase -mt-0.5">
                  Compare & Save
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Helping UK businesses and households manage energy costs with transparent advice, competitive energy comparisons, and expert procurement support. No hidden fees. No pressure. Just smarter energy solutions since 2016.
            </p>

            <div className="space-y-2.5 text-xs text-slate-200 pt-2">
              <a
                href="tel:03301358266"
                className="flex items-center gap-2 hover:text-[#10acb9] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#10acb9]" />
                <span className="font-bold text-sm">0330 135 8266</span>
                <span className="text-slate-400 font-normal">Mon–Fri, 9am–5pm</span>
              </a>

              <a
                href="mailto:hello@energysolutions.co.uk"
                className="flex items-center gap-2 hover:text-[#10acb9] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#10acb9]" />
                <span>hello@energysolutions.co.uk</span>
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#31bb8f]">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={onOpenBusinessQuote}
                  className="hover:text-white transition-colors text-left"
                >
                  Business Energy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBusinessQuote}
                  className="hover:text-white transition-colors text-left"
                >
                  Business Electricity
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenBusinessQuote}
                  className="hover:text-white transition-colors text-left"
                >
                  Business Gas
                </button>
              </li>
              <li>
                <a href="#other-services" className="hover:text-white transition-colors">
                  Sustainable Energy Solutions
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCompare}
                  className="text-[#10acb9] font-bold hover:underline flex items-center gap-1 text-left"
                >
                  <span>Home Energy Comparison</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#31bb8f]">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Home Energy FAQs
                </a>
              </li>
              <li>
                <a href="#other-services" className="hover:text-white transition-colors">
                  Renewables & Grants
                </a>
              </li>
              <li>
                <a href="tel:03301358266" className="hover:text-white transition-colors">
                  Contact Energy Team
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: UK Regional Offices (From screenshot) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#31bb8f]">
              UK Offices
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#10acb9] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Cardiff Office:</strong> Unit 20 Neptune Court, Vanguard Way, Cardiff, CF24 5PJ
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#10acb9] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">London Office:</strong> Suite 215, Nile Business Centre, 56-60 Nelson Street, London, E1 2DE
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#10acb9] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Birmingham Office:</strong> Unit 6, 537a Coventry Rd, Small Heath, Birmingham, B10 0LL
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditations Trust Bar (Matching screenshot) */}
        <div className="py-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
              ECO
            </div>
            <span>Sustainability Committed</span>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#10acb9]" />
            <span>FCA Registered Broker (#948197)</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#31bb8f]" />
            <span>ICO Data Protection Registered</span>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#10acb9]" />
            <span>ADR Alternative Dispute Resolution</span>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Energy Solutions (ES) Ltd. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-white cursor-pointer transition-colors">Complaints Procedure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
