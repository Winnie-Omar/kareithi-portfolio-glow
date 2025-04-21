
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // For the sticky nav
      setScrolled(window.scrollY > 50);
      
      // For the scroll to top button
      setShowScrollTop(window.scrollY > 500);
      
      // For active nav item
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research & Publications' },
    { id: 'advocacy', label: 'Advocacy Work' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <h1 className="font-playfair text-xl font-bold">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-gold hover:opacity-80 transition-opacity">
                Dr. Wanjiru Kareithi
              </a>
            </h1>
            
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                      className={`font-inter ${activeSection === item.id ? 'text-gold font-medium' : 'text-gray-700 hover:text-gold'} transition-colors`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:hidden">
              <MobileMenu navItems={navItems} scrollToSection={scrollToSection} activeSection={activeSection} />
            </div>
          </nav>
        </div>
      </header>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 p-3 bg-gold text-white rounded-full shadow-lg z-40 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
};

// Mobile Menu Component
const MobileMenu = ({ navItems, scrollToSection, activeSection }: { 
  navItems: { id: string; label: string }[], 
  scrollToSection: (id: string) => void,
  activeSection: string
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <div>
      <button 
        onClick={toggleMenu} 
        className="text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-0.5 bg-gray-700 my-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-700 my-1.5"></div>
        <div className="w-6 h-0.5 bg-gray-700 my-1.5"></div>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick(item.id); }}
              className={`block px-4 py-2 text-sm ${activeSection === item.id ? 'text-gold font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
