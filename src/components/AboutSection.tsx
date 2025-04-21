
import RevealOnScroll from './RevealOnScroll';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title">About Dr. Kareithi</h2>
        </RevealOnScroll>
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          {/* Image Column */}
          <div className="w-full md:w-2/5">
            <RevealOnScroll>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/about.jpg" 
                  alt="Dr. Wanjiru Kareithi Portrait" 
                  className="w-full h-auto transform transition-all duration-1000 group-hover:scale-105 hover:scale-105 max-h-[600px] object-cover object-center"
                />
              </div>
            </RevealOnScroll>
          </div>
          {/* Text Column */}
          <div className="w-full md:w-3/5">
            <RevealOnScroll delay={200}>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Dr. Wanjiru Kareithi is a Postdoctoral Scholar in the Office of the Associate Dean of Access & Equity at Pennsylvania State University's College of Arts and Architecture, with courtesy affiliations in the African Studies Program and Women's, Gender, and Sexuality Studies Department.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Her research focuses on African women's leadership in higher education through decolonial feminist frameworks, emphasizing indigenous knowledge systems and institutional transformation. With over a decade of experience as a human rights lawyer, Dr. Kareithi has worked extensively across sub-Saharan Africa, Latin America, the United Kingdom, and globally.
                </p>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  She addresses economic, social, and cultural issues affecting marginalized communities and has led initiatives on equality, non-discrimination, and gender-based approaches to human rights within platforms such as the African Commission on Human and Peoples' Rights and the United Nations Human Rights Council.
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  As a legal scholar, she has published extensively on civil, political, economic, social, and group rights. Dr. Kareithi holds a Doctor of Laws (LLD) from the University of Pretoria, a Master of Laws (LLM) from the University of Bristol, and a Bachelor of Laws (LLB) from Kenya. She is also an Advocate of the High Court of Kenya.
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
