
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ResearchSection from '@/components/ResearchSection';
import WhatsAppBot from '@/components/WhatsAppBot';

const ResearchPage = () => {
  useEffect(() => {
    document.title = "Dr. Wanjiru Kareithi - Research & Publications";
  }, []);
  
  return (
    <div className="min-h-screen bg-soft-green">
      <Navigation />
      <main className="pt-20">
        <ResearchSection />
      </main>
      <Footer />
      <WhatsAppBot />
    </div>
  );
};

export default ResearchPage;
