/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CandidatePage } from './pages/CandidatePage';
import { EmployerPage } from './pages/EmployerPage';
import { JobsPage } from './pages/JobsPage';
import { JobInterestProvider } from './context/JobInterestContext';
import { AccessibilityWidget } from './components/AccessibilityWidget';

export default function App() {
  return (
    <JobInterestProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 scroll-smooth flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dla-kandydata" element={<CandidatePage />} />
              <Route path="/dla-pracodawcy" element={<EmployerPage />} />
              <Route path="/oferty-pracy" element={<JobsPage />} />
            </Routes>
          </main>
          <Footer />
          <AccessibilityWidget />
        </div>
      </BrowserRouter>
    </JobInterestProvider>
  );
}
