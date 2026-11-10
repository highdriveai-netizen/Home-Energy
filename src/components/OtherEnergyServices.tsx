import React from 'react';
import { Sun, BatteryCharging, Wind, Waves, ArrowRight, Sparkles } from 'lucide-react';
import { HOME_SERVICES, ServiceCardData } from '../data/homeEnergyData';

interface OtherEnergyServicesProps {
  onSelectService: (service: ServiceCardData) => void;
}

export const OtherEnergyServices: React.FC<OtherEnergyServicesProps> = ({ onSelectService }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'solar-pv':
        return <Sun className="w-5 h-5 text-amber-500" />;
      case 'battery-storage':
        return <BatteryCharging className="w-5 h-5 text-[#10acb9]" />;
      case 'heat-pumps':
        return <Wind className="w-5 h-5 text-[#31bb8f]" />;
      case 'infrared-radiators':
        return <Waves className="w-5 h-5 text-rose-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#10acb9]" />;
    }
  };

  return (
    <section id="other-services" className="py-16 sm:py-24 bg-[#f8fafb] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0c2328] tracking-tight">
            Other Energy Services for Your Home
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Alongside home energy comparison, our team can advise homeowners on lowering energy use with renewable and low-carbon technology.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOME_SERVICES.map((service) => {
            const hasCustomImage = Boolean(service.image);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Media Preview */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    {hasCustomImage ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      /* Architectural vector aesthetic representation for Infrared Radiators */
                      <div className="w-full h-full bg-gradient-to-br from-slate-800 to-[#0c2328] p-6 flex flex-col justify-between text-white relative">
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-300">
                            Slim Heating Panel
                          </span>
                          <Waves className="w-6 h-6 text-rose-400" />
                        </div>
                        <div className="space-y-1">
                          <div className="w-3/4 h-2 bg-white/20 rounded" />
                          <div className="w-1/2 h-2 bg-white/10 rounded" />
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Discreet wall or ceiling mounting · Zero plumbing
                        </div>
                      </div>
                    )}

                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-md px-2.5 py-1 text-[11px] font-bold text-[#0c2328] shadow-xs">
                      {service.badge}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-slate-100">
                        {getIcon(service.id)}
                      </div>
                      <h3 className="text-base font-bold text-[#0c2328]">
                        {service.title}
                      </h3>
                    </div>

                    <div className="pt-2 text-[11px] font-semibold text-[#10acb9]">
                      {service.typicalSavings}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#f0f9fa] hover:bg-[#10acb9] text-[#10acb9] hover:text-white font-bold text-xs transition-colors duration-150 flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
