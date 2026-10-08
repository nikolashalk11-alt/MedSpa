import React from 'react';
import { Phone } from 'lucide-react';
import spaInteriorImg from '../assets/images/spa_interior_1790455806135.jpg';
import { USER_LOGO } from '../utils/logo';

interface HeroProps {
  phoneNumber: string;
  phoneRaw: string;
  address: string;
}

export const Hero: React.FC<HeroProps> = ({ phoneNumber, phoneRaw, address }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-6 pb-8 md:pt-8 md:pb-12 border-b border-neutral-100">
      {/* Subtle radial coral ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E24B26]/4 blur-3xl pointer-events-none rounded-full -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Grand Centered Logo - Pure floating brand emblem */}
        <div className="flex flex-col items-center justify-center mb-5 sm:mb-7">
          <img
            src={USER_LOGO}
            alt="Med Spa - Aesthetic Clinic"
            className="w-full max-w-[420px] sm:max-w-[560px] md:max-w-[640px] h-auto object-contain mx-auto"
            loading="eager"
          />
        </div>

        {/* Minimal Lead Text */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto font-light-clean leading-relaxed text-balance">
          Ένας εκλεπτυσμένος χώρος αισθητικής και αναζωογόνησης στα Ιωάννινα. Εξατομικευμένες θεραπείες προσώπου και σώματος με προηγμένη ιατρική τεχνογνωσία.
        </p>

        {/* Single Primary Telephone Booking Focal Point */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center">
          <a
            href={`tel:${phoneRaw}`}
            className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-3.5 bg-[#E24B26] hover:bg-[#C93916] text-white font-medium text-sm sm:text-base rounded-[3px] shadow-sm hover:shadow-md transition-colors tracking-wide whitespace-nowrap"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span className="whitespace-nowrap">Κλήση για Ραντεβού: <strong className="font-semibold">{phoneNumber}</strong></span>
          </a>

          {/* Clean Unboxed Metadata Separators */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-500 font-light-clean">
            <span>{address}</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Εξατομικευμένη Φροντίδα</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-[#E24B26]">Μόνο τηλεφωνικές κρατήσεις</span>
          </div>
        </div>

        {/* Atmosphere Banner Image */}
        <div className="mt-8 sm:mt-9 rounded-[4px] overflow-hidden border border-neutral-200/70 shadow-xs relative">
          <div className="aspect-[16/8] sm:aspect-[21/9] w-full relative">
            <img
              src={spaInteriorImg}
              alt="Med Spa Aesthetic Clinic Interior Ioannina"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

