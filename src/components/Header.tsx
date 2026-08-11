import { Link } from 'react-router-dom';
import { Users, ChevronDown, FileText, BookOpen, Search, Briefcase, CreditCard, Award, Eye, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

function NavDropdown({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-emerald-400 transition-colors py-2">
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl overflow-hidden p-2 backdrop-blur-xl">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownItem({ icon: Icon, title, description, to }: { icon: any, title: string, description: string, to: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-start gap-4 p-3 rounded-xl hover:bg-zinc-800/50 transition-colors group"
    >
      <div className="bg-zinc-950 p-2 rounded-lg border border-zinc-800 group-hover:border-emerald-500/30 text-emerald-500">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-medium text-white mb-0.5 group-hover:text-emerald-400 transition-colors">{title}</h4>
        <p className="text-sm text-zinc-500 leading-snug">{description}</p>
      </div>
    </Link>
  );
}

export function Header() {
  const toggleHighContrast = () => {
    document.documentElement.classList.toggle('high-contrast-mode');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-500 text-zinc-950 px-4 py-2 rounded-xl font-bold z-[100]">
        Przejdź do głównej treści
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group z-10">
            <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <span className="font-semibold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              nowypracownik.pl
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-zinc-400 font-medium">
              <NavDropdown title="Dla kandydata">
                <DropdownItem 
                  icon={Search} 
                  title="Oferty pracy" 
                  description="Znajdź stabilne zatrudnienie dopasowane do Twoich potrzeb." 
                  to="/oferty-pracy" 
                />
                <DropdownItem 
                  icon={FileText} 
                  title="Kreator CV" 
                  description="Stwórz profesjonalne CV, które przyciągnie uwagę pracodawców." 
                  to="/kreator-cv" 
                />
                <DropdownItem 
                  icon={Bot} 
                  title="Doradca AI" 
                  description="Wirtualny asystent wspierający na każdym etapie szukania pracy." 
                  to="/doradca-zawodowy" 
                />
                <DropdownItem 
                  icon={BookOpen} 
                  title="Poradniki" 
                  description="Wskazówki jak dobrze przygotować się do rozmowy o pracę." 
                  to="/poradniki" 
                />
              </NavDropdown>

              <NavDropdown title="Dla pracodawcy">
                <DropdownItem 
                  icon={Briefcase} 
                  title="Rekrutacja" 
                  description="Opublikuj ogłoszenie i dotrzyj do zmotywowanych kandydatów." 
                  to="/dla-pracodawcy" 
                />
                <DropdownItem 
                  icon={Users} 
                  title="Baza talentów" 
                  description="Przeszukuj profile kandydatów otwartych na nowe propozycje." 
                  to="/baza-talentow" 
                />
                <DropdownItem 
                  icon={CreditCard} 
                  title="Cennik i pakiety" 
                  description="Poznaj przejrzyste plany dopasowane do skali Twojej firmy." 
                  to="/cennik" 
                />
                <DropdownItem 
                  icon={Award} 
                  title="Korzyści PFRON" 
                  description="Dowiedz się, jakie ulgi przysługują za zatrudnienie osób z orzeczeniem." 
                  to="/korzysci-pfron" 
                />
              </NavDropdown>

              <Link to="/o-nas" className="hover:text-emerald-400 transition-colors">
                O nas
              </Link>
              <Link to="/kontakt" className="hover:text-emerald-400 transition-colors">
                Kontakt
              </Link>
            </div>
            
            <div className="hidden sm:flex items-center gap-2 text-zinc-400 ml-4 border-l border-zinc-800 pl-6">
              <button 
                onClick={toggleHighContrast}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:text-white transition-colors text-zinc-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Przełącz wysoki kontrast"
                title="Wersja o wysokim kontraście"
              >
                <Eye className="w-4 h-4 text-emerald-500" />
                <span className="font-medium text-sm">Wysoki kontrast</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
