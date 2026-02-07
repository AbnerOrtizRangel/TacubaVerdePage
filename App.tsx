import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemAnalysis } from './components/ProblemAnalysis';
import { SolutionModel } from './components/SolutionModel';
import { ImpactDashboard } from './components/ImpactDashboard';
import { GetInvolved } from './components/GetInvolved';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-lime-300 selection:text-emerald-900">
      
      {/* Skip to content for accessibility */}
      <a 
        href="#main-content" 
        className="fixed top-4 left-4 z-[100] -translate-y-[150%] focus:translate-y-0 transition-transform bg-emerald-800 text-white px-6 py-3 rounded-lg font-bold shadow-xl"
      >
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id="main-content" className="flex flex-col">
        <Hero />
        <ProblemAnalysis />
        <SolutionModel />
        <ImpactDashboard />
        <GetInvolved />
      </main>

      <Footer />
    </div>
  );
};

export default App;