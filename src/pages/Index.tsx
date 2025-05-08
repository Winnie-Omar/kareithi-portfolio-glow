
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/HomeSection';
import WhatsAppBot from '@/components/WhatsAppBot';

const Index = () => {
  useEffect(() => {
    document.title = "Dr. Wanjiru Kareithi - Home";
  }, []);
  
  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main>
        <HomeSection />
      </main>
      <WhatsAppBot />
    </div>
  );
};

export default Index;
