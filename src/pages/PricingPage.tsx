import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { useEffect } from 'react';

export function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-grow bg-zinc-950 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 mt-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-sm mb-4 border border-emerald-500/20 uppercase tracking-wider">
            Dla Kandydatów Zawsze Za Darmo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Przejrzyste plany dla pracodawców</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Wybierz pakiet dopasowany do skali Twojej firmy. Inwestycja w różnorodny zespół zwraca się szybciej, niż myślisz, dzięki optymalizacji wpłat na PFRON.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-2">Pojedyncze Ogłoszenie</h3>
            <p className="text-zinc-400 text-sm mb-6 h-10">Idealne dla małych firm z niewielkimi potrzebami rekrutacyjnymi.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">499</span>
              <span className="text-zinc-500"> PLN / net</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                { text: "Publikacja na 30 dni", inc: true },
                { text: "Wsparcie w redakcji ogłoszenia", inc: true },
                { text: "Dostęp do spływających CV", inc: true },
                { text: "Wyróżnienie na stronie głównej", inc: false },
                { text: "Dostęp do Bazy Talentów", inc: false },
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  {feature.inc ? <Check className="w-5 h-5 text-emerald-500 shrink-0" /> : <X className="w-5 h-5 text-zinc-700 shrink-0" />}
                  <span className={feature.inc ? "text-zinc-300" : "text-zinc-600"}>{feature.text}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl font-bold transition-colors bg-zinc-800 text-white hover:bg-zinc-700">
              Wybierz plan
            </button>
          </div>

          {/* Plan 2 - Recommended */}
          <div className="bg-zinc-900 rounded-3xl p-8 border-2 border-violet-500 relative flex flex-col transform md:-translate-y-4 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-violet-500 to-emerald-500" />
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Polecany
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pakiet Bizesowy</h3>
            <p className="text-zinc-400 text-sm mb-6 h-10">Dla średnich firm planujących dłuższą współpracę i kilka rekrutacji.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">1,499</span>
              <span className="text-zinc-500"> PLN / msc</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                { text: "Do 5 aktywnych ogłoszeń", inc: true },
                { text: "Wyróżnienie ogłoszeń", inc: true },
                { text: "Aktywne pozyskiwanie kandydatów", inc: true },
                { text: "Dostęp do Bazy Talentów", inc: true },
                { text: "Szkolenie z rozliczeń PFRON", inc: true },
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  {feature.inc ? <Check className="w-5 h-5 text-emerald-500 shrink-0" /> : <X className="w-5 h-5 text-zinc-700 shrink-0" />}
                  <span className={feature.inc ? "text-zinc-300" : "text-zinc-600"}>{feature.text}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl font-bold transition-colors bg-violet-600 text-white hover:bg-violet-500">
              Wybierz plan
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-2">Partnerstwo Strategiczne</h3>
            <p className="text-zinc-400 text-sm mb-6 h-10">Kompleksowe wsparcie dla firm planujących szerokie zatrudnienie.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">Wycena</span>
              <span className="text-zinc-500"> Indywidualna</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {[
                { text: "Nielimitowana publikacja", inc: true },
                { text: "Bezpośrednie doradztwo", inc: true },
                { text: "Wsparcie w budowaniu wizerunku", inc: true },
                { text: "Pomoc przy wnioskach SODiR", inc: true },
                { text: "Dostęp do wszystkich profili", inc: true },
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-zinc-300">{feature.text}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-4 rounded-xl font-bold transition-colors bg-zinc-800 text-white hover:bg-zinc-700">
              Skontaktuj się
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
