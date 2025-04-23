
import RevealOnScroll from './RevealOnScroll';
import { Linkedin } from "lucide-react";
import { useRef, useEffect, useState } from "react";

// Fast animated typewriter effect for subtitle
const roles = ["Legal Scholar", "Advocate", "Educator"];
const typeSpeed = 40; // ms per character
const pauseBetweenRoles = 600; // ms

const AnimatedScript = () => {
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
    // only re-run on display or index change
    // eslint-disable-next-line
  }, [displayed, index]);

  return (
    <span className="font-inter text-xl md:text-2xl text-pink font-semibold tracking-tight fast-script transition-all">{displayed}<span className="blinking-cursor">|</span></span>
  );
};

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
    <section
      id="home"
      className="h-screen flex items-center relative bg-gradient-to-br from-[#1A1F2C] via-[#FFE29F] to-[#FFDEE2] overflow-hidden"
      style={{
        backgroundImage:
          'linear-gradient(135deg, #1A1F2C 0%, #FFE29F 60%, #FFDEE2 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Column */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <RevealOnScroll>
              <div className="relative overflow-hidden shadow-xl group max-w-md md:max-w-lg mx-auto border-4 border-pink-dark">
                <img 
                  src="/home.jpg" 
                  alt="Dr. Wanjiru Kareithi"
                  className="w-[320px] h-[380px] md:w-[400px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105 hover:scale-105" 
                  style={{ borderRadius: "0" }}
                />
                <div className="absolute inset-0 bg-pink/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </RevealOnScroll>
          </div>
          {/* Text Column */}
          <div className="w-full md:w-1/2 md:pl-12 text-left">
            <RevealOnScroll delay={200}>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-extrabold text-pink-dark mb-4 tracking-tight leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                Dr. Wanjiru Kareithi
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={350}>
              <div className="flex items-center gap-4 mb-4">
                <AnimatedScript />
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-pink-dark h-8 w-8 hover:scale-110 transition-transform" />
                </a>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <div className="h-1 w-24 bg-pink-dark mb-6"></div>
            </RevealOnScroll>
            <RevealOnScroll delay={600}>
              <p className="font-inter text-lg md:text-xl text-gray-900 mb-4 leading-loose">
                I am committed to shaping a new vision for justice and leadership that is both bold and compassionate. As a passionate academic and advocate, I strive to build communities rooted in partnership and accountability. My work is deeply nourished by my identity, heritage, and the belief that real change starts with honest conversations and shared purpose.
              </p>
              <p className="font-inter text-lg text-gray-800 mb-4 leading-loose">
                By weaving together legal knowledge, community advocacy, and education, I aim to uplift underrepresented voices and foster transformative leadership. My journey as a mother continually informs my perspective—reminding me that effective leadership begins with empathy, and grows through service to community.
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
      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToNextSection}>
        <div className="text-center text-sm text-pink-dark mb-2 font-inter">Scroll Down</div>
        <div className="animate-bounce-arrow text-pink-dark">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Styles for blinking cursor in script */}
      <style>
        {`
        .blinking-cursor {
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .fast-script {
          font-family: 'Playfair Display', serif;
          letter-spacing: 1.5px;
        }
        `}
      </style>
    </section>
  );
};

export default HomeSection;
