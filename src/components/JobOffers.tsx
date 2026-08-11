import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Calendar, Wallet, Heart, Users, Search, MapPin, Briefcase, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';
import { useJobInterests } from '../context/JobInterestContext';

function SectionAccordion({ title, items }: { title: string; items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-4 flex justify-between items-center text-left font-semibold text-zinc-200 hover:text-emerald-400 transition-colors"
      >
        {title}
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-emerald-500' : 'text-zinc-500'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <ul className="list-disc pl-5 pb-5 space-y-2 text-zinc-400">
              {items.map((item, i) => (
                <li key={i} className="pl-1 leading-relaxed">{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const JobCard: React.FC<{ job: typeof jobs[0] }> = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toggleInterest, hasInterest, interests } = useJobInterests();
  const isInterested = hasInterest(job.id);
  const totalInterests = interests[job.id] || 0;
  
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-sm hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all overflow-hidden group">
      <div 
        className="p-6 sm:p-8 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20 uppercase tracking-wider group-hover:bg-emerald-500/20 transition-colors">
              {job.industry}
            </span>
            <h3 className="text-xl font-bold text-white leading-tight group-hover:text-emerald-50 transition-colors">{job.title}</h3>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-400">
            <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">
              <Wallet className="w-4 h-4 text-emerald-500" />
              {job.salary}
            </div>
            <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">
              <Calendar className="w-4 h-4 text-emerald-500" />
              {job.startDate}
            </div>
            <div className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors text-zinc-300" title="Liczba osób zainteresowanych">
              <Users className="w-4 h-4 text-violet-400" />
              {totalInterests} zainteresowanych
            </div>
          </div>
        </div>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors shrink-0 sm:ml-4 ${isExpanded ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-950 text-zinc-500 group-hover:bg-zinc-800 group-hover:text-zinc-300'}`}>
           <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-zinc-800 bg-zinc-950/50"
          >
            <div className="p-6 sm:p-8">
              <SectionAccordion title="Dlaczego warto?" items={job.whyWorthIt} />
              <SectionAccordion title="Kogo szukamy?" items={job.whoAreWeLookingFor} />
              <SectionAccordion title="Co będziesz robić?" items={job.whatWillYouDo} />
              <SectionAccordion title="Co oferujemy?" items={job.whatWeOffer} />
              
              <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/dla-kandydata#aplikuj"
                  className="inline-flex items-center justify-center h-14 px-8 font-semibold text-zinc-950 transition-colors bg-emerald-500 rounded-xl hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-950 flex-1 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                >
                  Aplikuj na to stanowisko
                </Link>
                <button
                  onClick={(e) => { e.stopPropagation(); toggleInterest(job.id); }}
                  className={`inline-flex items-center justify-center h-14 px-8 font-semibold transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 flex-1 sm:flex-none ${isInterested ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 focus:ring-rose-500' : 'bg-zinc-800 text-white hover:bg-zinc-700 focus:ring-zinc-500'}`}
                  aria-pressed={isInterested}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isInterested ? 'fill-current' : ''}`} />
                  {isInterested ? 'Zgłoszono zainteresowanie' : 'Zgłoś zainteresowanie'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function JobOffers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Wszystkie');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);

  const industries = ['Wszystkie', ...Array.from(new Set(jobs.map(j => j.industry)))];

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            job.industry.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = selectedIndustry === 'Wszystkie' || job.industry === selectedIndustry;
      return matchesSearch && matchesIndustry;
    });
  }, [searchTerm, selectedIndustry]);

  return (
    <section id="oferty" className="py-12 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:w-1/3 xl:w-1/4 shrink-0">
            <div className="sticky top-24 bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              
              <div className="flex items-center justify-between lg:hidden mb-4">
                <h3 className="text-xl font-bold text-white">Filtry</h3>
                <button onClick={() => setShowFiltersMobile(!showFiltersMobile)} className="text-zinc-400 hover:text-white">
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`${showFiltersMobile ? 'block' : 'hidden'} lg:block space-y-8`}>
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Szukaj stanowiska</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                    <input 
                      type="text" 
                      placeholder="np. Księgowy..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Industry Filter */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-3">Branża</label>
                  <div className="space-y-2">
                    {industries.map(industry => (
                      <label key={industry} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center w-5 h-5">
                          <input 
                            type="radio" 
                            name="industry"
                            checked={selectedIndustry === industry}
                            onChange={() => setSelectedIndustry(industry)}
                            className="peer appearance-none w-5 h-5 border border-zinc-700 rounded bg-zinc-950 checked:bg-emerald-500 checked:border-emerald-500 transition-colors cursor-pointer"
                          />
                          <div className="absolute opacity-0 peer-checked:opacity-100 pointer-events-none text-zinc-950">
                            <svg className="w-3 h-3" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 5L4.5 8.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                        <span className="text-zinc-300 group-hover:text-white transition-colors">{industry}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mock filters for visual completeness */}
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-3">Lokalizacja</label>
                  <div className="space-y-2">
                    {['Zdalnie', 'Warszawa', 'Kraków', 'Wrocław', 'Poznań'].map(loc => (
                      <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="appearance-none w-5 h-5 border border-zinc-700 rounded bg-zinc-950 checked:bg-zinc-700 transition-colors cursor-pointer" />
                        <span className="text-zinc-500 group-hover:text-zinc-400 transition-colors">{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Job Listings Main Column */}
          <div className="lg:w-2/3 xl:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Znalezione oferty ({filteredJobs.length})</h2>
            </div>
            
            <div className="space-y-4 max-h-[1000px] overflow-y-auto pr-2 pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 custom-scrollbar">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="text-center py-20 bg-zinc-900/50 rounded-3xl border border-zinc-800">
                  <Search className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Brak wyników</h3>
                  <p className="text-zinc-400">Spróbuj zmienić kryteria wyszukiwania.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
