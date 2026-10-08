import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Ελένη Κ.',
      role: 'Τακτική Επισκέπτρια',
      comment:
        'Εξαιρετική εμπειρία περιποίησης προσώπου. Ο χώρος είναι πεντακάθαρος και η ατμόσφαιρα απίστευτα χαλαρωτική. Το τηλεφωνικό ραντεβού κλείστηκε άμεσα και όλα έγιναν στην ώρα τους.',
      treatment: 'Θεραπεία Προσώπου & Ενυδάτωση',
      rating: 5,
    },
    {
      name: 'Μαρία Παπαδοπούλου',
      role: 'Πελάτισσα',
      comment:
        'Το καλύτερο Med Spa στα Ιωάννινα! Έκανα θεραπεία λάμψης και το αποτέλεσμα στο δέρμα μου ήταν εντυπωσιακό από την πρώτη κιόλας συνεδρία. Πολύ ευγενικό και καταρτισμένο προσωπικό.',
      treatment: 'Aesthetic Glow Protocol',
      rating: 5,
    },
    {
      name: 'Δημήτρης Β.',
      role: 'Πελάτης',
      comment:
        'Άριστος επαγγελματισμός και εξειδίκευση. Το θεραπευτικό μασάζ ήταν ό,τι χρειαζόμουν μετά από έντονη κούραση. Άνετο πάρκινγκ στην Ανατολή και ζεστή φιλοξενία.',
      treatment: 'Θεραπευτικό Μασάζ Σώματος',
      rating: 5,
    },
    {
      name: 'Σοφία Μ.',
      role: 'Πελάτισσα',
      comment:
        'Πολύ όμορφος, φωτεινός και γαλήνιος χώρος. Μεγάλη προσοχή στην υγιεινή και τη λεπτομέρεια. Η τηλεφωνική εξυπηρέτηση ήταν ευγενέστατη και με καθοδήγησαν άψογα.',
      treatment: 'Ολιστική Φροντίδα Spa',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-editorial-italic text-2xl sm:text-3xl text-[#E24B26] block mb-2">
            Εμπειρίες &amp; Εμπιστοσύνη
          </span>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-[#E24B26] tracking-wide leading-tight">
            Κριτικές Πελατών
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-neutral-600 font-light-clean">
            Η ικανοποίηση και η εμπιστοσύνη σας αποτελούν την καθημερινή μας δέσμευση.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-neutral-500">
            <div className="flex text-[#E24B26]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#E24B26]" />
              ))}
            </div>
            <span className="font-medium text-neutral-800 text-base">5.0 / 5.0</span>
            <span aria-hidden="true">·</span>
            <span className="font-editorial-italic text-lg text-[#E24B26]">άριστες αξιολογήσεις</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDFC] rounded-[4px] p-8 sm:p-9 border border-neutral-100 hover:border-[#E24B26]/20 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-[#E24B26]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E24B26]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#E24B26]/30" />
                </div>

                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-editorial-italic">
                  «{rev.comment}»
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-neutral-100 flex items-center justify-between text-sm text-neutral-500">
                <div>
                  <span className="font-serif-luxury text-xl text-neutral-900 block">
                    {rev.name}
                  </span>
                  <span className="text-neutral-500 text-xs font-light-clean">{rev.role}</span>
                </div>
                <span className="font-couture-kicker text-xs text-[#E24B26] font-medium tracking-wider">
                  {rev.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
