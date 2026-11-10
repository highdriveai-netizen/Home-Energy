import React from 'react';
import { ExternalLink, ShieldCheck, Zap, ArrowRight, Heart } from 'lucide-react';

interface FinalCTAProps {
  onOpenCompare: () => void;
  onOpenBusinessQuote: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenCompare, onOpenBusinessQuote }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#f0f9fa] to-[#e4f4f6] relative overflow-hidden">
      {/* Decorative ambient background rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#10acb9]/15 to-[#31bb8f]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-xs font-bold text-[#10acb9] uppercase tracking-wider mx-auto">
            <Zap className="w-3.5 h-3.5 text-[#10acb9]" />
            <span>Fast, Free, & 100% Online</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2328] tracking-tight leading-tight text-balance">
              Ready to Compare Your Home Energy?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Enter your details and choose the supplier that suits your home.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="max-w-md mx-auto">
            <button
              type="button"
              onClick={onOpenCompare}
              className="w-full py-4 px-8 rounded-xl font-bold text-base text-white bg-[#10acb9] hover:bg-[#0d8c97] shadow-lg shadow-[#10acb9]/30 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>Compare Home Energy Suppliers</span>
              <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Reassurance points */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-medium text-slate-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#31bb8f]" />
              <span>100% Free Comparison Service</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#31bb8f]" />
              <span>No Cold Calling Guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#31bb8f]" />
              <span>14-Day Statutory Cooling-Off</span>
            </div>
          </div>

          {/* Business energy cross-reminder */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenBusinessQuote}
              className="text-xs text-slate-500 hover:text-[#0c2328] transition-colors inline-flex items-center gap-1"
            >
              <span>Operating a commercial premises?</span>
              <span className="text-[#10acb9] font-bold hover:underline">
                Get a business energy broker quote
              </span>
              <ArrowRight className="w-3 h-3 text-[#10acb9]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
