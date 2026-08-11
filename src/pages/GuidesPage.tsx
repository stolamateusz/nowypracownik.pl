import { motion } from 'motion/react';
import { BookOpen, Clock, ChevronRight, TrendingUp, Mail, FileText, AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

const featuredArticle = {
  title: "Zatrudnianie osób z niepełnosprawnościami w 2024: Zmiany w prawie pracy i nowe ulgi we wpłatach na PFRON",
  excerpt: "Przewodnik po najnowszych nowelizacjach przepisów. Sprawdź, co zmienia się w wyliczaniu wskaźników zatrudnienia, jakie są nowe kwoty dofinansowań oraz jak bezpiecznie przeprowadzić proces rekrutacji z zachowaniem norm Dostępności (WCAG).",
  category: "Aktualności prawne",
  readTime: "12 min",
  date: "10 Sierpnia 2026",
  image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
};

const guides = [
  {
    title: "Jak rozmawiać o niepełnosprawności podczas rekrutacji?",
    category: "Rozmowa Kwalifikacyjna",
    readTime: "5 min",
    date: "8 Sierpnia 2026",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Twoje prawa w pracy jako osoby z orzeczeniem",
    category: "Prawo Pracy",
    readTime: "8 min",
    date: "5 Sierpnia 2026",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dofinansowanie do wyposażenia stanowiska pracy - krok po kroku",
    category: "Wsparcie dla pracodawców",
    readTime: "6 min",
    date: "1 Sierpnia 2026",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Jak dobrze przygotować nowoczesne CV zgodne z ATS?",
    category: "Dokumenty Aplikacyjne",
    readTime: "4 min",
    date: "28 Lipca 2026",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Praca zdalna a orzeczenie o niepełnosprawności - co warto wiedzieć?",
    category: "Rynek Pracy",
    readTime: "7 min",
    date: "20 Lipca 2026",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Savoir-vivre wobec osób z niepełnosprawnościami w zespole",
    category: "Edukacja",
    readTime: "5 min",
    date: "15 Lipca 2026",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  }
];

const popularArticles = [
  "Ile wynosi dofinansowanie SODiR w 2026 roku?",
  "Kalkulator wpłat na PFRON - jak go używać?",
  "Zmiany w orzecznictwie - co musisz wiedzieć",
  "Czy pracodawca może pytać o rodzaj niepełnosprawności?"
];

export function GuidesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-grow bg-zinc-950 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 mt-8 gap-6 border-b border-zinc-800 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-emerald-500" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Baza Wiedzy</h1>
            </div>
            <p className="text-zinc-400 max-w-2xl text-lg">
              Profesjonalny portal informacyjny dla pracodawców i osób z niepełnosprawnościami. Przepisy, poradniki, analizy rynkowe i wywiady eksperckie.
            </p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {["Aktualności", "Prawo Pracy", "Rozliczenia PFRON", "Rekrutacja", "Dofinansowania"].map((tag, i) => (
              <button key={i} className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors border ${i === 0 ? 'bg-emerald-500 text-zinc-950 border-emerald-500' : 'bg-zinc-950 text-zinc-300 border-zinc-700 hover:bg-zinc-800 hover:text-white'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Featured Article */}
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group cursor-pointer block"
            >
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-6 border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
                <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="flex gap-3 mb-4">
                    <span className="bg-emerald-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                    <span className="bg-zinc-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-zinc-700">
                      WAŻNE
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <div className="flex items-center gap-4 text-zinc-300 text-sm">
                    <span>{featuredArticle.date}</span>
                    <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredArticle.readTime}</span>
                  </div>
                </div>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                {featuredArticle.excerpt}
              </p>
              <span className="inline-flex items-center text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                Czytaj pełny artykuł <ChevronRight className="w-5 h-5 ml-1" />
              </span>
            </motion.article>

            {/* Grid of Articles */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">Najnowsze wpisy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {guides.map((guide, i) => (
                  <motion.article 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden group cursor-pointer hover:border-emerald-500/50 transition-colors flex flex-col"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10" />
                      <img 
                        src={guide.image} 
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-zinc-950/80 backdrop-blur-md text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full border border-zinc-700/50 uppercase tracking-wider">
                          {guide.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                        {guide.title}
                      </h3>
                      <div className="flex items-center gap-4 text-zinc-500 text-sm mt-auto pt-4 border-t border-zinc-800/50">
                        <span>{guide.date}</span>
                        <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {guide.readTime}</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Newsletter */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />
              <Mail className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Bądź na bieżąco</h3>
              <p className="text-zinc-400 mb-6 text-sm">
                Zapisz się do newslettera, aby otrzymywać powiadomienia o zmianach w prawie pracy i nowych dofinansowaniach PFRON.
              </p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Twój adres email" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                />
                <button type="button" className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3 rounded-xl transition-colors">
                  Zapisz się
                </button>
              </form>
            </div>

            {/* Popular Articles */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-violet-400" /> Najczęściej czytane
              </h3>
              <ul className="space-y-4">
                {popularArticles.map((title, i) => (
                  <li key={i} className="group cursor-pointer border-b border-zinc-800/50 pb-4 last:border-0 last:pb-0 flex items-start gap-3">
                    <span className="text-zinc-700 font-bold text-lg leading-none mt-0.5">{i+1}.</span>
                    <span className="text-zinc-300 group-hover:text-violet-400 transition-colors font-medium leading-snug">
                      {title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links / Resources */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-emerald-500" /> Przydatne linki
              </h3>
              <ul className="space-y-3">
                {["Kalkulator wpłat na PFRON", "Wzory dokumentów aplikacyjnych", "Wykaz schorzeń specjalnych", "Kalkulator wynagrodzeń SODiR"].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-center justify-between text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-800 p-3 rounded-xl transition-colors group">
                      <span className="text-sm font-medium">{link}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
