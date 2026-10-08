import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, Copy, Check, Navigation } from 'lucide-react';

interface LocationPhoneProps {
  phoneNumber: string;
  phoneRaw: string;
  address: string;
  postalCode: string;
}

export const LocationPhoneSection: React.FC<LocationPhoneProps> = ({
  phoneNumber,
  phoneRaw,
  address,
  postalCode,
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Ανατολή Ιωάννινα 45221'
  )}`;

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-[#E24B26] tracking-wide leading-tight">
            Τοποθεσία &amp; Τηλέφωνο
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 font-light-clean">
            Επισκεφθείτε μας στα Ιωάννινα ή επικοινωνήστε άμεσα τηλεφωνικά για ραντεβού.
          </p>
        </div>

        {/* 2 Clean Architectural Cards: Telephone on Left, Location on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Phone Booking */}
          <div className="bg-white rounded-[4px] p-8 sm:p-10 border border-neutral-200/80 hover:border-[#E24B26]/40 transition-colors shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-[3px] bg-[#FFF4F0] text-[#E24B26] flex items-center justify-center mb-6">
                <Phone className="w-5 h-5" />
              </div>

              <span className="text-xs uppercase tracking-widest text-[#E24B26] font-couture-kicker block mb-1">
                Τηλεφωνικες Κρατησεις
              </span>

              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#E24B26] tracking-wide">
                26517 32380
              </h3>

              <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-light-clean">
                Οι κρατήσεις γίνονται <span className="font-medium text-neutral-900">μόνο τηλεφωνικά</span> ώστε να συζητήσουμε τις προσωπικές σας ανάγκες και να διασφαλίσουμε τον ιδανικό χρόνο για τη θεραπεία σας.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#E24B26] hover:bg-[#C93916] text-white font-medium text-sm sm:text-base rounded-[3px] shadow-xs transition-colors tracking-wide"
              >
                <Phone className="w-4 h-4" />
                <span>Άμεση Κλήση</span>
              </a>

              <button
                onClick={handleCopyPhone}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-neutral-50 hover:bg-neutral-100 text-neutral-700 text-sm font-light-clean rounded-[3px] border border-neutral-200/80 transition-colors"
                title="Αντιγραφή αριθμού"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-[#E24B26]" />
                    <span className="text-[#E24B26] font-medium">Αντιγράφηκε</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-500" />
                    <span>Αντιγραφή</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Location & Address */}
          <div className="bg-white rounded-[4px] p-8 sm:p-10 border border-neutral-200/80 hover:border-[#E24B26]/40 transition-colors shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-[3px] bg-[#FFF4F0] text-[#E24B26] flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5" />
              </div>

              <span className="text-xs uppercase tracking-widest text-neutral-400 font-couture-kicker block mb-1">
                Η Διευθυνση μας
              </span>

              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-neutral-900 tracking-wide">
                {address}
              </h3>

              <p className="mt-2 text-sm text-neutral-500 font-light-clean">
                Τ.Κ. {postalCode} · Ιωάννινα
              </p>

              <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-light-clean">
                Βρισκόμαστε στην περιοχή Ανατολής Ιωαννίνων, με εύκολη πρόσβαση και άνετο χώρο στάθμευσης για την άνεσή σας.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FFF4F0] hover:bg-[#FDEDE7] text-[#E24B26] border border-[#E24B26]/20 font-medium text-sm sm:text-base rounded-[3px] transition-all tracking-wide"
              >
                <Navigation className="w-4 h-4" />
                <span>Οδηγίες στο Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
