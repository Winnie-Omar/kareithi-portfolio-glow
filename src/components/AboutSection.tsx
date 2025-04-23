
import RevealOnScroll from './RevealOnScroll';

const AboutSection = () => {
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
              <div className="relative overflow-hidden shadow-lg group max-w-xs mx-auto">
                <img 
                  src="/about.jpg" 
                  alt="Portrait of Dr. Wanjiru Kareithi" 
                  className="w-56 h-56 md:w-72 md:h-72 object-cover group-hover:scale-105 hover:scale-105 transition-transform duration-700 border-4 border-pink-dark shadow-lg"
                  style={{ borderRadius: "0.5rem" }} // subtle rounded corners, not circle
                />
              </div>
            </RevealOnScroll>
          </div>
          {/* Text Column */}
          <div className="w-full md:w-3/5">
            <RevealOnScroll delay={200}>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I'm a Postdoctoral Scholar in the Office of the Associate Dean of Access & Equity at Penn State's College of Arts and Architecture, with courtesy affiliations in African Studies and Women's, Gender, and Sexuality Studies.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  My research explores African women's leadership in higher education. I use decolonial feminist and indigenous frameworks, and I'm deeply invested in how knowledge systems can transform institutions. This is more than my profession—it's my passion.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I have over a decade of experience as a human rights lawyer, working in sub-Saharan Africa, Latin America, the UK, and around the world. My work centers on building equality, community, and dignity for those at the margins. Leadership, for me, is about partnership and impact—grounded in everyday experiences, including motherhood.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  My writing and research focus on civil, political, economic, social, and group rights, always with a view to creating more just and inclusive spaces for all. Let's connect and grow this work together.
                </p>
                <a 
                  href="/cv.pdf" 
                  download 
                  className="inline-flex items-center px-6 py-3 bg-pink-dark hover:bg-pink text-white font-medium rounded-md transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
        
        {/* Pillars of Purpose Section */}
        <div className="mt-20">
          <RevealOnScroll>
            <h3 className="text-2xl font-playfair font-bold text-pink-dark mb-8">Pillars of Purpose</h3>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {/* Justice */}
            <RevealOnScroll delay={100}>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full">
                <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">Justice</h4>
                <p className="text-gray-700">Advancing fair and inclusive systems through legal scholarship, research, teaching, and advocacy.</p>
              </div>
            </RevealOnScroll>
            
            {/* Empowerment */}
            <RevealOnScroll delay={200}>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full">
                <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">Empowerment</h4>
                <p className="text-gray-700">Educating, mentoring, and inspiring future leaders while creating spaces for diverse voices to thrive.</p>
              </div>
            </RevealOnScroll>
            
            {/* Community */}
            <RevealOnScroll delay={300}>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full">
                <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">Community</h4>
                <p className="text-gray-700">Building meaningful partnerships that foster connection, learning, and collective growth within and beyond academia.</p>
              </div>
            </RevealOnScroll>
            
            {/* Global Insight */}
            <RevealOnScroll delay={400}>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full">
                <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">Global Insight</h4>
                <p className="text-gray-700">Bridging local and global perspectives through research and dialogue to shape transformative leadership and critical thought.</p>
              </div>
            </RevealOnScroll>
            
            {/* Authenticity */}
            <RevealOnScroll delay={500}>
              <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full">
                <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">Authenticity</h4>
                <p className="text-gray-700">Rooted in lived experiences, including motherhood, and guided by a commitment to truth, empathy, and integrity in all aspects of my work.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
