import React from 'react';

export const Welcome: React.FC = () => {
  return (
    <section id="welcome" className="py-10 md:py-14 bg-[#FFFDFC] border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Didot Headline & Poetic Quote */}
          <div className="lg:col-span-5 text-left">
            <h2 className="font-serif-luxury text-4xl sm:text-5xl text-[#E24B26] tracking-wide leading-tight">
              Καλώς ήρθατε στο Med Spa
            </h2>
            <blockquote className="mt-6 font-editorial-italic text-xl sm:text-2xl text-neutral-700 leading-relaxed border-l-2 border-[#E24B26]/30 pl-5">
              «Ένα καταφύγιο ομορφιάς και γαλήνης στα Ιωάννινα, όπου η σύγχρονη ιατρική αισθητική συναντά την απόλυτη χαλάρωση.»
            </blockquote>
          </div>

          {/* Right Column: Editorial Philosophy Prose */}
          <div className="lg:col-span-7 space-y-6 text-neutral-600 font-light-clean text-base sm:text-lg leading-relaxed pt-2">
            <p>
              Στο <strong className="text-neutral-900 font-normal">Med Spa</strong> προσεγγίζουμε τη φροντίδα σας με απόλυτη εξατομίκευση. Κάθε θεραπευτικό πρωτόκολλο σχεδιάζεται ειδικά για τις ανάγκες της δικής σας επιδερμίδας, συνδυάζοντας προηγμένη επιστημονική τεχνογνωσία, σύγχρονο εξοπλισμό και πιστοποιημένα προϊόντα υψηλής αποτελεσματικότητας.
            </p>
            <p>
              Σε έναν χώρο διακριτικής πολυτέλειας και γαλήνης στην περιοχή Ανατολής Ιωαννίνων, διασφαλίζουμε για εσάς ένα περιβάλλον απόλυτης εμπιστοσύνης και ευεξίας. Όλες οι συνεδρίες πραγματοποιούνται κατόπιν προγραμματισμένου τηλεφωνικού ραντεβού, ώστε να απολαμβάνετε την αποκλειστική προσοχή των ειδικών μας.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

