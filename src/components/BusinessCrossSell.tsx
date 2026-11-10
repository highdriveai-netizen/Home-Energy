import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BusinessCrossSellProps {
  onOpenBusinessQuote: () => void;
}

export const BusinessCrossSell: React.FC<BusinessCrossSellProps> = ({ onOpenBusinessQuote }) => {
  return (
    <section className="bg-[#0c2328] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle brand ambient glow */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#10acb9]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#31bb8f]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Running a Business? This Is What We Do Best
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Compare business energy quotes from 30+ UK suppliers with a transparent, no-pressure broker that has been helping UK businesses since 2016.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#31bb8f] shrink-0" />
                <span>Dedicated UK account managers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#31bb8f] shrink-0" />
                <span>Tenders across 30+ commercial suppliers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#31bb8f] shrink-0" />
                <span>Zero hidden broker fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#31bb8f] shrink-0" />
                <span>Bill validation & contract management</span>
              </div>
            </div>
          </div>

          {/* Right: Actions & Phone CTA card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 space-y-4">
              <button
                type="button"
                onClick={onOpenBusinessQuote}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-[#0c2328] bg-[#31bb8f] hover:bg-[#289a76] shadow-lg transition-all duration-150 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get a Business Energy Quote</span>
                <ArrowRight className="w-4 h-4 text-[#0c2328] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="text-center pt-1 border-t border-white/10">
                <p className="text-xs text-slate-300 mb-1">
                  Or call our dedicated business energy team directly:
                </p>
                <a
                  href="tel:03301358266"
                  className="inline-flex items-center gap-2 text-base font-extrabold text-[#10acb9] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>0330 135 8266</span>
                </a>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  (Mon to Fri, 9am to 5pm)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
