import React, { useMemo } from 'react';
import { Clock, Phone, CheckCircle2 } from 'lucide-react';

interface HoursSectionProps {
  phoneNumber: string;
  phoneRaw: string;
}

export const HoursSection: React.FC<HoursSectionProps> = ({ phoneNumber, phoneRaw }) => {
  const schedule = [
    { day: 'Δευτέρα', hours: '10:00 - 20:00', dayIndex: 1, openHour: 10, closeHour: 20 },
    { day: 'Τρίτη', hours: '10:00 - 20:00', dayIndex: 2, openHour: 10, closeHour: 20 },
    { day: 'Τετάρτη', hours: '10:00 - 20:00', dayIndex: 3, openHour: 10, closeHour: 20 },
    { day: 'Πέμπτη', hours: '10:00 - 20:00', dayIndex: 4, openHour: 10, closeHour: 20 },
    { day: 'Παρασκευή', hours: '10:00 - 20:00', dayIndex: 5, openHour: 10, closeHour: 20 },
    { day: 'Σάββατο', hours: '10:00 - 16:00', dayIndex: 6, openHour: 10, closeHour: 16 },
    { day: 'Κυριακή', hours: 'Κλειστά', dayIndex: 0, openHour: 0, closeHour: 0 },
  ];

  // Calculate current status (Greece time approx)
  const currentStatus = useMemo(() => {
    const now = new Date();
    // Using local/Greece day & hour
    const currentDay = now.getDay();
    const currentHour = now.getHours();

    const todaySchedule = schedule.find((s) => s.dayIndex === currentDay);
    if (!todaySchedule || todaySchedule.dayIndex === 0) {
      return { isOpen: false, text: 'Κλειστά τώρα', next: 'Ανοίγει Δευτέρα στις 10:00' };
    }

    if (currentHour >= todaySchedule.openHour && currentHour < todaySchedule.closeHour) {
      return {
        isOpen: true,
        text: 'Ανοιχτά τώρα',
        next: `Κλείνει στις ${todaySchedule.closeHour}:00`,
      };
    } else if (currentHour < todaySchedule.openHour) {
      return {
        isOpen: false,
        text: 'Κλειστά τώρα',
        next: `Ανοίγει σήμερα στις ${todaySchedule.openHour}:00`,
      };
    } else {
      return {
        isOpen: false,
        text: 'Κλειστά τώρα',
        next: 'Ανοίγει την επόμενη εργάσιμη στις 10:00',
      };
    }
  }, []);

  const todayIndex = new Date().getDay();

  return (
    <section id="hours" className="py-10 md:py-14 bg-[#FFFDFC] border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-[#E24B26] tracking-wide leading-tight">
            Ωράριο Λειτουργίας
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 font-light-clean">
            Οι συνεδρίες πραγματοποιούνται κατόπιν τηλεφωνικού ραντεβού.
          </p>

          {/* Current Live Status Indicator */}
          <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[3px] bg-[#FFF4F0] border border-[#E24B26]/20">
            <span
              className={`w-2 h-2 rounded-full ${
                currentStatus.isOpen ? 'bg-[#E24B26]' : 'bg-[#E24B26]/40'
              }`}
            />
            <span className="text-sm font-normal text-neutral-800">
              {currentStatus.text}
            </span>
            <span className="text-neutral-400">·</span>
            <span className="text-sm text-neutral-600 font-light-clean">
              {currentStatus.next}
            </span>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="bg-[#FFFDFC] rounded-[4px] border border-neutral-200/70 p-6 sm:p-10 shadow-xs max-w-2xl mx-auto">
          <div className="divide-y divide-neutral-100">
            {schedule.map((item, idx) => {
              const isToday = item.dayIndex === todayIndex;
              return (
                <div
                  key={idx}
                  className={`py-3.5 sm:py-4 px-3 sm:px-4 flex items-center justify-between rounded-[3px] transition-colors ${
                    isToday ? 'bg-[#FFF4F0]/70' : 'hover:bg-neutral-50/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    {isToday && (
                      <CheckCircle2 className="w-4 h-4 text-[#E24B26] shrink-0" />
                    )}
                    <span
                      className={`text-sm sm:text-base ${
                        isToday ? 'text-[#E24B26] font-medium' : 'text-neutral-700 font-light-clean'
                      }`}
                    >
                      {item.day}
                    </span>
                  </div>

                  <span
                    className={`text-sm sm:text-base tabular-nums tracking-wider ${
                      item.hours === 'Κλειστά'
                        ? 'text-neutral-400 font-light-clean'
                        : isToday
                        ? 'text-neutral-900 font-medium'
                        : 'text-neutral-600 font-light-clean'
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-5 border-t border-neutral-100 text-center">
            <p className="text-xs sm:text-sm text-neutral-500 font-light-clean">
              * Για την καλύτερη εξυπηρέτησή σας, οι συνεδρίες πραγματοποιούνται αποκλειστικά κατόπιν ραντεβού.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
