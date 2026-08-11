import { motion } from 'motion/react';
import { Search, Filter, MapPin, Briefcase, Award, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const mockCandidates = [
  { id: 1, role: "Frontend Developer", location: "Zdalnie", experience: "Mid", skills: ["React", "TypeScript", "Tailwind"], status: "Dostępny od zaraz" },
  { id: 2, role: "Specjalista ds. Księgowości", location: "Warszawa", experience: "Senior", skills: ["Pełna księgowość", "Optima", "VAT"], status: "1 miesiąc wypowiedzenia" },
  { id: 3, role: "Grafik Komputerowy", location: "Kraków / Zdalnie", experience: "Junior", skills: ["Photoshop", "Illustrator", "Figma"], status: "Dostępny od zaraz" },
  { id: 4, role: "Pracownik Biurowy", location: "Poznań", experience: "Entry", skills: ["Obsługa klienta", "Pakiet Office", "Angielski B2"], status: "Dostępny od zaraz" },
  { id: 5, role: "Analityk Danych", location: "Zdalnie", experience: "Mid", skills: ["SQL", "Python", "Tableau"], status: "2 tygodnie wypowiedzenia" },
  { id: 6, role: "Tester Oprogramowania", location: "Wrocław", experience: "Mid", skills: ["Manualne", "Postman", "Jira"], status: "Dostępny od zaraz" },
];

export function TalentBasePage() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-grow bg-zinc-950 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 mt-8 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Baza Talentów</h1>
            <p className="text-zinc-400 max-w-2xl text-lg">
              Przeglądaj zanonimizowane profile kandydatów z orzeczeniem o niepełnosprawności, otwartych na nowe wyzwania zawodowe.
            </p>
          </div>
          <div className="w-full md:w-auto flex gap-3">
            <button className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
              Złóż zapytanie o dostęp
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-grow relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
            <input 
              type="text"
              placeholder="Szukaj po stanowisku lub umiejętnościach..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
            />
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 text-zinc-300 px-6 py-3 rounded-xl hover:bg-zinc-800 transition-colors shrink-0">
              <MapPin className="w-5 h-5" /> Lokalizacja
            </button>
            <button className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 text-zinc-300 px-6 py-3 rounded-xl hover:bg-zinc-800 transition-colors shrink-0">
              <Filter className="w-5 h-5" /> Filtry
            </button>
          </div>
        </div>

        {/* Candidate Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-zinc-900/50 p-6 rounded-3xl border border-zinc-800 hover:border-violet-500/50 transition-colors group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-violet-500/10 text-violet-400 text-xs font-bold px-3 py-1 rounded-full border border-violet-500/20">
                  Kandydat #{candidate.id}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
                  <CheckCircle className="w-3 h-3" /> Orzeczenie
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{candidate.role}</h3>
              
              <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-6">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {candidate.location}</span>
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {candidate.experience}</span>
              </div>

              <div className="mb-6">
                <p className="text-xs text-zinc-500 font-medium mb-2 uppercase tracking-wider">Kluczowe kompetencje</p>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, i) => (
                    <span key={i} className="bg-zinc-950 border border-zinc-800 text-zinc-300 px-3 py-1 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-800 flex items-center justify-between mt-auto">
                <span className="text-sm text-zinc-500">{candidate.status}</span>
                <button className="text-violet-400 font-medium hover:text-violet-300 transition-colors text-sm flex items-center gap-1">
                  Zobacz szczegóły &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
