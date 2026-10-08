import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Welcome } from './components/Welcome';
import { ServicesInfo } from './components/ServicesInfo';
import { HoursSection } from './components/HoursSection';
import { LocationPhoneSection } from './components/LocationPhoneSection';
import { ClosingSection } from './components/ClosingSection';
import { FloatingCallButton } from './components/FloatingCallButton';

export default function App() {
  const phoneNumber = '26517 32380';
  const phoneRaw = '2651732380';
  const address = 'Ιωαννίνων - Ανατολής';
  const postalCode = '452 21';

  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col font-light-clean selection:bg-[#E24B26]/15 selection:text-[#E24B26]">
      {/* 
        Top Bar: Centered logo in the middle of the site, 
        strictly alone without names or text beside it, 
        with only the hamburger menu.
      */}
      <Header phoneNumber={phoneNumber} phoneRaw={phoneRaw} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero with grand emphasis on logo, aesthetic ambiance & telephone reservations */}
        <Hero
          phoneNumber={phoneNumber}
          phoneRaw={phoneRaw}
          address={address}
        />

        {/* 1. Καλωσόρισμα (Minimal luxury welcome) */}
        <Welcome />

        {/* 2. Πληροφορίες & Θεραπείες (Concise treatment information) */}
        <ServicesInfo phoneRaw={phoneRaw} />

        {/* 3. Ωράριο Λειτουργίας (Random realistic schedule + live open/closed indicator) */}
        <HoursSection phoneNumber={phoneNumber} phoneRaw={phoneRaw} />

        {/* 4. Τοποθεσία & Τηλέφωνο (Ιωαννίνων Ανατολής 45221 & 2651732380) */}
        <LocationPhoneSection
          phoneNumber={phoneNumber}
          phoneRaw={phoneRaw}
          address={address}
          postalCode={postalCode}
        />
      </main>

      {/* 5. Κλείσιμο (Warm farewell & quiet footer) */}
      <ClosingSection
        phoneNumber={phoneNumber}
        phoneRaw={phoneRaw}
        address={address}
        postalCode={postalCode}
      />

      {/* Floating Call Button for instant phone bookings */}
      <FloatingCallButton phoneNumber={phoneNumber} phoneRaw={phoneRaw} />
    </div>
  );
}
