import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { NavBar } from './components/NavBar';
import { DynamicBackground } from './components/DynamicBackground';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { AudienceSection } from './components/AudienceSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { AssessmentPage } from './pages/AssessmentPage';
import { SuccessPage } from './pages/SuccessPage';
import { NotFoundPage } from './pages/404';
import { AIReadinessAssessmentPage } from './pages/services/AIReadinessAssessmentPage';
import { MississippiAIStarterKitPage } from './pages/services/MississippiAIStarterKitPage';
import { AIStrategyWorkshopPage } from './pages/services/AIStrategyWorkshopPage';
import { PrivateAITrainingPage } from './pages/services/PrivateAITrainingPage';
import { AIEnhancedWebDesignPage } from './pages/services/AIEnhancedWebDesignPage';
import { CustomAIAssistantsPage } from './pages/services/CustomAIAssistantsPage';
import { AIPoweredDashboardsPage } from './pages/services/AIPoweredDashboardsPage';
import { StarkvilleAIWorkshopPage } from './pages/services/StarkvilleAIWorkshopPage';
import { SmallBusinessPage } from './pages/areas/SmallBusinessPage';
import { NonprofitPage } from './pages/areas/NonprofitPage';
import { GovernmentPage } from './pages/areas/GovernmentPage';
import { StartupsSolopreneursPage } from './pages/areas/StartupsSolopreneursPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { AIContentJumpstartPage } from './pages/AIContentJumpstartPage';
import { ExternalLink } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-[hsla(210,100%,20%,1)] via-[hsla(220,80%,35%,1)] to-[hsla(230,95%,30%,1)]">
        <DynamicBackground />
        <NavBar scrolled={scrolled} />
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <AudienceSection />
               <ServicesSection />
               <AboutSection />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesOverviewPage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/services/ai-readiness-assessment" element={<AIReadinessAssessmentPage />} />
            <Route path="/services/mississippi-ai-starter-kit" element={<MississippiAIStarterKitPage />} />
            <Route path="/services/ai-strategy-workshop" element={<AIStrategyWorkshopPage />} />
            <Route path="/services/private-ai-training" element={<PrivateAITrainingPage />} />
            <Route path="/services/ai-enhanced-web-design" element={<AIEnhancedWebDesignPage />} />
            <Route path="/services/custom-ai-assistants" element={<CustomAIAssistantsPage />} />
            <Route path="/services/ai-powered-dashboards" element={<AIPoweredDashboardsPage />} />
            <Route path="/services/starkville-ai-workshop" element={<StarkvilleAIWorkshopPage />} />
            <Route path="/small-business" element={<SmallBusinessPage />} />
            <Route path="/nonprofits" element={<NonprofitPage />} />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="/startups-solopreneurs" element={<StartupsSolopreneursPage />} />
            <Route path="/ai-content-jumpstart" element={<AIContentJumpstartPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(75, 0, 127, 0.9)',
              color: 'white',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;