import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/layout/Navbar';
import ScrollHandler from './components/layout/ScrollHandler';
import Home from './components/Home';
import Business from './components/Business';
import ProjectsPage from './components/ProjectsPage';
import PublicationsPage from './components/PublicationsPage';
import AwardsPage from './components/AwardsPage';
import SkillsPage from './components/SkillsPage';
import CardPage from './components/CardPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    document.title = "Resume of Chenxi Ouyang";
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#FDFBF7] text-[#4A3B32] font-sans selection:bg-[#F2994A]/20 selection:text-[#4A3B32]">
        <Loader isLoading={isLoading} setIsLoading={setIsLoading} />
        <ScrollHandler />

        <Navbar />

        <main className="pt-16 min-h-[calc(100vh-180px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<div className="animate-fade-in py-8"><ProjectsPage /></div>} />
            <Route path="/publications" element={<div className="animate-fade-in py-8"><PublicationsPage /></div>} />
            <Route path="/awards" element={<div className="animate-fade-in py-8"><AwardsPage /></div>} />
            <Route path="/skills" element={<div className="animate-fade-in py-8"><SkillsPage /></div>} />
            <Route path="/business" element={<div className="animate-fade-in py-8"><Business /></div>} />
            <Route path="/card" element={<div className="animate-fade-in py-8"><CardPage /></div>} />
          </Routes>
        </main>

        <div data-slot="global-overlay" className="hidden" />
      </div>
    </Router>
  );
};

export default App;