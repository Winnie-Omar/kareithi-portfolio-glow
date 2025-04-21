
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import ResearchSection from '@/components/ResearchSection';
import AdvocacySection from '@/components/AdvocacySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppChat from '@/components/WhatsAppChat';

const Index = () => {
  // Initialize scroll reveal for sections
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
    
    // Trigger once on load
    checkScroll();
    
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      
      <main>
        <HomeSection />
        <AboutSection />
        <ResearchSection />
        <AdvocacySection />
        <ContactSection />
      </main>
      
      <WhatsAppChat />
      <Footer />
    </div>
  );
};

export default Index;
