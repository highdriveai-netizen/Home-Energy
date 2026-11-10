import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import { ServiceCardData } from '../data/homeEnergyData';

interface ServiceDetailModalProps {
  service: ServiceCardData | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [postcode, setPostcode] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and contact phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0c2328]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#f0f9fa] border-b border-slate-200/80 p-5 sm:p-6 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-[#10acb9] uppercase block mb-1">
              Home Renewable Advisory
            </span>
            <h3 className="text-xl font-extrabold text-[#0c2328]">
              {service.title}
            </h3>
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

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Media Header if available */}
          {service.image && (
            <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-200/80">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          {/* Description & Grant Info */}
          <div className="space-y-3">
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.shortDesc}
            </p>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-[#10acb9]/30 space-y-1">
              <div className="text-xs font-bold text-[#0c2328] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10acb9]" />
                <span>Estimated Financial Benefit & Government Grants</span>
              </div>
              <p className="text-xs text-slate-700 font-medium">
                {service.typicalSavings}
              </p>
              {service.grantInfo && (
                <p className="text-xs text-emerald-800 font-semibold">
                  ✓ {service.grantInfo}
                </p>
              )}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Key Household Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              {service.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#31bb8f] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Free Advisory Callback Form */}
          <div className="border-t border-slate-100 pt-5">
            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">
                  Request Received!
                </h4>
                <p className="text-xs text-emerald-700">
                  One of our domestic renewable energy advisors will contact {phone} with tailored estimates and grant qualification details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <h4 className="text-xs font-bold text-[#0c2328] uppercase tracking-wider">
                  Speak with an Energy Solutions Home Advisor
                </h4>
                <p className="text-xs text-slate-500">
                  Free, no-obligation advice on grant eligibility and installation viability for your property.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label htmlFor="modal-name" className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#10acb9] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-phone" className="block text-[11px] font-semibold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      placeholder="e.g. 07123 456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-[#10acb9] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-svc-postcode" className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Property Postcode
                  </label>
                  <input
                    id="modal-svc-postcode"
                    type="text"
                    placeholder="e.g. CF24 5PJ"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs uppercase focus:ring-2 focus:ring-[#10acb9] focus:outline-none"
                  />
                </div>

                {error && <p className="text-xs text-rose-600">{error}</p>}

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-white bg-[#10acb9] hover:bg-[#0d8c97] shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                >
                  <span>Request Free Renewable Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#f8fafb] px-6 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
          <span>MCS & RECC Certified Installers</span>
          <span>Zero high-pressure sales</span>
        </div>
      </div>
    </div>
  );
};
