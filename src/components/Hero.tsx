import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="relative pt-24 pb-32 overflow-hidden bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium text-sm mb-6 uppercase tracking-wider">
              Praca dla osób z orzeczeniem
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Twoja szansa na pracę <br className="hidden sm:block" />
              w wielu branżach
            </h1>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
              Poszukujemy zmotywowanych kandydatów z orzeczeniem o niepełnosprawności do pracy m.in. w IT, finansach, HR i obsłudze klienta. Znajdź stabilne zatrudnienie dopasowane do Twoich kompetencji.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#aplikuj"
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-zinc-950 transition-colors bg-emerald-500 rounded-2xl hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                Wypełnij formularz
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link 
                to="/oferty-pracy"
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-white transition-colors bg-zinc-800 border-2 border-zinc-700 rounded-2xl hover:border-emerald-500/50 hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950"
              >
                Zobacz oferty pracy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimalist background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 pointer-events-none z-0">
        <div className="w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
