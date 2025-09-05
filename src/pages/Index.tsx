
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhatsAppBot from '@/components/WhatsAppBot';
import WelcomeModal from '@/components/WelcomeModal';

const Index = () => {
  useEffect(() => {
    document.title = "Dr. Wanjiru Kareithi - Home";
  }, []);
  
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main>
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
      </main>
      <Footer />
      <WhatsAppBot />
    </div>
  );
};

export default Index;
