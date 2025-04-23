
import RevealOnScroll from './RevealOnScroll';

const AboutSection = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      window.scrollTo({
        top: portfolioSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title text-pink-dark">About Me</h2>
        </RevealOnScroll>
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          {/* Image Column */}
          <div className="w-full md:w-2/5 flex justify-center">
            <RevealOnScroll>
              <div className="relative overflow-hidden shadow-lg group max-w-md mx-auto border-4 border-pink-dark">
                <img 
                  src="/about.jpg" 
                  alt="Portrait of Dr. Wanjiru Kareithi" 
                  className="w-[320px] h-[380px] md:w-[400px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105 hover:scale-105"
                  style={{ borderRadius: "0" }}
                />
              </div>
            </RevealOnScroll>
          </div>
          {/* Text Column */}
          <div className="w-full md:w-3/5">
            <RevealOnScroll delay={200}>
              <div className="prose prose-lg max-w-none font-inter">
                <p className="text-gray-800 mb-4 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: '1.3em' }}>
                  As a postdoctoral scholar at Penn State, my focus weaves together law, education, and advocacy, always informed by a deep connection to African leadership and community values.
                </p>
                <p className="text-gray-800 mb-4 leading-relaxed">
                  My scholarly path has taken me across continents—studying, teaching, and building justice-driven networks from sub-Saharan Africa to Latin America and the UK. I am passionate about reimagining what inclusive, transformative leadership looks like, centering the lived realities of women and marginalized groups.
                </p>
                <p className="text-gray-800 mb-4 leading-relaxed">
                  Whether in the classroom or community, my goal is to create vibrant spaces where dialogue, learning, and solidarity flourish. The insights I gain as a legal scholar, advocate, and mother inspire me to lead with integrity and care, striving for excellence in every partnership.
                </p>
                <div>
                  <button
                    className="inline-flex items-center px-6 py-3 bg-pink-dark hover:bg-pink text-white font-medium rounded-md transition-colors duration-300 mt-4"
                    onClick={scrollToPortfolio}
                    aria-label="Scroll Down to Portfolio"
                  >
                    See My Work
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
        
        {/* Pillars of Purpose Section */}
        <div className="mt-20">
          <RevealOnScroll>
            <h3 className="text-2xl font-playfair font-bold text-pink-dark mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Pillars of Purpose</h3>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Justice */}
            <RevealOnScroll delay={100}>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full">
                <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">Justice</h4>
                <p className="text-gray-700">
                  Championing equitable systems through legal thought and advocacy—pursuing fairness across research, teaching, and action.
                </p>
              </div>
            </RevealOnScroll>
            
            {/* Empowerment */}
            <RevealOnScroll delay={200}>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full">
                <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">Empowerment</h4>
                <p className="text-gray-700">
                  Uplifting diverse voices and supporting the next generation of leaders so they thrive in every sphere.
                </p>
              </div>
            </RevealOnScroll>
            
            {/* Community */}
            <RevealOnScroll delay={300}>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full">
                <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">Community</h4>
                <p className="text-gray-700">
                  Building lasting partnerships that nurture connection and collective learning—within and beyond academia.
                </p>
              </div>
            </RevealOnScroll>
            
            {/* Global Insight */}
            <RevealOnScroll delay={400}>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full">
                <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">Global Insight</h4>
                <p className="text-gray-700">
                  Fusing local and global perspectives through scholarship and exchange—shaping transformation and critical dialogue.
                </p>
              </div>
            </RevealOnScroll>
            
            {/* Authenticity */}
            <RevealOnScroll delay={500}>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full">
                <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">Authenticity</h4>
                <p className="text-gray-700">
                  Leading with empathy and honesty—grounded in the power of lived experience, family, and an unwavering commitment to truth.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
