import { motion } from 'motion/react';
import { CheckCircle2, Building, PiggyBank, Users, Briefcase, TrendingUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useJobInterests } from '../context/JobInterestContext';
import { jobs } from '../data/jobs';

const employerBenefits = [
  {
    icon: PiggyBank,
    title: 'Ulgi we wpłatach na PFRON',
    description: 'Obniż obowiązkowe składki na PFRON nawet o kilkadziesiąt procent dzięki zatrudnieniu osób z orzeczeniem.'
  },
  {
    icon: Users,
    title: 'Lojalni pracownicy',
    description: 'Badania pokazują, że pracownicy z niepełnosprawnościami rzadziej zmieniają pracę i są bardziej zaangażowani.'
  },
  {
    icon: Building,
    title: 'CSR i wizerunek',
    description: 'Buduj wizerunek odpowiedzialnej społecznie firmy (CSR), co jest doceniane przez klientów i partnerów biznesowych.'
  },
  {
    icon: CheckCircle2,
    title: 'Pełne wsparcie HR',
    description: 'Pomagamy w rekrutacji, selekcji oraz doradzamy w kwestiach formalnych związanych z zatrudnieniem.'
  }
];

export function EmployerPage() {
  const [submitted, setSubmitted] = useState(false);
  const { interests } = useJobInterests();

  // Calculate top interests
  const topJobs = [...jobs]
    .map(job => ({ ...job, interestCount: interests[job.id] || 0 }))
    .sort((a, b) => b.interestCount - a.interestCount)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <>
      {/* Hero for Employer */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-zinc-950 text-white border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Zatrudnij kompetencje. <br />
              <span className="text-violet-400">Dla Twojego zysku.</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              Pomagamy firmom znaleźć odpowiednich pracowników, jednocześnie optymalizując koszty zatrudnienia dzięki systemowi ulg i dofinansowań.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 translate-y-[-20%] translate-x-[-20%] opacity-20 pointer-events-none z-0">
          <div className="w-[600px] h-[600px] bg-violet-600 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* Candidate Market Demand */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 font-medium text-sm mb-4 border border-violet-500/20 uppercase tracking-wider">
              Analiza rynku
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">Najbardziej pożądane stanowiska</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Sprawdź, jakimi ofertami pracy aktualnie najbardziej interesują się kandydaci z orzeczeniem o niepełnosprawności. To doskonała wskazówka dla Twojej strategii rekrutacyjnej.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {topJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <TrendingUp className="w-24 h-24 text-violet-500" />
                </div>
                <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 border border-zinc-800 text-violet-400 relative z-10 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                  <Briefcase className="w-8 h-8" />
                </div>
                <span className="text-violet-400 text-sm font-semibold mb-2">{job.industry}</span>
                <h3 className="text-xl font-bold text-white mb-4">{job.title}</h3>
                <div className="mt-auto flex items-center gap-2 text-zinc-300 font-medium bg-zinc-950 px-4 py-2 rounded-full border border-zinc-800">
                  <Users className="w-5 h-5 text-violet-500" />
                  {job.interestCount} zainteresowanych
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Dlaczego warto?</h2>
            <p className="text-lg text-zinc-400">Sprawdź, co zyskujesz współpracując z nami.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {employerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800 hover:border-violet-500/50 hover:bg-violet-500/5 transition-colors"
                >
                  <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 border border-zinc-800 text-violet-400">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Skontaktuj się z nami</h2>
            <p className="text-lg text-zinc-400">Porozmawiajmy o potrzebach Twojej firmy.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-zinc-800"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-violet-500/20 text-violet-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Wiadomość wysłana</h3>
                <p className="text-lg text-zinc-400">Skontaktujemy się z Państwem w ciągu 24 godzin roboczych.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-violet-400 font-medium hover:underline">
                  Wyślij nową wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Imię i nazwisko</label>
                    <input type="text" required className="w-full h-12 px-4 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:bg-zinc-900 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Nazwa firmy</label>
                    <input type="text" required className="w-full h-12 px-4 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:bg-zinc-900 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">E-mail</label>
                    <input type="email" required className="w-full h-12 px-4 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:bg-zinc-900 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Telefon</label>
                    <input type="tel" required className="w-full h-12 px-4 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:bg-zinc-900 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Wiadomość (kogo szukasz?)</label>
                  <textarea required rows={4} className="w-full p-4 rounded-xl border border-zinc-800 bg-zinc-950 text-white focus:bg-zinc-900 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full h-14 flex items-center justify-center text-lg font-semibold text-white bg-violet-600 rounded-xl hover:bg-violet-500 transition-all shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  Wyślij zapytanie
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
