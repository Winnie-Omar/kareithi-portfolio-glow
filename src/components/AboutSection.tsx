
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
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Dr. Wanjiru Kareithi Portrait" 
                  className="w-full h-auto transform transition-all duration-1000 hover:scale-105"
                />
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Text Column */}
          <div className="w-full md:w-3/5">
            <RevealOnScroll delay={200}>
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">Academic Background</h3>
              <p className="text-gray-700 mb-6">
                Dr. Wanjiru Kareithi currently serves as a Postdoctoral Scholar at Pennsylvania State University, 
                where she contributes to groundbreaking research on African women's leadership and decolonial 
                feminist frameworks. Her work spans multiple disciplines, bringing together legal expertise, 
                gender studies, and human rights advocacy.
              </p>
              
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">Research Focus</h3>
              <p className="text-gray-700 mb-6">
                Her research focuses on the intersection of gender, law, and human rights with particular emphasis 
                on African women's leadership and decolonial feminist frameworks. Dr. Kareithi's work has been 
                instrumental in developing new approaches to understanding and addressing human rights challenges 
                faced by women across the African continent.
              </p>
              
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">Legal Expertise</h3>
              <p className="text-gray-700 mb-6">
                As an Advocate of the High Court of Kenya, Dr. Kareithi has extensive experience in human rights 
                law with a global perspective. Her legal work has informed her academic research and advocacy, 
                creating a powerful combination of theoretical understanding and practical application.
              </p>
              
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">Education</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6 ml-4 space-y-2">
                <li><span className="font-medium">Doctor of Laws (LLD)</span> - University of Pretoria</li>
                <li><span className="font-medium">Master of Laws (LLM)</span> - University of Bristol</li>
                <li><span className="font-medium">Bachelor of Laws (LLB)</span> - University of Kenya</li>
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
