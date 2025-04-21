
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socials = [
    { icon: Facebook, href: "https://facebook.com", name: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", name: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", name: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", name: "Twitter" }
  ];

  return (
    <footer className="py-8 bg-pink-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-playfair text-lg">Dr. Wanjiru Kareithi</p>
            <p className="text-pink-light text-sm">Postdoctoral Scholar | Advocate | Human Rights Lawyer</p>
          </div>
          
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {socials.map(({ icon: Icon, href, name }) => (
              <a key={name} href={href} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label={name}>
                <Icon size={24} />
              </a>
            ))}
          </div>
          
          <div className="text-pink-light text-sm text-center">
            <p>&copy; {currentYear} Dr. Wanjiru Kareithi. All rights reserved.</p>
            <a 
              href="/cv.pdf" 
              download
              className="inline-block mt-1 underline underline-offset-2 hover:text-pink"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
