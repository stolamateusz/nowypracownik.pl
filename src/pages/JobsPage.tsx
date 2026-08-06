import { useEffect } from 'react';
import { JobOffers } from '../components/JobOffers';

export function JobsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-zinc-950 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl font-bold text-white tracking-tight">Aktualne oferty pracy</h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
            Znajdź stanowisko w preferowanej przez siebie branży. Pamiętaj, że nasze oferty są skierowane wyłącznie do osób z orzeczeniem o niepełnosprawności.
          </p>
        </div>
      </div>
      <JobOffers />
    </>
  );
}
