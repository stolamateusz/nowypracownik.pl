import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Building2, FileText, Megaphone, Star, Quote, Calculator, ChevronRight } from 'lucide-react';

const FallingIcon = ({ icon: Icon, delay = 0, startX, duration = 5, size = 48, rotation = 360, isPrimary = true }: { icon: any, delay?: number, startX: string, duration?: number, size?: number, rotation?: number, isPrimary?: boolean }) => {
  return (
    <motion.div
      className={`absolute ${isPrimary ? 'text-emerald-500/10' : 'text-violet-500/10'} pointer-events-none z-0`}
      initial={{ top: -100, left: startX, opacity: 0, rotate: 0 }}
      animate={{ top: '120%', opacity: [0, 1, 1, 0], rotate: rotation }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    >
      <Icon style={{ width: size, height: size }} />
    </motion.div>
  );
};

export function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-grow bg-zinc-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 flex items-center justify-center min-h-[80vh]">
        {/* Background ambient light */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium text-sm mb-6 uppercase tracking-wider">
                Łączymy potencjał
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Nowy Pracownik
              </h1>
              <p className="text-2xl text-emerald-400 mb-4 font-medium">
                Dla Twojego zysku.
              </p>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Autorski, niezależny portal tworzony z myślą o realnej pomocy. Łączymy osoby z niepełnosprawnościami szukające pracy z otwartymi pracodawcami, opierając się na empatii i osobistym doświadczeniu.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Candidate Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-10 border border-zinc-800 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all flex flex-col items-center text-center overflow-hidden"
            >
              {/* Falling Icons */}
              <FallingIcon icon={FileText} delay={0} startX="10%" duration={6} size={40} rotation={45} isPrimary={true} />
              <FallingIcon icon={FileText} delay={2.5} startX="80%" duration={8} size={64} rotation={-30} isPrimary={true} />
              <FallingIcon icon={FileText} delay={1.2} startX="45%" duration={5} size={32} rotation={90} isPrimary={true} />
              <FallingIcon icon={FileText} delay={4.5} startX="20%" duration={7} size={48} rotation={-60} isPrimary={true} />

              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 bg-zinc-950 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-zinc-800 group-hover:scale-110 transition-transform group-hover:border-emerald-500/50 text-zinc-300 group-hover:text-emerald-400 shrink-0">
                  <Briefcase className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Szukam pracy</h2>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Jesteś osobą z orzeczeniem o niepełnosprawności? Znajdź stabilne zatrudnienie w branży, która Ci odpowiada.
                </p>
                <ul className="text-left space-y-3 mb-10 text-sm text-zinc-300 w-full max-w-[280px] mx-auto flex-grow">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Zweryfikowani, otwarci pracodawcy</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Bezpłatna pomoc przy CV</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Wsparcie Asystenta AI</li>
                </ul>
                <Link 
                  to="/dla-kandydata"
                  className="mt-auto inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-zinc-950 transition-colors bg-emerald-500 rounded-2xl hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 w-full shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                >
                  Strefa Kandydata
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            {/* Employer Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-zinc-900/50 backdrop-blur-xl rounded-3xl p-10 border border-zinc-800 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all flex flex-col items-center text-center overflow-hidden"
            >
              {/* Falling Icons */}
              <FallingIcon icon={Megaphone} delay={0.5} startX="15%" duration={7} size={48} rotation={-45} isPrimary={false} />
              <FallingIcon icon={Megaphone} delay={3} startX="75%" duration={5} size={32} rotation={45} isPrimary={false} />
              <FallingIcon icon={Megaphone} delay={1.8} startX="50%" duration={8} size={64} rotation={-90} isPrimary={false} />
              <FallingIcon icon={Megaphone} delay={5.5} startX="85%" duration={6} size={40} rotation={30} isPrimary={false} />

              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 bg-zinc-950 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-zinc-800 group-hover:scale-110 transition-transform group-hover:border-violet-500/50 text-zinc-300 group-hover:text-violet-400 shrink-0">
                  <Building2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Szukam pracownika</h2>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Chcesz zatrudnić zmotywowanych pracowników i zoptymalizować koszty prowadzenia biznesu?
                </p>
                <ul className="text-left space-y-3 mb-10 text-sm text-zinc-300 w-full max-w-[280px] mx-auto flex-grow">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-violet-500" /> Duża baza zaangażowanych kandydatów</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-violet-500" /> Obniżenie obowiązkowych składek PFRON</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-violet-500" /> Miesięczne dofinansowania (SODiR)</li>
                </ul>
                <Link 
                  to="/dla-pracodawcy"
                  className="mt-auto inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-white transition-colors bg-zinc-800 border-2 border-zinc-700 rounded-2xl hover:border-violet-500 hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900 w-full"
                >
                  Strefa Pracodawcy
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Effectiveness / Why it works section */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-900 text-zinc-400 font-medium text-sm mb-4 border border-zinc-800 uppercase tracking-wider">
              Dlaczego jesteśmy skuteczni?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gwarancja korzyści dla obu stron</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Nasz model opiera się na prostym założeniu: dopasowanie kompetencji kandydata do realnych potrzeb pracodawcy, z uwzględnieniem ulg finansowych.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-zinc-900/30 rounded-[2.5rem] p-10 border border-emerald-500/10 hover:border-emerald-500/30 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-bl-full pointer-events-none blur-3xl" />
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  1
                </span>
                Dla Kandydata
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Skupienie na kompetencjach</h4>
                    <p className="text-sm text-zinc-400">Eksponujemy Twoje umiejętności, a niepełnosprawność traktujemy jako dodatkowy atut dla otwartego pracodawcy.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Brak odrzuceń ze względu na orzeczenie</h4>
                    <p className="text-sm text-zinc-400">Pracodawcy na naszej platformie aktywnie szukają osób z orzeczeniem, więc omijasz barierę pierwszego wrażenia.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/30 rounded-[2.5rem] p-10 border border-violet-500/10 hover:border-violet-500/30 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 rounded-bl-full pointer-events-none blur-3xl" />
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400">
                  2
                </span>
                Dla Pracodawcy
              </h3>
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-500 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Wymierne oszczędności finansowe</h4>
                    <p className="text-sm text-zinc-400">Zatrudnienie osoby z orzeczeniem to redukcja składek na PFRON oraz możliwość uzyskania dofinansowania SODiR.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 text-violet-500 flex items-center justify-center shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Zmotywowani i lojalni pracownicy</h4>
                    <p className="text-sm text-zinc-400">Badania pokazują, że osoby z niepełnosprawnościami są jednymi z najbardziej lojalnych i zaangażowanych pracowników.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Teaser Section */}
      <section className="py-24 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-sm mb-4 border border-emerald-500/20 uppercase tracking-wider">
                Ekspercka Wiedza
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Warto wiedzieć</h2>
              <p className="text-lg text-zinc-400 max-w-2xl">
                Bądź na bieżąco ze zmianami w prawie pracy, poradami dla kandydatów i pracodawców.
              </p>
            </div>
            <Link 
              to="/poradniki"
              className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
            >
              Przejdź do Bazy Wiedzy <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Nowe stawki dofinansowań SODiR 2026 - wszystko co musisz wiedzieć",
                category: "Prawo i Finanse",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Jak rozmawiać o potrzebach związanych z niepełnosprawnością?",
                category: "Poradnik Kandydata",
                image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Dostępne biuro. Jak tanio dostosować przestrzeń pracy?",
                category: "Dla Pracodawcy",
                image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
              }
            ].map((article, i) => (
              <Link to="/poradniki" key={i} className="group block">
                <div className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-emerald-500/50 transition-colors h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2 block">{article.category}</span>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors line-clamp-2">{article.title}</h3>
                    <span className="mt-auto flex items-center text-zinc-500 text-sm font-medium group-hover:text-white transition-colors">
                      Czytaj <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PFRON Promo Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-violet-600/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 font-medium text-sm mb-6 border border-violet-500/20 uppercase tracking-wider">
                Dla Pracodawców
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Zatrudniasz powyżej 25 osób? Sprawdź, ile oszczędzisz.
              </h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                Zatrudnienie osoby z orzeczeniem o niepełnosprawności to nie tylko wkład w budowę odpowiedzialnego społecznie biznesu (CSR), ale również konkretne oszczędności finansowe na wpłatach do PFRON.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-zinc-300 font-medium">
                  <div className="w-2 h-2 rounded-full bg-violet-500" /> Obniżenie obowiązkowych składek
                </li>
                <li className="flex items-center gap-3 text-zinc-300 font-medium">
                  <div className="w-2 h-2 rounded-full bg-violet-500" /> Miesięczne dofinansowania do wynagrodzeń (SODiR)
                </li>
                <li className="flex items-center gap-3 text-zinc-300 font-medium">
                  <div className="w-2 h-2 rounded-full bg-violet-500" /> Zwrot kosztów adaptacji miejsca pracy
                </li>
              </ul>
              <Link 
                to="/korzysci-pfron"
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-white bg-violet-600 rounded-2xl hover:bg-violet-500 transition-colors shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                Przejdź do Kalkulatora PFRON
              </Link>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
                <div className="absolute -top-6 -right-6 bg-emerald-500 w-24 h-24 rounded-full blur-2xl opacity-20" />
                <Calculator className="w-12 h-12 text-violet-400 mb-6" />
                <div className="space-y-4">
                  <div className="bg-zinc-900 h-12 rounded-xl border border-zinc-800 animate-pulse" />
                  <div className="bg-zinc-900 h-12 rounded-xl border border-zinc-800 animate-pulse" />
                  <div className="h-8" />
                  <div className="bg-zinc-900 h-24 rounded-xl border border-zinc-800 animate-pulse flex items-center justify-center">
                    <span className="text-zinc-600 font-medium">Kalkulacja...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-sm mb-4 border border-emerald-500/20 uppercase tracking-wider">
              Historie Sukcesu
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Zaufali nam najlepsi</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Dowiedz się, jak platforma nowypracownik.pl pomogła kandydatom znaleźć stabilne zatrudnienie, a pracodawcom - zmotywowanych pracowników.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Anna Kowalska",
                role: "Specjalistka ds. Marketingu",
                content: "Dzięki platformie znalazłam pracę marzeń w ciągu dwóch tygodni. Proces był bardzo prosty, a pracodawca był otwarty na moje potrzeby.",
                rating: 5
              },
              {
                name: "Piotr Nowak",
                role: "Dyrektor HR, TechCorp",
                content: "Jako firma szukaliśmy sposobu na zróżnicowanie naszego zespołu i optymalizację kosztów PFRON. To najlepsze narzędzie na rynku.",
                rating: 5
              },
              {
                name: "Kamil Wiśniewski",
                role: "Programista Front-end",
                content: "Ułatwienia dostępu na tej stronie to mistrzostwo. Czułem, że ktoś w końcu pomyślał o tym, czego naprawdę potrzebują kandydaci.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 relative group"
              >
                <Quote className="absolute top-8 right-8 w-8 h-8 text-zinc-800 group-hover:text-emerald-500/20 transition-colors" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-8 text-lg leading-relaxed relative z-10">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-xl font-bold text-zinc-500 border border-zinc-700">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-emerald-500">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center mix-blend-multiply" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-950 mb-6">
            Gotowy na realne rezultaty?
          </h2>
          <p className="text-xl text-zinc-900/80 mb-10 font-medium">
            Niezależnie od tego, czy szukasz pracy, w której docenią Twoje kompetencje, czy lojalnego pracownika i oszczędności — jesteś we właściwym miejscu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/dla-kandydata"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-emerald-500 bg-zinc-950 rounded-2xl hover:bg-zinc-900 transition-colors"
            >
              Znajdź pracę
            </Link>
            <Link 
              to="/dla-pracodawcy"
              className="inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-zinc-950 bg-white/20 hover:bg-white/30 rounded-2xl backdrop-blur-sm transition-colors border border-emerald-400/30"
            >
              Dodaj ogłoszenie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
