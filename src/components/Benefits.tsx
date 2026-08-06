import { motion } from 'motion/react';
import { Home, Clock, Laptop, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: 'W 100% Praca Zdalna',
    description: 'Pracuj bezpiecznie i wygodnie z własnego domu. Brak konieczności dojazdów do biura.'
  },
  {
    icon: Clock,
    title: 'Elastyczny Grafik',
    description: 'Dostosuj godziny pracy do swoich możliwości, rehabilitacji lub wizyt lekarskich.'
  },
  {
    icon: Laptop,
    title: 'Sprzęt Służbowy',
    description: 'Dostarczamy kompletny zestaw do pracy: komputer, słuchawki oraz niezbędne oprogramowanie.'
  },
  {
    icon: HeartHandshake,
    title: 'Pełne Wsparcie',
    description: 'Gwarantujemy spokojne szkolenie, pomocnego lidera oraz wsparcie techniczne na każdym kroku.'
  }
];

export function Benefits() {
  return (
    <section id="dlaczego-my" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Stworzyliśmy warunki, <br />których potrzebujesz
          </h2>
          <p className="text-lg text-zinc-400">
            Rozumiemy wyzwania, z jakimi wiąże się podjęcie pracy. Dlatego 
            nasza oferta jest w pełni dostosowana do potrzeb osób z niepełnosprawnościami.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-zinc-800 hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all"
              >
                <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center mb-6 border border-zinc-800 text-emerald-400">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
