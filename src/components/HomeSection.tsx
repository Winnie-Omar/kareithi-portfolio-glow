
import { ChevronDown } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const HomeSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center relative bg-ivory overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Column */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <RevealOnScroll>
              <div className="relative overflow-hidden rounded-lg shadow-xl group">
                <img 
                  src="/home.jpg" 
                  alt="Dr. Wanjiru Kareithi"
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110 hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </RevealOnScroll>
          </div>
          {/* Text Column */}
          <div className="w-full md:w-1/2 md:pl-12">
            <RevealOnScroll delay={200}>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Dr. Wanjiru Kareithi
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <div className="h-1 w-24 bg-gold mb-6"></div>
            </RevealOnScroll>
            <RevealOnScroll delay={600}>
              <h2 className="font-inter text-xl md:text-2xl text-gray-600 mb-6">
                Postdoctoral Scholar | Advocate | Human Rights Lawyer
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={800}>
              <p className="font-inter text-gray-700 mb-4">
                College of Arts &amp; Architecture, The Pennsylvania State University<br />
                124 Borland Building, University Park, PA 16802
              </p>
              <p className="mb-4">
                <a href="mailto:mqk6198@psu.edu" className="text-teal hover:text-gold transition-colors font-medium underline">
                  mqk6198@psu.edu
                </a>
              </p>
              <p className="font-inter text-gray-700">
                Research Interests: African and Black Diasporic Identities, postcolonial/transnational frameworks, Law and Policy, Cross-Sector Partnerships, Leadership.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToNextSection}>
        <div className="text-center text-sm text-gray-500 mb-2 font-inter">Scroll Down</div>
        <div className="animate-bounce-arrow text-gold">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
