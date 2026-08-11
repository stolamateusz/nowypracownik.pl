export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 border-b border-zinc-900 pb-12">
          
          <div className="col-span-2 md:col-span-1">
            <span className="text-white font-semibold text-xl tracking-tight mb-4 block">
              nowypracownik.pl
            </span>
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
              Profesjonalny portal rynku pracy dla osób z orzeczeniem o niepełnosprawności i pracodawców z obszaru otwartego rynku pracy oraz Zakładów Pracy Chronionej.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-zinc-950 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-zinc-950 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Dla kandydata</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="/oferty-pracy" className="hover:text-emerald-400 transition-colors">Oferty pracy wg branż</a></li>
              <li><a href="/kreator-cv" className="hover:text-emerald-400 transition-colors">Bezpłatny kreator CV</a></li>
              <li><a href="/poradniki" className="hover:text-emerald-400 transition-colors">Prawa pracownika</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Praca zdalna</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Jak uzyskać orzeczenie?</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Dla pracodawcy</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="/dla-pracodawcy" className="hover:text-emerald-400 transition-colors">Dodaj ogłoszenie</a></li>
              <li><a href="/baza-talentow" className="hover:text-emerald-400 transition-colors">Wyszukiwarka kandydatów</a></li>
              <li><a href="/korzysci-pfron" className="hover:text-emerald-400 transition-colors">Kalkulator wpłat na PFRON</a></li>
              <li><a href="/cennik" className="hover:text-emerald-400 transition-colors">Cennik usług</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Szkolenia z dostępności</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Baza wiedzy i prawo</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Dofinansowania SODiR</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Kodeks Pracy 2026</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Dostępność cyfrowa (WCAG)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Wyposażenie stanowiska</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Aktualności prawne</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Firma</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="/o-nas" className="hover:text-emerald-400 transition-colors">O nas</a></li>
              <li><a href="/kontakt" className="hover:text-emerald-400 transition-colors">Kontakt i Pomoc</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Współpraca B2B</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Regulamin serwisu</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Polityka prywatności</a></li>
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Właściciel: Osoba fizyczna. Serwis niezależny, niepowiązany z organami administracji publicznej.</p>
          <div className="flex gap-6">
            <span>Wersja serwisu: 2.4.0</span>
            <a href="#" className="hover:text-emerald-500 transition-colors flex items-center gap-1">
               Zgłoś błąd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
