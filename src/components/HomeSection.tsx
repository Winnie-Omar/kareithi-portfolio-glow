
import RevealOnScroll from './RevealOnScroll';
import { useRef, useEffect, useState } from "react";

const roles = ["Scholar", "Advocate", "Educator"];
const typeSpeed = 150;
const pauseBetweenRoles = 1500;

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

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12 text-left">
            <RevealOnScroll>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                Dpr. Wanjiru Kareithi
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={350}>
              <div className="mb-4">
                <span className="font-playfair text-xl md:text-2xl text-white font-semibold tracking-tight fast-script transition-all">{displayed}<span className="blinking-cursor">|</span></span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <div className="h-1 w-24 bg-black mb-6"></div>
            </RevealOnScroll>
            <RevealOnScroll delay={600}>
              <p className="content-text mb-4 text-white">
                I am an educator, researcher, and practitioner from Kenya, deeply grounded in the values and traditions of my heritage. With expertise in law, policy, and community-centered partnerships, I bring a proudly rooted, Pan-African perspective to all that I do.
              </p>
              
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-white">
                Transforming education and advocacy through community-centered leadership
              </h2>
              <p className="content-text mb-4 text-white">
                Rooted in my identity, heritage, and a deep commitment to service, I bring together law, education, and community advocacy to help shape systems built on partnership, accountability, and mutual respect.
              </p>
              <p className="content-text mb-8 text-white">
                My approach to leadership is guided by deeply held values: empathy, integrity, and the enduring strength of community. In every space I engage, whether academic, or civic, I strive to uplift underrepresented voices and nurture leadership that serves and empowers.
              </p>
            </RevealOnScroll>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <RevealOnScroll>
              <div className="relative overflow-hidden shadow-xl rounded-lg max-w-md mx-auto group">
                <img src="/home.jpg" alt="Dr. Wanjiru Kareithi" className="w-full h-auto max-h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
