import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { USER_LOGO } from '../utils/logo';

interface HeaderProps {
  phoneNumber: string;
  phoneRaw: string;
}

export const Header: React.FC<HeaderProps> = ({ phoneNumber, phoneRaw }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const navLinks = [
    { label: 'Καλωσόρισμα', href: '#welcome' },
    { label: 'Πληροφορίες & Θεραπείες', href: '#services' },
    { label: 'Ωράριο Λειτουργίας', href: '#hours' },
    { label: 'Τοποθεσία & Τηλέφωνο', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-100 py-3'
            : 'bg-white py-5 border-b border-neutral-100/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
          {/* Left spacer to keep logo mathematically centered */}
          <div className="w-12 flex items-center">
            {/* Direct call icon on mobile/tablet */}
            <a
              href={`tel:${phoneRaw}`}
              aria-label="Τηλεφωνική Κλήση"
              className="p-2 text-[#E24B26] hover:bg-[#FFF4F0] rounded-[3px] transition-colors md:hidden"
              title="Άμεση Κλήση"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Centered Logo - strictly alone without text/names next to it */}
          <div className="flex-1 flex justify-center items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center focus:outline-none"
              aria-label="Med Spa Home"
            >
              <img
                src={USER_LOGO}
                alt="Med Spa - Aesthetic Clinic"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain max-w-[240px] sm:max-w-[320px]"
                loading="eager"
              />
            </a>
          </div>

          {/* Right Hamburger Menu Button */}
          <div className="w-12 flex items-center justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 rounded-[3px] text-neutral-800 hover:text-[#E24B26] hover:bg-[#FFF4F0] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E24B26]"
              aria-label={menuOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-[#E24B26]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hamburger Menu Overlay Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-neutral-900/40 backdrop-blur-xs transition-opacity"
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-10 flex flex-col justify-between p-6 sm:p-8 transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Top bar inside drawer */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
              <img
                src={USER_LOGO}
                alt="Med Spa"
                className="h-9 w-auto object-contain"
              />
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-[3px] text-neutral-500 hover:text-[#E24B26] hover:bg-[#FFF4F0] transition-colors"
                aria-label="Κλείσιμο μενού"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="mt-8 flex flex-col gap-5">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between text-base sm:text-lg font-medium text-neutral-700 hover:text-[#E24B26] transition-colors py-1"
                >
                  <span className="font-sans-clean">{link.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#E24B26]" />
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Bottom Info */}
          <div className="pt-6 border-t border-neutral-100 space-y-4">
            <div className="bg-[#FFF4F0] p-4 rounded-[4px] border border-[#E24B26]/15">
              <span className="text-[11px] tracking-widest text-[#E24B26] font-couture-kicker font-medium block mb-1">
                Τηλεφωνικες Κρατησεις
              </span>
              <a
                href={`tel:${phoneRaw}`}
                className="text-2xl font-serif-luxury text-[#E24B26] hover:underline flex items-center gap-2 tracking-wide"
              >
                <Phone className="w-4 h-4" />
                <span>{phoneNumber}</span>
              </a>
              <p className="text-xs text-neutral-600 mt-1 font-light-clean">
                Δεν υποστηρίζονται ηλεκτρονικές κρατήσεις. Καλέστε μας για ραντεβού.
              </p>
            </div>

            <div className="text-xs text-neutral-500 space-y-1.5 pt-2 font-light-clean">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E24B26]" />
                <span>Ιωαννίνων - Ανατολής, 452 21</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E24B26]" />
                <span>Δευτ - Παρ: 10:00 - 20:00</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

