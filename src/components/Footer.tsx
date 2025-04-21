
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-playfair text-lg">Dr. Wanjiru Kareithi</p>
            <p className="text-gray-400 text-sm">Postdoctoral Scholar | Advocate | Human Rights Lawyer</p>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>&copy; {currentYear} Dr. Wanjiru Kareithi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
