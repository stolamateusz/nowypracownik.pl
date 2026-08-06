import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <section id="aplikuj" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              Zrób pierwszy krok. <br />
              <span className="text-emerald-400">Zgłoś swoją kandydaturę.</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Wypełnij krótki formularz kontaktowy. Skontaktujemy się z wybranymi kandydatami, 
              aby opowiedzieć o szczegółach pracy i odpowiedzieć na pytania.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-1 border border-emerald-500/30">
                  1
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Zostaw kontakt</h4>
                  <p className="text-zinc-500">Wypełnij formularz obok. To zajmie tylko minutę.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-1 border border-emerald-500/30">
                  2
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Rozmowa rekrutacyjna</h4>
                  <p className="text-zinc-500">Zadzwonimy, aby się poznać i porozmawiać o możliwościach.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-1 border border-emerald-500/30">
                  3
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Ewentualna oferta i wdrożenie</h4>
                  <p className="text-zinc-500">W przypadku pozytywnej decyzji podpisujemy umowę, wysyłamy sprzęt i rozpoczynamy szkolenie.</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-zinc-800"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Dziękujemy za zgłoszenie!
                </h3>
                <p className="text-lg text-zinc-400">
                  Otrzymaliśmy Twoje dane. Skontaktujemy się z Tobą w ciągu najbliższych 2 dni roboczych.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-emerald-400 font-medium hover:underline"
                >
                  Wypełnij ponownie
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base font-medium text-zinc-300 mb-2">
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full min-h-[56px] px-4 rounded-xl border border-zinc-800 bg-zinc-950 text-white text-lg focus:bg-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="np. Jan Kowalski"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-base font-medium text-zinc-300 mb-2">
                    Numer telefonu
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full min-h-[56px] px-4 rounded-xl border border-zinc-800 bg-zinc-950 text-white text-lg focus:bg-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="np. 500 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-medium text-zinc-300 mb-2">
                    Adres e-mail (opcjonalnie)
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full min-h-[56px] px-4 rounded-xl border border-zinc-800 bg-zinc-950 text-white text-lg focus:bg-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="jan@example.com"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-4 p-4 border border-zinc-800 rounded-xl cursor-pointer hover:bg-zinc-800/50 transition-colors has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-500/10">
                    <div className="flex items-center h-6">
                      <input
                        type="checkbox"
                        required
                        className="w-6 h-6 rounded border-zinc-700 bg-zinc-900 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-zinc-900"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-base font-medium text-white">
                        Posiadam orzeczenie o niepełnosprawności
                      </span>
                      <span className="text-sm text-zinc-500 mt-1">
                        Zaznaczenie tego pola jest wymagane do udziału w tej konkretnej rekrutacji.
                      </span>
                    </div>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[64px] flex items-center justify-center text-xl font-semibold text-zinc-950 bg-emerald-500 rounded-xl hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 transition-all mt-4 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                >
                  Wyślij zgłoszenie
                </button>
                
                <p className="text-sm text-zinc-600 text-center mt-4">
                  Twoje dane są bezpieczne i będą wykorzystane wyłącznie w celach rekrutacyjnych.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
