
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      // For the sticky nav
      setScrolled(window.scrollY > 50);
      
      // For the scroll to top button
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About' },
    { id: 'research', path: '/research', label: 'Research & Publications' },
    { id: 'portfolio', path: '/portfolio', label: 'Advocacy Work' },
    { id: 'contact', path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <h1 className="font-playfair text-xl font-bold">
              <Link to="/" className="text-gold hover:opacity-80 transition-opacity">
                Dr. Wanjiru Kareithi
              </Link>
            </h1>
            
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      className={`font-inter ${location.pathname === item.path ? 'text-gold font-medium' : 'text-gray-700 hover:text-gold'} transition-colors`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:hidden">
              <MobileMenu navItems={navItems} activePath={location.pathname} />
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
const MobileMenu = ({ navItems, activePath }: { 
  navItems: { id: string; path: string; label: string }[], 
  activePath: string
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
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
            <Link
              key={item.id}
              to={item.path}
              onClick={handleLinkClick}
              className={`block px-4 py-2 text-sm ${activePath === item.path ? 'text-gold font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
