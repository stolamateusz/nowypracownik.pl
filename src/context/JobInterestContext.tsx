import React, { createContext, useContext, useState, useEffect } from 'react';

type JobInterests = Record<string, number>;

interface JobInterestContextType {
  interests: JobInterests;
  toggleInterest: (jobId: string) => void;
  hasInterest: (jobId: string) => boolean;
}

const defaultInterests: JobInterests = {
  '1': 145, // Programista IT
  '2': 82,  // Specjalista ds. Księgowości
  '3': 289, // Konsultant ds. Obsługi Klienta
  '4': 124, // Asystent HR
  '5': 156, // Analityk Danych
  '6': 92,  // Specjalista ds. Marketingu
  '7': 167, // Pracownik biurowy
  '8': 134, // Grafika komputerowa
  '9': 121, // Tester oprogramowania
  '10': 141, // Obsługa sklepu internetowego
};

const JobInterestContext = createContext<JobInterestContextType | undefined>(undefined);

export function JobInterestProvider({ children }: { children: React.ReactNode }) {
  const [userVotes, setUserVotes] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('user_job_votes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [interests, setInterests] = useState<JobInterests>(defaultInterests);

  useEffect(() => {
    localStorage.setItem('user_job_votes', JSON.stringify(userVotes));
    
    const newInterests = { ...defaultInterests };
    Object.keys(userVotes).forEach(jobId => {
      if (userVotes[jobId]) {
        newInterests[jobId] = (newInterests[jobId] || 0) + 1;
      }
    });
    setInterests(newInterests);
  }, [userVotes]);

  const toggleInterest = (jobId: string) => {
    setUserVotes(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  const hasInterest = (jobId: string) => !!userVotes[jobId];

  return (
    <JobInterestContext.Provider value={{ interests, toggleInterest, hasInterest }}>
      {children}
    </JobInterestContext.Provider>
  );
}

export function useJobInterests() {
  const context = useContext(JobInterestContext);
  if (context === undefined) {
    throw new Error('useJobInterests must be used within a JobInterestProvider');
  }
  return context;
}
