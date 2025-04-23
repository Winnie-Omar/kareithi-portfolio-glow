
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ResearchSection from '@/components/ResearchSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppBot from '@/components/WhatsAppBot';
import WelcomeModal from '@/components/WelcomeModal';

const Index = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const checkScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-ivory">
      <WelcomeModal />
      <Navigation />
      <main>
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <WhatsAppBot />
      <Footer />
    </div>
  );
};

export default Index;
