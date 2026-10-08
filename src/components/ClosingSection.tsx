import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { USER_LOGO } from '../utils/logo';

interface ClosingSectionProps {
  phoneNumber: string;
  phoneRaw: string;
  address: string;
  postalCode: string;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({
  phoneNumber,
  phoneRaw,
  address,
  postalCode,
}) => {
  return (
    <footer className="bg-[#FAF9F7] text-neutral-800 border-t border-neutral-100">
      {/* Warm, dignified closing invitation */}
      <div className="py-10 md:py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-neutral-900 tracking-wide leading-tight">
          Σας περιμένουμε στο Med Spa
        </h2>
        <p className="mt-3 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto font-light-clean leading-relaxed text-balance">
          Εμπιστευθείτε τη φροντίδα της επιδερμίδας και την αναζωογόνησή σας στους ειδικούς της αισθητικής κλινικής.
        </p>
        <div className="mt-4">
          <a
            href={`tel:${phoneRaw}`}
            className="inline-flex items-center gap-2.5 text-base sm:text-lg font-medium text-[#E24B26] hover:text-[#C93916] transition-colors font-light-clean"
          >
            <Phone className="w-4 h-4" />
            <span>Τηλεφωνικές Κρατήσεις: <strong className="font-semibold">{phoneNumber}</strong></span>
          </a>
        </div>
      </div>

      {/* Clean Footer Bar */}
      <div className="py-6 sm:py-7 border-t border-neutral-200/60 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand mark */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={USER_LOGO}
              alt="Med Spa"
              className="h-9 w-auto object-contain"
            />
            <p className="text-xs text-neutral-500 mt-2 font-couture-kicker">
              Aesthetic Clinic &amp; Medical Spa · Ιωάννινα
            </p>
          </div>

          {/* Quick info list */}
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 text-xs text-neutral-600 font-light-clean">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#E24B26]" />
              <span>{address}, {postalCode}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#E24B26]" />
              <a href={`tel:${phoneRaw}`} className="hover:text-[#E24B26] font-medium">
                {phoneNumber}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#E24B26]" />
              <span>Δευτ - Παρ: 10:00 - 20:00</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-neutral-400 text-center md:text-right font-light-clean">
            <p>&copy; {new Date().getFullYear()} Med Spa. Όλα τα δικαιώματα διατηρούνται.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
