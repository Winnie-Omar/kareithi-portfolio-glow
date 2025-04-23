
import RevealOnScroll from './RevealOnScroll';
import { useRef, useEffect, useState } from "react";

const roles = ["Legal Scholar", "Advocate", "Educator"];
const typeSpeed = 150; // Slightly slower type speed
const pauseBetweenRoles = 1500; // Longer pause between roles

const HomeSection = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const roleRef = useRef(roles[0]);

  useEffect(() => {
    let timeout: any;
    let role = roles[index];
    roleRef.current = role;
    if (displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), typeSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayed('');
        setIndex((prev) => (prev + 1) % roles.length);
      }, pauseBetweenRoles);
    }
    return () => clearTimeout(timeout);
  }, [displayed, index]);

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
    <section
      id="home"
      className="h-screen flex items-center relative bg-gradient-to-br from-[#FFE29F] via-[#FFA99F] to-[#FF719A] overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <RevealOnScroll>
              <div className="relative overflow-hidden shadow-xl group">
                <img 
                  src="/home.jpg" 
                  alt="Dr. Wanjiru Kareithi"
                  className="w-[500px] h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </RevealOnScroll>
          </div>
          <div className="w-full md:w-1/2 md:pl-12 text-left">
            <RevealOnScroll delay={200}>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-extrabold text-pink-dark mb-4 tracking-tight leading-tight">
                Dr. Wanjiru Kareithi
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={350}>
              <div className="mb-4">
                <span className="font-playfair text-xl md:text-2xl text-pink font-semibold tracking-tight fast-script transition-all">{displayed}<span className="blinking-cursor">|</span></span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <div className="h-1 w-24 bg-pink-dark mb-6"></div>
            </RevealOnScroll>
            <RevealOnScroll delay={600}>
              <p className="font-inter text-lg md:text-xl text-gray-900 mb-4 leading-relaxed">
                A human rights scholar, legal advocate, and community builder committed to advancing a grounded vision of justice and leadership.
              </p>
              <p className="font-inter text-lg text-gray-800 mb-4 leading-relaxed">
                Rooted in identity, heritage, and a deep commitment to service, I bring together law, education, and community advocacy to shape systems built on partnership, accountability, and mutual respect.
              </p>
              <p className="font-inter text-lg text-gray-800 mb-8 leading-relaxed">
                My leadership is guided by values of empathy, integrity, and the enduring strength of community, striving to uplift underrepresented voices and nurture transformative leadership.
              </p>
              <div>
                <button
                  className="font-inter text-pink-dark hover:text-pink border-b-2 border-pink-dark hover:border-pink text-lg font-medium underline underline-offset-2 transition-colors"
                  onClick={scrollToNextSection}
                  aria-label="Scroll Down to About"
                >
                  Learn More About Me ↓
                </button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToNextSection}>
        <div className="text-center text-sm text-pink-dark mb-2 font-inter">Scroll Down</div>
        <div className="animate-bounce-arrow text-pink-dark">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
