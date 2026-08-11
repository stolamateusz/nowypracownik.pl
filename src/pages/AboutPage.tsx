import { motion } from 'motion/react';
import { Target, Heart, Shield, Users, Trophy, Building, BookHeart } from 'lucide-react';
import { useEffect } from 'react';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-grow bg-zinc-950 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16 mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Nasza Misja: <span className="text-emerald-400">Równy Start i Zrozumienie</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            Nie jesteśmy wielką korporacją ani kolejną bezduszną agencją. Portal nowypracownik.pl powstał z głębokiej, osobistej potrzeby zmiany rynku pracy dla osób z niepełnosprawnościami.
          </motion.p>
        </div>

        {/* Personal Story Section */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-bl-full pointer-events-none blur-3xl" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
              <BookHeart className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Skąd wziął się ten projekt?</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6 text-left md:text-center">
              Znam branżę zatrudniania osób z niepełnosprawnościami od podszewki, ale co ważniejsze – znam ją z życia codziennego. Mój mąż jest osobą z niepełnosprawnością, co pozwoliło mi na własne oczy zobaczyć, z jakimi barierami, uprzedzeniami i wyzwaniami muszą mierzyć się świetni, kompetentni pracownicy tylko ze względu na swoje orzeczenie.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed text-left md:text-center">
              To właśnie to codzienne doświadczenie zmotywowało mnie do działania. Chcę autentycznie pomóc osobom z orzeczeniem w znalezieniu stabilnego i godnego zatrudnienia, a pracodawcom pokazać, że zatrudnienie osoby z niepełnosprawnością to nie tylko zyski z PFRON, ale przede wszystkim lojalny i zaangażowany pracownik.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Wartości, którymi się kierujemy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Osobiste Zaangażowanie", desc: "Znamy specyfikę rynku z własnego doświadczenia. Każdego kandydata i pracodawcę traktujemy indywidualnie, służąc wsparciem opartym na empatii." },
              { icon: Shield, title: "Bezpieczeństwo i Transparentność", desc: "Tworzymy bezpieczną przestrzeń, w której niepełnosprawność nie jest tabu, lecz normalnym elementem rozmowy o pracy." },
              { icon: Target, title: "Edukacja Pracodawców", desc: "Dostarczamy firmom wiedzę o dofinansowaniach, ale przede wszystkim przełamujemy stereotypy i uczymy, jak budować dostępne miejsca pracy." },
            ].map((value, i) => (
              <div key={i} className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

