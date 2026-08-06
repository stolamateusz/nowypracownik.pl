export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-semibold text-xl tracking-tight mb-2">
              nowypracownik.pl
            </span>
            <p className="text-sm text-zinc-500">
              Wspieramy osoby z niepełnosprawnościami na rynku pracy.
            </p>
          </div>
          
          <div className="text-sm text-center md:text-right">
            <p className="mb-1">© {new Date().getFullYear()} Właściciel: Osoba fizyczna.</p>
            <p className="text-zinc-500">Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
