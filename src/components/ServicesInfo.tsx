import React from 'react';
import { Phone } from 'lucide-react';
import facialCareImg from '../assets/images/spa_facial_care_1790455816633.jpg';
import relaxationImg from '../assets/images/spa_relaxation_1790455826108.jpg';

interface ServicesInfoProps {
  phoneRaw: string;
}

export const ServicesInfo: React.FC<ServicesInfoProps> = ({ phoneRaw }) => {
  const services = [
    {
      index: '01',
      title: 'Θεραπείες Προσώπου & Ανάπλαση',
      description:
        'Βαθύς καθαρισμός, ιατρική ενυδάτωση, peelings, μεσοθεραπεία και πρωτόκολλα αντιγήρανσης για άμεση λάμψη και αναζωογόνηση.',
    },
    {
      index: '02',
      title: 'Laser & Προηγμένη Αισθητική',
      description:
        'Τελευταίας γενιάς τεχνολογίες laser για οριστική αποτρίχωση, λείανση επιδερμίδας και στοχευμένη αντιμετώπιση δυσχρωμιών.',
    },
    {
      index: '03',
      title: 'Χαλαρωτικό & Θεραπευτικό Μασάζ',
      description:
        'Ολιστικές μυοχαλαρωτικές τεχνικές με αιθέρια έλαια για αποβολή της καθημερινής έντασης, βαθιά ηρεμία και ευεξία.',
    },
    {
      index: '04',
      title: 'Φροντίδα Σώματος & Σύσφιξη',
      description:
        'Εξειδικευμένες συνεδρίες αποτοξίνωσης, λεμφικής παροχέτευσης και βελτίωσης της ελαστικότητας για σμίλευση του σώματος.',
    },
  ];

  return (
    <section id="services" className="py-10 md:py-14 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10 text-left">
          <h2 className="font-serif-luxury text-4xl sm:text-5xl text-[#E24B26] tracking-wide leading-tight">
            Εξειδικευμένες Υπηρεσίες Spa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light-clean leading-relaxed">
            Επιλεγμένα πρωτόκολλα ομορφιάς και ευεξίας, προσαρμοσμένα στις δικές σας ανάγκες. Οι συνεδρίες προγραμματίζονται τηλεφωνικά.
          </p>
        </div>

        {/* 2-Column Split: Photography on Left, Numbered Menu on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Visual Editorial Gallery (Left) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-[4px] overflow-hidden border border-neutral-200/70 shadow-xs aspect-[4/5] relative">
                <img
                  src={facialCareImg}
                  alt="Aesthetic Facial Skincare Treatment"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-[4px] overflow-hidden border border-neutral-200/70 shadow-xs aspect-[4/5] relative">
                <img
                  src={relaxationImg}
                  alt="Spa Relaxation Lounge"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Numbered Luxury Treatment Protocols (Right) */}
          <div className="lg:col-span-7 divide-y divide-neutral-100">
            {services.map((item) => (
              <div
                key={item.index}
                className="py-7 sm:py-8 first:pt-0 last:pb-0 flex items-start gap-5 sm:gap-7 group"
              >
                {/* Minimal Editorial Index Number */}
                <span className="font-serif-luxury text-2xl sm:text-3xl text-neutral-300 group-hover:text-[#E24B26] transition-colors shrink-0 tabular-nums pt-0.5">
                  {item.index}
                </span>

                <div className="flex-1">
                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-neutral-900 group-hover:text-[#E24B26] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-neutral-600 font-light-clean leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3">
                    <a
                      href={`tel:${phoneRaw}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#E24B26] hover:text-[#C93916] font-light-clean font-medium transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Κράτηση ραντεβού</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
