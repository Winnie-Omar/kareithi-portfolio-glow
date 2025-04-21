
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
              <div className="relative overflow-hidden rounded-lg shadow-lg group max-w-xs mx-auto">
                <img 
                  src="/about.jpg" 
                  alt="Dr. Wanjiru Kareithi Portrait" 
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover group-hover:scale-105 hover:scale-105 transition-transform duration-700 border-4 border-pink-dark shadow-lg"
                />
              </div>
            </RevealOnScroll>
          </div>
          {/* Text Column */}
          <div className="w-full md:w-3/5">
            <RevealOnScroll delay={200}>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I'm a Postdoctoral Scholar in the Office of the Associate Dean of Access & Equity at Penn State’s College of Arts and Architecture, with courtesy affiliations in African Studies and Women’s, Gender, and Sexuality Studies.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  My research centers on African women’s leadership in higher education through decolonial feminist and indigenous lenses. Over my career as a human rights lawyer, I’ve worked across sub-Saharan Africa, Latin America, and beyond to advance equality and institutional transformation for marginalized communities.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I have led programs within organizations such as the African Commission on Human and Peoples’ Rights and the UN Human Rights Council, championing gender-based and non-discrimination approaches in law and policy.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  As a legal scholar, I’m proud to have published research on rights at every level—civil, social, political, and economic. I hold a Doctor of Laws (LLD) from the University of Pretoria, an LLM from the University of Bristol, and an LLB from Kenya. I’m also an Advocate of the High Court of Kenya.
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
      </div>
    </section>
  );
};

export default AboutSection;
