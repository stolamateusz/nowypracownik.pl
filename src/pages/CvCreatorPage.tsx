import { motion } from 'motion/react';
import { FileText, Download, Upload, LayoutTemplate, Star, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

export function CvCreatorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-grow bg-zinc-950 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 mt-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-sm mb-4 border border-emerald-500/20 uppercase tracking-wider">
            Darmowe Narzędzie
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Kreator CV z myślą o Tobie</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Stwórz profesjonalne, czytelne i nowoczesne CV w kilka minut. Nasze szablony są dostosowane do wymagań pracodawców i przyjazne dla czytników ekranu (WCAG).
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: LayoutTemplate, title: "Profesjonalne Szablony", desc: "Wybierz spośród wielu układów, które automatycznie dopasowują się do treści." },
            { icon: Star, title: "Rekomendacje Ekspertów", desc: "Podpowiadamy, jak opisać umiejętności i doświadczenie, by zwrócić uwagę rekrutera." },
            { icon: Upload, title: "Import z LinkedIn", desc: "Zaoszczędź czas! Pobierz swoje dane bezpośrednio z profilu LinkedIn (wkrótce)." }
          ].map((feature, i) => (
            <div key={i} className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 text-center">
              <div className="w-16 h-16 bg-zinc-950 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-400 border border-emerald-500/20">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Builder Interactive Mockup */}
        <div className="bg-zinc-900 rounded-[2.5rem] border border-zinc-800 p-2 md:p-6 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Editor Sidebar */}
            <div className="lg:w-1/3 space-y-4">
              <div className="bg-zinc-950 p-6 rounded-3xl border border-zinc-800 h-full">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-emerald-500" /> Wypełnij dane
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Dane kontaktowe",
                    "Podsumowanie zawodowe",
                    "Doświadczenie",
                    "Wykształcenie",
                    "Umiejętności",
                    "Klauzula RODO"
                  ].map((step, i) => (
                    <button key={i} className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-colors border ${i === 0 ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800'}`}>
                      <span className="font-medium">{step}</span>
                      {i === 0 && <span className="w-2 h-2 rounded-full bg-emerald-500" />}
                      {i !== 0 && <CheckCircle className="w-5 h-5 text-zinc-600" />}
                    </button>
                  ))}
                </div>

                <button className="w-full mt-8 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Pobierz jako PDF
                </button>
              </div>
            </div>

            {/* Preview Pane */}
            <div className="lg:w-2/3 bg-zinc-950 rounded-3xl border border-zinc-800 p-8 flex items-center justify-center min-h-[600px] relative">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-800">
                    <FileText className="w-10 h-10 text-zinc-600" />
                  </div>
                  <p className="text-zinc-500 font-medium">Podgląd na żywo pojawi się tutaj,<br/>gdy zaczniesz uzupełniać dane.</p>
                </div>
              </div>
              {/* Dummy A4 Paper */}
              <div className="w-full max-w-lg aspect-[1/1.414] bg-white rounded-lg shadow-2xl opacity-10"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
