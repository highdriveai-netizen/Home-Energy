import { ExternalLink, FileText, CheckCircle, MousePointer, Clock } from 'lucide-react';

interface HowToCompareProps {
  onOpenCompare: () => void;
}

export const HowToCompare: React.FC<HowToCompareProps> = ({ onOpenCompare }) => {
  const steps = [
    {
      number: '01',
      title: 'Click "Compare Home Energy Suppliers"',
      description: 'Your home energy comparison opens in a new tab with our trusted domestic partner.',
      icon: MousePointer,
      pill: 'Step 1',
      subnote: 'Secure external comparison window',
    },
    {
      number: '02',
      title: 'Enter your details',
      description: 'Fill in a few details about your home, your current supplier, and typical energy use.',
      icon: FileText,
      pill: 'Step 2',
      subnote: 'Takes less than 2 minutes',
    },
    {
      number: '03',
      title: 'Choose your supplier',
      description: 'Compare the options available to you, choose the supplier that suits your home and follow the steps to complete your switch.',
      icon: CheckCircle,
      pill: 'Step 3',
      subnote: '14-day cooling-off protection',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#f8fafb] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold tracking-wider text-[#10acb9] uppercase">
            Simple 3-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0c2328] tracking-tight">
            How to Compare Home Energy Suppliers
          </h2>
        </div>

        {/* 3 Step Cards with connecting visual journey */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#10acb9]/30 via-[#31bb8f]/40 to-[#10acb9]/30 -translate-y-12 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top indicator & step number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#10acb9]/10 text-[#10acb9] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-extrabold text-slate-200 tracking-tight">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0c2328] mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Helpful checklist box & Mid-Section CTA */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Clock className="w-4 h-4 text-[#10acb9]" />
              <span>What to have handy (Takes ~2 mins)</span>
            </div>
            <p className="text-sm text-slate-700 max-w-xl">
              Your postcode and a recent energy bill or annual statement. If you don't have a bill, you can estimate based on your bedroom count.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={onOpenCompare}
              className="w-full sm:w-auto py-3.5 px-6 rounded-lg font-bold text-sm text-white bg-[#10acb9] hover:bg-[#0d8c97] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Compare Home Energy Suppliers</span>
              <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
