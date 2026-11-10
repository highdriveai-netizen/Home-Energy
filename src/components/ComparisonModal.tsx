import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, Zap, Flame, CheckCircle, ArrowRight } from 'lucide-react';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPostcode?: string;
  initialFuelType?: string;
  initialHouseSize?: string;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  isOpen,
  onClose,
  initialPostcode = 'CF24 5PJ',
  initialFuelType = 'dual',
  initialHouseSize = 'medium',
}) => {
  const [postcode, setPostcode] = useState(initialPostcode);
  const [activeTab, setActiveTab] = useState<'redirect' | 'preview'>('redirect');
  const [isOpening, setIsOpening] = useState(false);

  if (!isOpen) return null;

  const handleLaunchExternal = () => {
    setIsOpening(true);
    // Real external comparison redirect in new tab
    const comparisonUrl = `https://www.energysolutions.co.uk/compare-home-energy?postcode=${encodeURIComponent(
      postcode || 'SW1A1AA'
    )}`;
    window.open(comparisonUrl, '_blank', 'noopener,noreferrer');
    setTimeout(() => {
      setIsOpening(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c2328]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="comparison-dialog-title"
      >
        {/* Header */}
        <div className="bg-[#f0f9fa] border-b border-slate-200/80 p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#10acb9]/15 text-[#10acb9] flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 id="comparison-dialog-title" className="text-base font-extrabold text-[#0c2328]">
                Compare Home Energy Suppliers
              </h3>
              <p className="text-xs text-slate-500">
                Independent UK domestic comparison service
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {/* Transparent Notice */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-[#0c2328] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#31bb8f]" />
              <span>Opening in a dedicated new tab</span>
            </div>
            <p className="leading-relaxed">
              Your domestic comparison opens on our approved home energy comparison provider's secure website in a new tab. You can compare real-time tariffs and complete your switch 100% online.
            </p>
          </div>

          {/* Quick Details confirmation */}
          <div className="space-y-3">
            <div>
              <label htmlFor="modal-postcode" className="block text-xs font-semibold text-slate-700 mb-1">
                Your Postcode:
              </label>
              <input
                id="modal-postcode"
                type="text"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                placeholder="e.g. CF24 5PJ"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 font-semibold uppercase text-sm focus:ring-2 focus:ring-[#10acb9] focus:outline-none"
              />
            </div>

            {/* Quick Tariff Benchmark Preview */}
            <div className="p-4 rounded-xl border border-slate-200/90 bg-[#fafcfc] space-y-2.5">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Typical Current Market Savings for {postcode || 'UK Homes'}
              </span>

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Average Fixed 1-Year Tariff:</span>
                <span className="font-bold text-emerald-700">Save up to £240/yr</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">100% Renewable Electricity:</span>
                <span className="font-semibold text-slate-900">From 24.5p / kWh</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Switch Duration:</span>
                <span className="font-semibold text-slate-900">&lt; 5 working days</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={handleLaunchExternal}
              className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-[#10acb9] hover:bg-[#0d8c97] shadow-lg shadow-[#10acb9]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{isOpening ? 'Opening Comparison in New Tab...' : 'Continue to Comparison Engine'}</span>
              <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
            >
              Return to Energy Solutions Page
            </button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-[#f8fafb] px-6 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>No sales calls · 100% Free</span>
          <span>14-day cooling off period</span>
        </div>
      </div>
    </div>
  );
};
