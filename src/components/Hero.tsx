import React from 'react';
import { ExternalLink, ArrowRight, Home as HomeIcon } from 'lucide-react';

interface HeroProps {
  onOpenCompare: () => void;
  onOpenBusinessQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCompare, onOpenBusinessQuote }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f8f9] via-[#f7fafb] to-white pt-8 sm:pt-12 lg:pt-14 pb-16 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle organic energy background contour */}
      <div
        className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-40 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#10acb9]/10 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#31bb8f]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb & Tag line */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 text-xs text-slate-500 mb-6">
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
            <span aria-hidden="true" className="text-slate-400">/</span>
            <span className="text-[#0c2328] font-medium" aria-current="page">Home Energy</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-widest text-[#10acb9] uppercase text-[11px]">
              Home Energy
            </span>
          </div>
        </div>

        {/* Hero Grid: Left Copy & Primary Action / Right Lifestyle Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition, Copy & Action */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c2328] tracking-tight leading-[1.15] text-balance">
                Compare Home Gas and Electricity Suppliers
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                Enter your details and choose the supplier that suits your home, all online.
              </p>
            </div>

            {/* Primary Action Button & Helper Note */}
            <div className="space-y-3 pt-2">
              <div>
                <button
                  type="button"
                  onClick={() => onOpenCompare()}
                  className="py-4 px-8 rounded-xl font-bold text-base text-white bg-[#10acb9] hover:bg-[#0d8c97] shadow-lg shadow-[#10acb9]/25 hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2.5 group cursor-pointer"
                >
                  <span>Compare Home Energy Suppliers</span>
                  <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed max-w-lg">
                Your comparison opens on our home energy comparison provider's website in a new tab.
              </p>
            </div>

            {/* Cross-Sell Link */}
            <div className="pt-2 text-sm">
              <button
                type="button"
                onClick={onOpenBusinessQuote}
                className="text-slate-700 hover:text-[#0c2328] font-medium flex items-center gap-1.5 group text-left cursor-pointer"
              >
                <span>Looking for business energy?</span>
                <span className="text-[#10acb9] font-bold group-hover:underline flex items-center gap-0.5">
                  Get a business energy quote
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: High-Impact Lifestyle Home Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/80 aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[480px]">
              <img
                src="/src/assets/images/user_hero_solar_home.png"
                alt="Modern energy-efficient UK home with solar panels at sunset"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />

              {/* Gradient scrim for subtle warmth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2328]/70 via-transparent to-transparent pointer-events-none" />

              {/* Floating Lifestyle Trust Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#31bb8f]/15 flex items-center justify-center text-[#31bb8f] shrink-0">
                    <HomeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0c2328]">
                      Comfortable, Smarter Home Energy
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Average UK household saves up to £240/yr on fixed tariffs
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenCompare()}
                  className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#0c2328] hover:bg-[#10acb9] rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  Compare
                </button>
              </div>
            </div>

            {/* Subtle decorative dot grid background ornament */}
            <div
              className="absolute -bottom-6 -right-6 w-36 h-36 bg-radial from-[#10acb9]/20 to-transparent -z-10 blur-xl"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
