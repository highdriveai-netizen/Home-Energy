import React, { useState } from 'react';
import { X, Building2, Phone, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface BusinessQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessQuoteModal: React.FC<BusinessQuoteModalProps> = ({ isOpen, onClose }) => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [annualSpend, setAnnualSpend] = useState('£2,000 - £10,000');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !contactName.trim() || !phone.trim()) {
      setError('Please provide your business name, contact name, and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c2328]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#0c2328] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#31bb8f]/20 text-[#31bb8f] flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#31bb8f] block">
                Energy Solutions Brokerage
              </span>
              <h3 className="text-lg font-extrabold text-white">
                Get a Business Energy Quote
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-extrabold text-[#0c2328]">
                Business Quote Request Received!
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, {contactName}. One of our senior UK business energy consultants will tender your quote across 30+ commercial suppliers and contact you on <strong>{phone}</strong> within 1 business hour.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-[#0c2328] hover:bg-[#10acb9] rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#31bb8f] shrink-0" />
                <span>Zero broker pressure · Bespoke wholesale tariff rates · 30+ UK suppliers</span>
              </div>

              <div>
                <label htmlFor="biz-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  Business / Company Name *
                </label>
                <input
                  id="biz-name"
                  type="text"
                  placeholder="e.g. Apex Retail Ltd"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#10acb9] focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="biz-contact" className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    id="biz-contact"
                    type="text"
                    placeholder="e.g. James Smith"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#10acb9] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="biz-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                    Direct Phone *
                  </label>
                  <input
                    id="biz-phone"
                    type="tel"
                    placeholder="e.g. 029 2012 3456"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#10acb9] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="biz-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email
                  </label>
                  <input
                    id="biz-email"
                    type="email"
                    placeholder="e.g. james@apexretail.co.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-[#10acb9] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="biz-spend" className="block text-xs font-semibold text-slate-700 mb-1">
                    Approx. Annual Spend
                  </label>
                  <select
                    id="biz-spend"
                    value={annualSpend}
                    onChange={(e) => setAnnualSpend(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-[#10acb9] focus:outline-none"
                  >
                    <option value="Under £2,000">Under £2,000 / year</option>
                    <option value="£2,000 - £10,000">£2,000 - £10,000 / year</option>
                    <option value="£10,000 - £50,000">£10,000 - £50,000 / year</option>
                    <option value="£50,000+">£50,000+ (Half-Hourly / Multi-site)</option>
                  </select>
                </div>
              </div>

              {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-[#0c2328] bg-[#31bb8f] hover:bg-[#289a76] shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Request Free Business Tender</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="pt-2 text-center border-t border-slate-100">
            <span className="text-xs text-slate-500">
              Prefer to speak right now? Call our commercial desk:
            </span>
            <a
              href="tel:03301358266"
              className="mt-1 flex items-center justify-center gap-1.5 text-sm font-bold text-[#0c2328] hover:text-[#10acb9]"
            >
              <Phone className="w-3.5 h-3.5 text-[#10acb9]" />
              <span>0330 135 8266</span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f8fafb] px-6 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
          <span>Cardiff · London · Birmingham</span>
          <span>Helping UK businesses since 2016</span>
        </div>
      </div>
    </div>
  );
};
