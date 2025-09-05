
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import WhatsAppBot from '@/components/WhatsAppBot';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Dr. Wanjiru Kareithi - Contact";
  }, []);
  
  return (
    <div className="min-h-screen bg-soft-purple">
      <Navigation />
      <main className="pt-20">
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppBot />
    </div>
  );
};

export default ContactPage;
