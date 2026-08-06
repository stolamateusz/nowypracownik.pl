import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Calendar, Wallet, Heart, Users } from 'lucide-react';
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
  return (
    <section id="oferty" className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-sm mb-4 border border-emerald-500/20 uppercase tracking-wider">
            Aktualne rekrutacje
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Znajdź stanowisko dla siebie
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Przejrzyj nasze oferty pracy. Zapewniamy pełne wsparcie wdrożeniowe, niezbędny sprzęt oraz przejrzyste warunki zatrudnienia.
          </p>
        </div>

        <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 pb-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 custom-scrollbar relative">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        <div className="mt-6 text-center text-sm text-zinc-500 flex items-center justify-center gap-2">
          <span>Przewiń listę, aby zobaczyć więcej ofert</span>
        </div>
      </div>
    </section>
  );
}
