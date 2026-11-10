import React from 'react';
import { Info } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  return (
    <section className="bg-white py-10 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#f2f8f9] border border-slate-200/90 p-5 sm:p-6 flex items-start gap-3.5 sm:gap-4 shadow-xs">
          <Info className="w-5 h-5 text-[#10acb9] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            The home energy comparison service linked on this page is provided by{' '}
            <strong className="font-bold text-slate-900">Power</strong>, an independent company. Energy Solutions (ES) Ltd does not supply or broker domestic energy and is not responsible for the provider's service. We may receive a referral fee if you switch through our link. Please read the provider's terms and privacy policy before submitting your details.
          </p>
        </div>
      </div>
    </section>
  );
};
