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
        setIndex(prev => (prev + 1) % roles.length);
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
  return <section id="home" className="h-screen flex items-center relative overflow-hidden" style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070")',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/90 via-[#C5A028]/80 to-[#B8860B]/70 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <RevealOnScroll>
              <div className="relative overflow-hidden shadow-xl group">
                <img src="/home.jpg" alt="Dr. Wanjiru Kareithi" className="w-[500px] h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
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
              <p className="content-text mb-4">
                I'm Dr. Wanjiru Kareithi, a human rights scholar, legal advocate, and community builder committed to advancing a grounded vision of justice and leadership.
              </p>
              <div className="section-banner bg-[#6c6c08]/0">
                <p className="content-text font-medium text-pink-dark">
                  Transforming legal education and advocacy through community-centered leadership
                </p>
              </div>
              <p className="content-text mb-4">
                Rooted in my identity, heritage, and a deep commitment to service, I bring together law, education, and community advocacy to help shape systems built on partnership, accountability, and mutual respect.
              </p>
              <p className="content-text mb-8">
                My approach to leadership is guided by deeply held values—empathy, integrity, and the enduring strength of community. In every space I engage, whether academic, legal, or civic, I strive to uplift underrepresented voices and nurture leadership that serves and empowers.
              </p>
              
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
    </section>;
};
export default HomeSection;