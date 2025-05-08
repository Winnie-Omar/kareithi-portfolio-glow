
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
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
      <WhatsAppBot />
    </div>
  );
};

export default ResearchPage;
