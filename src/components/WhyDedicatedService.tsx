import React from 'react';
import { ShieldCheck, Check, Sparkles, Building2, Home as HomeIcon } from 'lucide-react';

export const WhyDedicatedService: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0c2328] tracking-tight text-balance">
            Why We Use a Dedicated Home Energy Service
          </h2>
          <div className="space-y-3 pt-2">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Home and business energy work differently. So homeowners get a comparison process built for households, while our own team stays focused on what we do best: business energy.
            </p>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              It's the same honest approach we take with every customer: we'll always point you to the right service for your needs.
            </p>
          </div>
        </div>

        {/* Clear side-by-side distinction cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Home Energy (Highlighted & approachable) */}
          <div className="rounded-2xl p-7 sm:p-8 bg-gradient-to-b from-[#f2fafb] to-white border-2 border-[#10acb9]/30 shadow-sm relative">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#10acb9]/15 text-[#10acb9] flex items-center justify-center">
                <HomeIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#10acb9] uppercase tracking-wider">
                Home Energy
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#0c2328] mb-3">
              Tailored for UK Households
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Domestic switching is built for speed, consumer protection, and simple self-service comparison.
            </p>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#31bb8f] shrink-0 mt-0.5" />
                <span>Protected by the statutory Ofgem domestic energy price cap</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#31bb8f] shrink-0 mt-0.5" />
                <span>Standardised standing charges and unit rates (kWh)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#31bb8f] shrink-0 mt-0.5" />
                <span>100% online comparison with no salesperson contact required</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#31bb8f] shrink-0 mt-0.5" />
                <span>Mandatory 14-day cooling off period on every switch</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Business Energy (Specialist Brokerage) */}
          <div className="rounded-2xl p-7 sm:p-8 bg-slate-50 border border-slate-200/90 shadow-xs relative">
            <div className="flex items-center justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Commercial Energy
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#0c2328] mb-3">
              Specialist Business Procurement
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Commercial contracts have no price cap and require bespoke broker tendering across wholesale suppliers.
            </p>

            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#10acb9] shrink-0 mt-0.5" />
                <span>Direct wholesale broker tenders with 30+ commercial suppliers</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#10acb9] shrink-0 mt-0.5" />
                <span>Bespoke contracts for peak load and half-hourly (HH) meters</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#10acb9] shrink-0 mt-0.5" />
                <span>Dedicated account manager handling meter contracts & renewals</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#10acb9] shrink-0 mt-0.5" />
                <span>No automatic 14-day cooling off period (B2B legal framework)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Reassurance banner */}
        <div className="mt-12 max-w-2xl mx-auto text-center p-4 rounded-xl bg-[#f0f9fa] border border-[#10acb9]/20 flex items-center justify-center gap-2.5 text-xs sm:text-sm text-[#0c2328] font-medium">
          <ShieldCheck className="w-4 h-4 text-[#10acb9] shrink-0" />
          <span>Our promise: We always direct you to the most efficient, cost-saving route for your exact property.</span>
        </div>
      </div>
    </section>
  );
};
