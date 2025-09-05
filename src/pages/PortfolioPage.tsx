
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/PortfolioSection';
import WhatsAppBot from '@/components/WhatsAppBot';

const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Dr. Wanjiru Kareithi - Portfolio";
  }, []);
  
  return (
    <div className="min-h-screen bg-soft-peach">
      <Navigation />
      <main className="pt-20">
        <PortfolioSection />
      </main>
      <Footer />
      <WhatsAppBot />
    </div>
  );
};

export default PortfolioPage;
