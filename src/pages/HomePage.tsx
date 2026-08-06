import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Building2, FileText, Megaphone } from 'lucide-react';

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
    <div className="flex-grow flex items-center justify-center py-20 relative overflow-hidden bg-zinc-950 min-h-screen">
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
              Profesjonalny portal łączący osoby z niepełnosprawnościami szukające pracy w różnych branżach z pracodawcami, którzy cenią kompetencje i zyskują na zatrudnieniu.
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
            <div className="relative z-10">
              <div className="w-20 h-20 bg-zinc-950 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-zinc-800 group-hover:scale-110 transition-transform group-hover:border-emerald-500/50 text-zinc-300 group-hover:text-emerald-400">
                <Briefcase className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Szukam pracy</h2>
              <p className="text-zinc-400 mb-10 leading-relaxed min-h-[80px]">
                Jesteś osobą z orzeczeniem o niepełnosprawności? Znajdź stabilne zatrudnienie w branży, która Ci odpowiada. Pomożemy Ci w procesie rekrutacji.
              </p>
              <Link 
                to="/dla-kandydata"
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-zinc-950 transition-colors bg-emerald-500 rounded-2xl hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 w-full shadow-[0_0_15px_rgba(16,185,129,0.2)]"
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
            <div className="relative z-10">
              <div className="w-20 h-20 bg-zinc-950 rounded-2xl flex items-center justify-center mb-8 mx-auto border border-zinc-800 group-hover:scale-110 transition-transform group-hover:border-violet-500/50 text-zinc-300 group-hover:text-violet-400">
                <Building2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Szukam pracownika</h2>
              <p className="text-zinc-400 mb-10 leading-relaxed min-h-[80px]">
                Chcesz zatrudnić lojalnych i zmotywowanych pracowników, zyskując jednocześnie ulgi we wpłatach na PFRON? Sprawdź korzyści dla Twojej firmy.
              </p>
              <Link 
                to="/dla-pracodawcy"
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-semibold text-white transition-colors bg-zinc-800 border-2 border-zinc-700 rounded-2xl hover:border-violet-500 hover:bg-zinc-800/80 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900 w-full"
              >
                Strefa Pracodawcy
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
