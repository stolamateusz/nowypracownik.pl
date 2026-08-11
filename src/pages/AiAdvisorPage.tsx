import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Briefcase, FileText, ArrowLeft, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

type Message = {
  id: string;
  role: 'user' | 'model';
  text: string;
};

export function AiAdvisorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: 'Witaj! Jestem wirtualnym Doradcą Zawodowym na platformie nowypracownik.pl. W czym mogę Ci dzisiaj pomóc? Mogę przeanalizować Twoje CV, przygotować Cię do rozmowy o pracę lub odpowiedzieć na pytania dotyczące zatrudnienia z orzeczeniem.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, text: m.text }))
        })
      });

      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error || 'Request failed');

      const aiMsg: Message = { id: (Date.now() + 1).toString(), role: 'model', text: data.text };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      const errorMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: 'Przepraszam, wystąpił problem z połączeniem. Spróbuj zadać pytanie jeszcze raz za chwilę.' 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestPrompt = (text: string) => {
    setInput(text);
  };

  return (
    <div className="flex-grow bg-zinc-950 min-h-screen pt-20 flex flex-col">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-grow flex flex-col pt-8 pb-12">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link to="/" className="p-2 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Doradca Zawodowy AI</h1>
            <p className="text-sm text-zinc-400">Twoje wsparcie w karierze</p>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl flex-grow flex flex-col overflow-hidden shadow-xl">
          
          {/* Messages */}
          <div className="flex-grow p-6 overflow-y-auto flex flex-col gap-6 custom-scrollbar">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
                >
                  <div className={`w-10 h-10 shrink-0 rounded-2xl flex items-center justify-center border ${
                    msg.role === 'user' 
                      ? 'bg-zinc-800 border-zinc-700 text-white' 
                      : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                  }`}>
                    {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={`p-4 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-tr-sm'
                      : 'bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-tl-sm'
                  }`}>
                    <div className="prose prose-invert prose-emerald max-w-none text-sm whitespace-pre-wrap">
                      {msg.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 max-w-[85%]"
              >
                <div className="w-10 h-10 shrink-0 rounded-2xl flex items-center justify-center border bg-emerald-500/10 border-emerald-500/20 text-emerald-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-tl-sm flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                  <span className="text-sm">Analizuję...</span>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-zinc-950 border-t border-zinc-800">
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 mb-4">
                <button 
                  onClick={() => suggestPrompt('Jak przygotować CV, gdy mam długą przerwę w pracy ze względu na leczenie?')}
                  className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" /> Przerwa w CV
                </button>
                <button 
                  onClick={() => suggestPrompt('Jakie pytania mogą paść na rozmowie kwalifikacyjnej na stanowisko biurowe?')}
                  className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-1.5"
                >
                  <Briefcase className="w-3.5 h-3.5" /> Pytania rekrutacyjne
                </button>
                <button 
                  onClick={() => suggestPrompt('Czy muszę wpisywać w CV informacje o stopniu niepełnosprawności?')}
                  className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Prawa kandydata
                </button>
              </div>
            )}
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Zadaj pytanie o CV, rozmowę lub zatrudnienie..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl pl-5 pr-14 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 transition-colors shadow-inner"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-500 hover:bg-emerald-400 disabled:bg-zinc-800 disabled:text-zinc-500 text-zinc-950 rounded-xl transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <div className="text-center mt-3">
              <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">Powered by Gemini AI</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
