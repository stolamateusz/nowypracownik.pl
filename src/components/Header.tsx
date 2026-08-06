import { Link } from 'react-router-dom';
import { Phone, Users } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-xl border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <span className="font-semibold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              nowypracownik.pl
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6 text-zinc-400 font-medium">
              <Link to="/dla-kandydata" className="hover:text-emerald-400 transition-colors">Dla kandydata</Link>
              <Link to="/dla-pracodawcy" className="hover:text-emerald-400 transition-colors">Dla pracodawcy</Link>
              <Link to="/oferty-pracy" className="hover:text-emerald-400 transition-colors">Oferty pracy</Link>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-zinc-400 ml-4 border-l border-zinc-800 pl-6">
              <Phone className="w-5 h-5 text-emerald-500" />
              <span className="font-medium text-white">800 123 456</span>
            </div>
            <Link 
              to="/dla-kandydata#aplikuj"
              className="inline-flex items-center justify-center h-12 px-6 font-semibold text-zinc-950 transition-colors bg-emerald-500 rounded-xl hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              aria-label="Przejdź do formularza aplikacji"
            >
              Aplikuj teraz
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
