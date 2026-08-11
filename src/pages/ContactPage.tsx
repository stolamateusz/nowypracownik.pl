import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useEffect } from 'react';

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-grow bg-zinc-950 min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Skontaktuj się z nami</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Masz pytania dotyczące procesu rekrutacji, rozliczeń PFRON lub chcesz nawiązać współpracę? Jesteśmy do Twojej dyspozycji.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-8">Dane kontaktowe</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 text-emerald-400 p-3 rounded-xl border border-emerald-500/20 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-zinc-500 font-medium mb-1">Infolinia ogólna (Dla kandydatów)</p>
                    <p className="text-xl text-white font-bold">800 123 456</p>
                    <p className="text-sm text-zinc-500 mt-1">Czynna pn-pt w godz. 9:00 - 16:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-violet-500/10 text-violet-400 p-3 rounded-xl border border-violet-500/20 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-zinc-500 font-medium mb-1">Współpraca B2B (Dla pracodawców)</p>
                    <p className="text-xl text-white font-bold">biznes@nowypracownik.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-zinc-800 text-zinc-400 p-3 rounded-xl border border-zinc-700 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-zinc-500 font-medium mb-1">Biuro Główne</p>
                    <p className="text-white">ul. Dostępna 15</p>
                    <p className="text-white">00-001 Warszawa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof / Certification block */}
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800 flex items-center gap-6">
              <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800 shrink-0">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Osobiste Podejście</h4>
                <p className="text-zinc-400 text-sm">To autorski, niezależny portal tworzony z myślą o realnej pomocy. Odpowiadam na wiadomości najszybciej jak to możliwe.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Wyślij wiadomość</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Imię i nazwisko</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="Jan Kowalski" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Telefon (opcjonalnie)</label>
                  <input type="tel" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="+48 000 000 000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Adres email</label>
                <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" placeholder="jan@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Temat</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors">
                  <option>Szukam pracy / Mam pytanie jako kandydat</option>
                  <option>Chcę opublikować ogłoszenie (Pracodawca)</option>
                  <option>Pytanie o rozliczenia PFRON</option>
                  <option>Inne</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Wiadomość</label>
                <textarea rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none" placeholder="W czym możemy Ci pomóc?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4">
                <Send className="w-5 h-5" />
                Wyślij wiadomość
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
