import React, { useState, useEffect } from 'react';
import { ExternalLink, Phone } from 'lucide-react';

interface StickyMobileCTAProps {
  onOpenCompare: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenCompare }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero (approx 450px)
      setIsVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-lg flex items-center justify-between gap-2.5 animate-in slide-in-from-bottom duration-200">
      <a
        href="tel:03301358266"
        className="p-2.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 shrink-0"
        aria-label="Call Energy Solutions team"
      >
        <Phone className="w-4 h-4 text-[#10acb9]" />
      </a>

      <button
        type="button"
        onClick={onOpenCompare}
        className="flex-1 py-2.5 px-4 rounded-lg bg-[#10acb9] hover:bg-[#0d8c97] text-white font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 whitespace-nowrap"
      >
        <span>Compare Home Energy</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
