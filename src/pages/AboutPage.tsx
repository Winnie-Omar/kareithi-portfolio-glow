
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import WhatsAppBot from '@/components/WhatsAppBot';

const AboutPage = () => {
  useEffect(() => {
    document.title = "Dr. Wanjiru Kareithi - About";
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <AboutSection />
      </main>
      <WhatsAppBot />
    </div>
  );
};

export default AboutPage;
