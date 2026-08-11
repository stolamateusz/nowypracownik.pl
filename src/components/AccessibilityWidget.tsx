import { useState, useEffect, useCallback } from 'react';
import { Type, Settings2, Moon, Eye, ZoomIn, ZoomOut, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(0); // 0, 1, 2
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [isReading, setIsReading] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize.toString());
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast-mode');
    } else {
      document.documentElement.classList.remove('high-contrast-mode');
    }
  }, [highContrast]);

  useEffect(() => {
    if (dyslexiaFont) {
      document.documentElement.classList.add('dyslexia-font');
    } else {
      document.documentElement.classList.remove('dyslexia-font');
    }
  }, [dyslexiaFont]);

  const handleReadScreen = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      alert('Twoja przeglądarka nie obsługuje czytania tekstu.');
      return;
    }

    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      return;
    }

    const textToRead = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'pl-PL';
    utterance.rate = 0.9;
    
    utterance.onend = () => setIsReading(false);
    
    window.speechSynthesis.speak(utterance);
    setIsReading(true);
  }, [isReading]);

  // Clean up speech synthesis on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 1, 2));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 1, 0));

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 left-0 bg-zinc-900 border border-zinc-700 rounded-2xl p-4 shadow-2xl mb-4 w-72 backdrop-blur-xl max-h-[80vh] overflow-y-auto custom-scrollbar"
          >
            <h3 className="text-white font-bold mb-4 text-lg border-b border-zinc-800 pb-2">Ułatwienia dostępu</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-zinc-400 text-sm mb-2 font-medium">Rozmiar tekstu</p>
                <div className="flex gap-2">
                  <button 
                    onClick={decreaseFontSize}
                    disabled={fontSize === 0}
                    className="flex-1 flex items-center justify-center py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:hover:bg-zinc-800 text-white rounded-lg transition-colors border border-zinc-700"
                    aria-label="Zmniejsz tekst"
                  >
                    <ZoomOut className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={increaseFontSize}
                    disabled={fontSize === 2}
                    className="flex-1 flex items-center justify-center py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:hover:bg-zinc-800 text-white rounded-lg transition-colors border border-zinc-700"
                    aria-label="Powiększ tekst"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <p className="text-zinc-400 text-sm mb-2 font-medium">Kontrast</p>
                <button 
                  onClick={() => setHighContrast(!highContrast)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-colors border ${highContrast ? 'bg-yellow-400 text-black border-yellow-500 font-bold' : 'bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700'}`}
                  aria-pressed={highContrast}
                >
                  <Eye className="w-5 h-5" />
                  {highContrast ? 'Wyłącz wysoki kontrast' : 'Włącz wysoki kontrast'}
                </button>
              </div>

              <div>
                <p className="text-zinc-400 text-sm mb-2 font-medium">Czytelność</p>
                <button 
                  onClick={() => setDyslexiaFont(!dyslexiaFont)}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-colors border mb-2 ${dyslexiaFont ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 font-bold' : 'bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700'}`}
                  aria-pressed={dyslexiaFont}
                >
                  <Type className="w-5 h-5" />
                  Czcionka dla dyslektyków
                </button>
              </div>

              <div>
                <p className="text-zinc-400 text-sm mb-2 font-medium">Czytnik ekranu</p>
                <button 
                  onClick={handleReadScreen}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-colors border ${isReading ? 'bg-violet-500/20 text-violet-400 border-violet-500/50 font-bold' : 'bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700'}`}
                  aria-pressed={isReading}
                >
                  {isReading ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  {isReading ? 'Zatrzymaj czytanie' : 'Czytaj na głos'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950"
        aria-label="Narzędzia ułatwień dostępu"
        aria-expanded={isOpen}
      >
        <Settings2 className="w-7 h-7" />
      </button>
    </div>
  );
}
