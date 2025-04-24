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
    <section id="about" className="py-20 page-gradient">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title text-pink-dark">About Me</h2>
        </RevealOnScroll>
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="w-full md:w-2/5 flex justify-center">
            <RevealOnScroll>
              <div className="relative overflow-hidden shadow-lg group">
                <img 
                  src="/about.jpg" 
                  alt="Portrait of Dr. Wanjiru Kareithi" 
                  className="w-[500px] h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </RevealOnScroll>
          </div>
          <div className="w-full md:w-3/5">
            <RevealOnScroll delay={200}>
              <div className="prose prose-lg max-w-none">
                <p className="content-text font-playfair mb-4">
                  Dr. Wanjiru Kareithi is an educator, researcher, and legal practitioner with expertise in law, policy, and community-centered partnerships.
                </p>
                <p className="content-text mb-4">
                  With more than twelve years of experience, she has contributed to initiatives across academic, legal, and civil society sectors, supporting systems change and public interest innovation. Her teaching and program design emphasizes leadership development, critical inquiry, and collaborative problem-solving.
                </p>
                <div className="section-banner">
                  <p className="content-text font-medium text-pink-dark">
                    Bridging Theory and Practice in Legal Education and Advocacy
                  </p>
                </div>
                <p className="content-text mb-4">
                  Based in the United States, Dr. Kareithi engages in interdisciplinary work that integrates legal research, education, and advocacy, drawing on leadership philosophies and community values that inform her commitment to social transformation.
                </p>
                <p className="content-text mb-4">
                  Her scholarship spans peer-reviewed journals, policy platforms, and public writing, addressing reproductive justice, international law, feminist legal theory, and social equity. She regularly contributes to academic and practitioner conversations through public speaking, writing, and facilitation and has held advisory and expert roles across a range of advocacy and policy environments.
                </p>
                <p className="content-text mb-4">
                  She holds advanced legal training and professional licensure and is an active member of several academic and legal associations. Her research and practice are grounded in values-driven leadership, informed by lived experience, and committed to fostering dialogue, reflection, and ethical engagement in both institutional and community settings.
                </p>
                <div>
                  <button
                    className="inline-flex items-center px-6 py-3 bg-pink-dark hover:bg-pink text-white font-medium rounded-md transition-colors duration-300 mt-4"
                    onClick={scrollToPortfolio}
                    aria-label="See My Work"
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
        
        <div className="mt-20">
          <RevealOnScroll>
            <h3 className="text-2xl font-playfair font-bold text-pink-dark mb-8">Pillars of Purpose</h3>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {pillarsOfPurpose.map((pillar, index) => (
              <RevealOnScroll delay={index * 100} key={pillar.title}>
                <div className="bg-white p-6 rounded shadow-md border-l-4 border-pink-dark h-full transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">{pillar.title}</h4>
                  <p className="text-gray-700 text-lg">
                    {pillar.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const pillarsOfPurpose = [
  {
    title: "Justice",
    description: "Advancing fair and responsive systems through legal scholarship, advocacy, and praxis, committed to meaningful change across institutions and communities."
  },
  {
    title: "Empowerment",
    description: "Supporting emerging leaders and amplifying underrepresented voices, cultivating environments where individuals are equipped to lead with confidence and clarity."
  },
  {
    title: "Community",
    description: "Fostering enduring partnerships built on trust, shared learning, and mutual accountability, bridging disciplines, sectors, and lived experiences."
  },
  {
    title: "Global Perspective",
    description: "Integrating localized knowledge with broader worldviews, drawing on diverse cultural frameworks to inform dialogue, shape scholarship, and inspire transformation."
  },
  {
    title: "Integrity",
    description: "Rooting leadership in empathy, honesty, and the richness of lived experience, guided by deeply held values and a commitment to truth, care, and responsibility."
  }
];

export default AboutSection;
