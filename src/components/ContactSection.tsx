
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import RevealOnScroll from './RevealOnScroll';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a backend
    console.log('Form submitted:', formData);
    // Show success toast
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I will get back to you soon.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title">Get In Touch</h2>
        </RevealOnScroll>
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          {/* Left Column - Contact Info */}
          <div className="w-full md:w-1/3">
            <RevealOnScroll delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold mb-4">Contact Information</h3>
                <div className="mb-6">
                  <p className="font-medium text-gray-800 mb-1">Address:</p>
                  <p className="text-gray-700 text-sm">
                    College of Arts &amp; Architecture,<br />
                    The Pennsylvania State University<br />
                    124 Borland Building<br />
                    University Park, PA 16802
                  </p>
                </div>
                <div className="mb-6">
                  <p className="font-medium text-gray-800 mb-1">Email:</p>
                  <a 
                    href="mailto:mqk6198@psu.edu" 
                    className="flex items-center text-pink hover:text-pink-dark transition-colors"
                  >
                    <Mail size={18} className="mr-2" />
                    mqk6198@psu.edu
                  </a>
                </div>
                <div className="mb-6">
                  <p className="font-medium text-gray-800 mb-1">Affiliations:</p>
                  <ul className="ml-4 list-disc text-gray-700 text-sm">
                    <li>Law Society of Kenya (LSK)</li>
                    <li>American Bar Association (ABA)</li>
                    <li>African Studies Association (ASA)</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <a 
                    href="/cv.pdf" 
                    download
                    className="flex items-center bg-pink-dark hover:bg-pink text-white py-2 px-4 rounded-md transition-colors w-full justify-center"
                  >
                    <Download size={18} className="mr-2" />
                    Download CV
                  </a>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold mb-4">Academic &amp; Professional Profiles</h3>
                <div className="space-y-3">
                  <a 
                    href="https://scholar.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-pink hover:text-pink-dark transition-colors"
                  >
                    Google Scholar
                  </a>
                  <a 
                    href="https://www.researchgate.net" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-pink hover:text-pink-dark transition-colors"
                  >
                    ResearchGate
                  </a>
                  <a 
                    href="https://orcid.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-pink hover:text-pink-dark transition-colors"
                  >
                    ORCID
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          {/* Right Column - Contact Form */}
          <div className="w-full md:w-2/3">
            <RevealOnScroll delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="font-playfair text-xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="message">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full resize-none"
                      />
                    </div>
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full bg-pink-dark hover:bg-pink text-white transition-colors"
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
