
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronUp, FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCVDialog, setShowCVDialog] = useState(false);
  const [cvPin, setCvPin] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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

  const handleCVRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple pin verification - in a real app, this would be more secure
    if (cvPin === '1985') {
      // Create a link to download the CV
      const link = document.createElement('a');
      link.href = '/Wanjiru_Kareithi_Resume.pdf';
      link.download = 'Wanjiru_Kareithi_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setShowCVDialog(false);
      setCvPin('');
      toast({
        title: "Access Granted",
        description: "Your download should start automatically.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "The PIN you entered is incorrect. Please try again.",
        variant: "destructive"
      });
    }
    setIsSubmitting(false);
  };

  const navItems = [
    { id: 'home', path: '/', label: 'Home' },
    { id: 'about', path: '/about', label: 'About' },
    { id: 'research', path: '/research', label: 'Research & Publications' },
    { id: 'portfolio', path: '/portfolio', label: 'Advocacy Work' },
    { id: 'contact', path: '/contact', label: 'Contact' },
    { id: 'cv', path: '#', label: 'CV', onClick: () => setShowCVDialog(true) },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <h1 className="font-playfair text-xl font-bold">
              <Link to="/" className="text-black hover:opacity-80 transition-opacity">
                Dr. Wanjiru Kareithi
              </Link>
            </h1>
            
            <div className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.id}>
                    {item.onClick ? (
                      <button
                        onClick={item.onClick}
                        className={`font-inter ${location.pathname === item.path ? 'text-black font-medium' : 'text-gray-700 hover:text-black'} transition-colors flex items-center gap-2`}
                      >
                        {item.id === 'cv' && <FileText size={16} />}
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`font-inter ${location.pathname === item.path ? 'text-black font-medium' : 'text-gray-700 hover:text-black'} transition-colors`}
                      >
                        {item.label}
                      </Link>
                    )}
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
        className={`fixed right-8 bottom-8 p-3 bg-black text-white rounded-full shadow-lg z-40 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>

      {/* CV Request Dialog */}
      <Dialog open={showCVDialog} onOpenChange={setShowCVDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>CV Access Request</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCVRequest}>
            <div className="py-4">
              <p className="text-sm text-gray-600 mb-4">
                Please enter the access PIN to download Dr. Wanjiru Kareithi's CV.
              </p>
              <Input 
                type="password" 
                value={cvPin} 
                onChange={(e) => setCvPin(e.target.value)} 
                placeholder="Enter PIN" 
                className="mb-2"
                required
              />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setShowCVDialog(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Verifying..." : "Download CV"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Mobile Menu Component
const MobileMenu = ({ navItems, activePath }: { 
  navItems: { id: string; path: string; label: string; onClick?: () => void }[], 
  activePath: string
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (onClick?: () => void) => {
    setIsOpen(false);
    if (onClick) onClick();
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
            item.onClick ? (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.onClick)}
                className={`block px-4 py-2 text-sm w-full text-left ${activePath === item.path ? 'text-black font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                <div className="flex items-center gap-2">
                  {item.id === 'cv' && <FileText size={14} />}
                  {item.label}
                </div>
              </button>
            ) : (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => handleItemClick()}
                className={`block px-4 py-2 text-sm ${activePath === item.path ? 'text-black font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default Navigation;
