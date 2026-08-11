import { motion } from 'motion/react';
import { Calculator, TrendingDown, PiggyBank, Briefcase, FileCheck, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function PfronBenefitsPage() {
  const [employees, setEmployees] = useState<number>(50);
  const [disabledEmployees, setDisabledEmployees] = useState<number>(0);
  const [averageWage, setAverageWage] = useState<number>(8147.38); // Przeciętne wynagrodzenie Q1 2024
  const [purchasesReduction, setPurchasesReduction] = useState<number>(0);
  const [isEducation, setIsEducation] = useState<boolean>(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const requiredIndicator = isEducation ? 0.02 : 0.06;
  const requiredDisabled = employees * requiredIndicator;
  const missingDisabled = Math.max(0, requiredDisabled - disabledEmployees);
  const penaltyPerEmployee = 0.4065 * averageWage;
  
  const basePenalty = missingDisabled * penaltyPerEmployee;
  const maxReduction = basePenalty * 0.5;
  const appliedReduction = Math.min(purchasesReduction, maxReduction);
  const finalPenalty = Math.max(0, basePenalty - appliedReduction);

  // Calculate savings if they hire one more disabled person
  const basePenaltyIfOneMore = Math.max(0, (requiredDisabled - (disabledEmployees + 1))) * penaltyPerEmployee;
  const savingPerHire = basePenalty - basePenaltyIfOneMore;

  return (
    <div className="flex-grow bg-zinc-950 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 mt-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-violet-500/10 text-violet-400 font-medium text-sm mb-4 border border-violet-500/20 uppercase tracking-wider">
            Optymalizacja Kosztów PFRON
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Kalkulator Wpłat na PFRON <br/><span className="text-violet-400">Zobacz ile możesz zaoszczędzić</span></h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Zatrudniasz co najmniej 25 pracowników? Zobacz, jak zatrudnienie osób z orzeczeniem i korzystanie z ulg może obniżyć Twoje obowiązkowe składki.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Informative Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-violet-500/20 p-3 rounded-xl text-violet-400">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Zasady obliczania wpłat</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed text-sm mb-4">
                Zgodnie z art. 21 ustawy o rehabilitacji, pracodawca zatrudniający od 25 pracowników (w przeliczeniu na etaty), który nie osiąga wskaźnika zatrudnienia osób niepełnosprawnych (standardowo <strong>6%</strong>, dla edukacji <strong>2%</strong>), wnosi wpłaty na PFRON.
              </p>
              <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-sm text-zinc-300">
                <span className="block text-violet-400 font-medium mb-1">Wzór na wpłatę bazową:</span>
                (Brakuje etatów) × 40,65% × Przeciętne wynagrodzenie
              </div>
            </div>

            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-6">Jak obniżyć koszty?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <span className="text-zinc-200 font-medium block">Zatrudnienie osób z orzeczeniem</span>
                    <span className="text-zinc-400 text-sm">Zwiększenie wskaźnika zatrudnienia zmniejsza "brakujące etaty".</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <span className="text-zinc-200 font-medium block">Schorzenia szczególne</span>
                    <span className="text-zinc-400 text-sm">Osoby ze schorzeniami szczególnymi mogą obniżyć wymagany wskaźnik poniżej 6%.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <span className="text-zinc-200 font-medium block">Ulgi we wpłatach (zakupy)</span>
                    <span className="text-zinc-400 text-sm">Zakup usług lub produktów od uprawnionych pracodawców obniża wpłatę (max o 50%).</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Calculator Section */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-zinc-800">
                <Calculator className="w-8 h-8 text-violet-400" />
                <h2 className="text-2xl font-bold text-white">Zaawansowany Symulator</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="md:col-span-2">
                  <label className="flex items-center justify-between text-sm font-medium text-zinc-400 mb-2">
                    Przeciętne wynagrodzenie (GUS)
                    <span className="text-xs text-zinc-500">Np. Q1 2024: 8147,38 zł</span>
                  </label>
                  <div className="relative">
                    <input 
                      type="number" 
                      step="0.01"
                      value={averageWage}
                      onChange={(e) => setAverageWage(parseFloat(e.target.value) || 0)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-4 pr-12 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">PLN</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Liczba pracowników (etaty)
                  </label>
                  <input 
                    type="number" 
                    min="25" 
                    value={employees}
                    onChange={(e) => setEmployees(parseFloat(e.target.value) || 0)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Zatrudnieni z orzeczeniem (etaty)
                  </label>
                  <input 
                    type="number" 
                    min="0"
                    step="0.1"
                    max={employees}
                    value={disabledEmployees}
                    onChange={(e) => setDisabledEmployees(parseFloat(e.target.value) || 0)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center gap-3 cursor-pointer group p-4 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-violet-500/50 transition-colors">
                    <div className="relative flex items-center justify-center w-5 h-5">
                      <input 
                        type="checkbox" 
                        checked={isEducation}
                        onChange={(e) => setIsEducation(e.target.checked)}
                        className="peer appearance-none w-5 h-5 border border-zinc-700 rounded bg-zinc-900 checked:bg-violet-500 checked:border-violet-500 transition-colors cursor-pointer"
                      />
                      <div className="absolute opacity-0 peer-checked:opacity-100 pointer-events-none text-white">
                        <svg className="w-3 h-3" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="text-zinc-300 group-hover:text-white transition-colors block font-medium">Uczelnia, szkoła, przedszkole lub placówka opiekuńcza</span>
                      <span className="text-zinc-500 text-xs">Wymagany wskaźnik wynosi 2% zamiast 6%</span>
                    </div>
                  </label>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Kwota przysługującej ulgi z tytułu zakupów (PLN)
                  </label>
                  <div className="relative">
                    <input 
                      type="number" 
                      min="0"
                      value={purchasesReduction}
                      onChange={(e) => setPurchasesReduction(parseFloat(e.target.value) || 0)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-4 pr-12 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 font-medium">PLN</span>
                  </div>
                  {purchasesReduction > maxReduction && (
                    <p className="text-amber-500 text-xs mt-2 flex items-center gap-1">
                      <Info className="w-4 h-4" />
                      Wykorzystano maksymalny limit ulgi (50% wpłaty bazowej). Niewykorzystana kwota przechodzi na kolejne miesiące (max do 6 msc).
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Results Block */}
            <div className="bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-bl-full pointer-events-none blur-3xl" />
              
              <div className="p-8 relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">Podsumowanie wyliczeń</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-zinc-800/50">
                    <span className="text-zinc-400">Wymagana liczba etatów ({requiredIndicator * 100}%):</span>
                    <span className="text-white font-medium">{requiredDisabled.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-800/50">
                    <span className="text-zinc-400">Brakuje etatów:</span>
                    <span className="text-white font-medium">{missingDisabled.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-zinc-800/50">
                    <span className="text-zinc-400">Wpłata bazowa:</span>
                    <span className="text-white font-medium">{basePenalty.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} PLN</span>
                  </div>
                  {purchasesReduction > 0 && (
                    <div className="flex justify-between items-center py-3 border-b border-zinc-800/50 text-emerald-400">
                      <span>Odliczona ulga za zakupy:</span>
                      <span className="font-medium">- {appliedReduction.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} PLN</span>
                    </div>
                  )}
                </div>

                <div className="bg-zinc-950 rounded-2xl p-6 border border-violet-500/30 text-center shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  <p className="text-violet-400 mb-2 font-bold uppercase tracking-wider text-sm">Ostateczna wpłata miesięczna</p>
                  <div className="text-5xl font-bold text-white mb-2">
                    {finalPenalty.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-2xl text-zinc-500">PLN</span>
                  </div>
                  <div className="text-sm text-zinc-500 mt-4 pt-4 border-t border-zinc-800">
                    Rocznie to około: <span className="text-zinc-300 font-bold">{(finalPenalty * 12).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} PLN</span>
                  </div>
                </div>

                {savingPerHire > 0 && (
                  <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-start gap-4">
                    <PiggyBank className="w-8 h-8 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-1">Potencjał oszczędności</h4>
                      <p className="text-emerald-400/80 text-sm">
                        Zatrudnienie zaledwie <strong>jednej</strong> dodatkowej osoby z orzeczeniem zmniejszy Twoją miesięczną wpłatę o około <strong>{savingPerHire.toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} PLN</strong>. W skali roku to <strong>{(savingPerHire * 12).toLocaleString('pl-PL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} PLN</strong> oszczędności!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-5 rounded-2xl transition-colors text-lg flex justify-center items-center gap-2">
              Dodaj bezpłatne ogłoszenie o pracę <ArrowRight className="w-5 h-5" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
