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
    <footer className="py-8 page-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg">Dr. Wanjiru Kareithi</p>
            <p className="text-white/80 text-sm">Postdoctoral Scholar | Advocate | Human Rights Lawyer</p>
          </div>
          
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {socials.filter(s => s.name !== 'LinkedIn').map(({ icon: Icon, href, name }) => (
              <a key={name} href={href} className="text-white hover:text-white/80 transition-colors" target="_blank" rel="noopener noreferrer" aria-label={name}>
                <Icon size={24} />
              </a>
            ))}
          </div>
          
          <div className="text-white/80 text-sm text-center">
            <p>&copy; {currentYear} Dr. Wanjiru Kareithi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
