import React from 'react';
import { ShieldCheck, HeartHandshake, MousePointerClick, ArrowUpRight } from 'lucide-react';

interface HowEnergySolutionsHelpsProps {
  onOpenCompare: () => void;
}

export const HowEnergySolutionsHelps: React.FC<HowEnergySolutionsHelpsProps> = ({
  onOpenCompare,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic UK Homeowner Lifestyle Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/assets/images/solar_powered_modern_home.png"
                alt="Modern energy-efficient UK home with rooftop solar panels at sunset"
                className="w-full h-full object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
              />

              {/* Floating Reassurance Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-white/60 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#31bb8f]/15 flex items-center justify-center text-[#31bb8f] shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0c2328]">
                      Honest, Impartial Guidance
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      No pushy sales calls. Compare at your own kitchen table.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background subtle tint block */}
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-teal-50 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Right Column: Clear, Trust-Building Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider text-[#10acb9] uppercase">
                Dedicated Domestic Support
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0c2328] tracking-tight leading-snug text-balance">
                Can Energy Solutions Help With Home Energy?
              </h2>
            </div>

            {/* Core exact brief copy */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#f7fafb] border border-slate-200/90 space-y-4">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                <strong className="font-semibold text-[#0c2328]">Yes.</strong> Energy Solutions helps homeowners compare household gas and electricity suppliers through a dedicated home energy comparison service.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                You enter your details, compare suppliers and choose the one that suits your home. Our own team specialises in business energy, so we partner with an approved domestic comparison platform to give households fast, impartial, and 100% online switches.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#10acb9]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#10acb9]/10 text-[#10acb9] flex items-center justify-center mb-3">
                  <MousePointerClick className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-[#0c2328] mb-1">
                  100% Online Switch
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Compare tariffs and complete your application online in just a few minutes.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#10acb9]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#31bb8f]/10 text-[#31bb8f] flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-[#0c2328] mb-1">
                  Zero Cold Calls
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  No telephone sales pressure. You browse deals and decide when you are ready.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#10acb9]/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#0c2328]/10 text-[#0c2328] flex items-center justify-center mb-3">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold text-[#0c2328] mb-1">
                  All Major Suppliers
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Real-time access to leading UK energy providers and green specialists.
                </p>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenCompare}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#10acb9] hover:text-[#0d8c97] transition-colors group"
              >
                <span>Launch Home Energy Comparison</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
