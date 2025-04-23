
import { Gavel, Book, GraduationCap } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title text-pink-dark">Portfolio</h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Advocacy & Social Justice Card */}
          <RevealOnScroll delay={100}>
            <Card className="bg-white border-pink/20 transition-all duration-300 hover:shadow-lg hover:border-pink">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-playfair font-semibold text-pink-dark">
                    Advocacy & Social Justice
                  </CardTitle>
                  <Gavel className="text-pink-dark h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  I work at the intersection of law, policy, and activism to advance human rights, gender justice, and anti-racist frameworks. My advocacy focuses on dismantling systemic barriers and creating equitable opportunities for marginalized communities through legal reform, capacity-building, and strategic collaboration.
                </p>
              </CardContent>
            </Card>
          </RevealOnScroll>
          
          {/* Research & Scholarship Card */}
          <RevealOnScroll delay={200}>
            <Card className="bg-white border-pink/20 transition-all duration-300 hover:shadow-lg hover:border-pink">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-playfair font-semibold text-pink-dark">
                    Research & Scholarship
                  </CardTitle>
                  <Book className="text-pink-dark h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  My research explores African leadership models, cultural exchange, and the adaptability of anti-racist policies in global contexts. Through academic writing, policy analysis, and interdisciplinary collaboration, I seek to bridge knowledge gaps and contribute to more inclusive, equity-driven solutions.
                </p>
              </CardContent>
            </Card>
          </RevealOnScroll>
          
          {/* Teaching & Public Engagement Card */}
          <RevealOnScroll delay={300}>
            <Card className="bg-white border-pink/20 transition-all duration-300 hover:shadow-lg hover:border-pink">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl font-playfair font-semibold text-pink-dark">
                    Teaching & Public Engagement
                  </CardTitle>
                  <GraduationCap className="text-pink-dark h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mt-4 leading-relaxed">
                  I am passionate about education as a tool for transformation. Through teaching, mentorship, and public speaking, I facilitate critical conversations on diversity, law, and social change. My work includes developing inclusive curricula, leading workshops, and fostering cross-cultural dialogue to inspire informed and engaged leadership.
                </p>
              </CardContent>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
