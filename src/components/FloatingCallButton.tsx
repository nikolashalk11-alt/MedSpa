import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

interface FloatingCallButtonProps {
  phoneNumber: string;
  phoneRaw: string;
}

export const FloatingCallButton: React.FC<FloatingCallButtonProps> = ({
  phoneNumber,
  phoneRaw,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={`tel:${phoneRaw}`}
        className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#E24B26] hover:bg-[#C93916] text-white rounded-[4px] shadow-xl shadow-[#E24B26]/30 border border-white/20 transition-colors"
        aria-label="Τηλεφωνική Κλήση"
      >
        <span className="w-7 h-7 rounded-[2px] bg-white/20 flex items-center justify-center shrink-0">
          <Phone className="w-3.5 h-3.5 fill-white" />
        </span>
        <span className="font-medium text-xs sm:text-sm tracking-wider hidden sm:inline whitespace-nowrap font-light-clean">
          {phoneNumber}
        </span>
        <span className="text-xs font-medium sm:hidden whitespace-nowrap font-light-clean tracking-wider">
          {phoneNumber}
        </span>
      </a>
    </div>
  );
};
