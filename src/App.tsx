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
import { AboutPage } from './pages/AboutPage';
import { PfronBenefitsPage } from './pages/PfronBenefitsPage';
import { CvCreatorPage } from './pages/CvCreatorPage';
import { TalentBasePage } from './pages/TalentBasePage';
import { PricingPage } from './pages/PricingPage';
import { GuidesPage } from './pages/GuidesPage';
import { ContactPage } from './pages/ContactPage';
import { AiAdvisorPage } from './pages/AiAdvisorPage';
import { JobInterestProvider } from './context/JobInterestContext';
import { AccessibilityWidget } from './components/AccessibilityWidget';

export default function App() {
  return (
    <JobInterestProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30 scroll-smooth flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dla-kandydata" element={<CandidatePage />} />
              <Route path="/dla-pracodawcy" element={<EmployerPage />} />
              <Route path="/oferty-pracy" element={<JobsPage />} />
              <Route path="/o-nas" element={<AboutPage />} />
              <Route path="/korzysci-pfron" element={<PfronBenefitsPage />} />
              <Route path="/kreator-cv" element={<CvCreatorPage />} />
              <Route path="/baza-talentow" element={<TalentBasePage />} />
              <Route path="/cennik" element={<PricingPage />} />
              <Route path="/poradniki" element={<GuidesPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/doradca-zawodowy" element={<AiAdvisorPage />} />
            </Routes>
          </main>
          <Footer />
          <AccessibilityWidget />
        </div>
      </BrowserRouter>
    </JobInterestProvider>
  );
}
