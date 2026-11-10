import React from 'react';
import { SUPPLIERS } from '../data/homeEnergyData';
import { ShieldCheck } from 'lucide-react';

export const SuppliersSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="text-sm font-bold text-[#0c2328] uppercase tracking-wider">
              Compare Major UK Domestic Suppliers & Green Specialists
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Tariffs updated daily across fixed-rate, standard variable, and 100% renewable plans
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#31bb8f] font-semibold shrink-0">
            <ShieldCheck className="w-4 h-4" />
            <span>Ofgem Confidence Code Compliant</span>
          </div>
        </div>

        {/* Suppliers Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {SUPPLIERS.map((s) => (
            <div
              key={s.name}
              className="p-3.5 rounded-xl border border-slate-200/90 bg-[#fafcfc] flex flex-col items-center justify-center text-center hover:border-[#10acb9]/40 hover:bg-white transition-all shadow-xs"
            >
              <span className="text-xs font-extrabold text-[#0c2328] tracking-tight">
                {s.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium mt-1">
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
