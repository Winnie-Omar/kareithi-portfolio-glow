
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import RevealOnScroll from './RevealOnScroll';
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save the form data to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);
        
      if (error) throw error;

      // Show success toast
      toast({
        title: "Message Sent",
        description: "Thank you for your message. I will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 page-gradient relative">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}></div>
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
                  <p className="font-medium text-gray-800 mb-1">Email:</p>
                  <a 
                    href="mailto:wanjiruk@wanjirukareithi.com" 
                    className="flex items-center text-pink hover:text-pink-dark transition-colors text-lg"
                  >
                    <Mail size={18} className="mr-2" />
                    wanjiruk@wanjirukareithi.com
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
                      <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="subject">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
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
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
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
