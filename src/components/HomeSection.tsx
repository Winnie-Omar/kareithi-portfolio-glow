
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
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <RevealOnScroll>
              <div className="relative overflow-hidden rounded-lg shadow-xl group max-w-xs md:max-w-sm mx-auto">
                <img 
                  src="/home.jpg" 
                  alt="Dr. Wanjiru Kareithi"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover transition-transform duration-700 group-hover:scale-105 hover:scale-105 border-4 border-pink-dark shadow-lg"
                />
                <div className="absolute inset-0 bg-pink/20 group-hover:bg-transparent transition-colors duration-500 rounded-full"></div>
              </div>
            </RevealOnScroll>
          </div>
          {/* Text Column */}
          <div className="w-full md:w-1/2 md:pl-12 text-left">
            <RevealOnScroll delay={200}>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-pink-dark mb-4">
                Hi, I'm Dr. Wanjiru Kareithi
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <div className="h-1 w-24 bg-pink-dark mb-6"></div>
            </RevealOnScroll>
            <RevealOnScroll delay={600}>
              <h2 className="font-inter text-xl md:text-2xl text-pink mb-6">
                Postdoctoral Scholar | Advocate | Human Rights Lawyer
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={800}>
              <p className="font-inter text-gray-700 mb-4">
                I am passionate about transforming higher education in Africa and beyond. My work bridges research, advocacy, and global engagement to champion equitable policies and empower women's leadership in academic spaces.
              </p>
              <p className="mb-4">
                <a href="mailto:mqk6198@psu.edu" className="text-pink-dark hover:text-pink transition-colors font-medium underline">
                  mqk6198@psu.edu
                </a>
              </p>
              <p className="font-inter text-gray-700 leading-relaxed">
                Join me as I explore how legal scholarship, decolonial feminism, and human rights practice can shape more inclusive academic and social communities.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToNextSection}>
        <div className="text-center text-sm text-pink-dark mb-2 font-inter">Scroll Down</div>
        <div className="animate-bounce-arrow text-pink-dark">
          {/* Use ChevronDown for scroll */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;

