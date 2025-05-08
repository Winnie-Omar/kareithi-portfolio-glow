
import RevealOnScroll from './RevealOnScroll';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';

const portfolioCards = [
  {
    title: "Advocacy & Social Justice",
    summary: "Strengthening justice systems, protecting human dignity, and building responsive legal and social structures.",
    details: {
      description: "This portfolio area highlights a commitment to strengthening justice systems, protecting human dignity, and supporting responsive legal and social structures. Through strategic policy engagement and legal expertise, this work contributes to reshaping systems and expanding access for communities often excluded from decision-making spaces.",
      coreFocus: "Connects legal frameworks with community-based strategies to promote access to rights and strengthen institutional accountability. Efforts span legal reform, policy engagement, and coalition building in support of sustainable change.",
      takeaways: [
        "Experienced in national and international human rights law and advocacy",
        "Focused on legal strategies that advance protections for women and underrepresented groups",
        "Skilled in coalition building, policy development, and strengthening community-based legal capacities"
      ],
    },
  },
  {
    title: "Research & Scholarship",
    summary: "Exploring leadership, governance, and knowledge production through culturally grounded and interdisciplinary lenses.",
    details: {
      description: "This portfolio investigates leadership practices shaped by African and decolonial thought, with a particular emphasis on the experiences and contributions of women in leadership. This work engages with institutional structures, cultural narratives, and public policy to inform more responsive approaches to leadership and knowledge-building.",
      coreFocus: "A significant strand of this portfolio examines the systemic challenges facing women leaders and the strategies they adopt within academic, legal, and policy environments. Through cross-disciplinary collaboration, policy engagement, and scholarly writing, this work bridges intellectual traditions and contributes to practical reform.",
      takeaways: [
        "Expertise in transformational and values-based leadership models",
        "Experienced in policy research, institutional analysis, and academic collaboration",
        "Committed to advancing underrepresented knowledge traditions through research and writing"
      ],
    },
  },
  {
    title: "Teaching & Public Engagement",
    summary: "Centering education as a transformative space for dialogue, critical reflection, and ethical engagement across global contexts.",
    details: {
      description: "This portfolio area emphasizes a teaching philosophy rooted in dialogic, student-centered, and inquiry-driven models. Learning is approached as a collaborative process that values reflection, responsiveness, and the co-creation of knowledge.",
      coreFocus: "Prioritizes pedagogical models that bridge theory with lived experience, inviting students to engage complex social questions through interdisciplinary and ethical lenses. Emphasis is placed on fostering inclusive learning environments where discussion, active participation, and reflective analysis support deeper understanding.",
      takeaways: [
        "Grounded in dialogic, student-centered teaching methods",
        "Experienced in designing reflective and participatory learning environments",
        "Committed to pedagogical models that connect theory, practice, and public discourse"
      ],
    },
  },
];

const PortfolioSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-soft-peach relative">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}></div>
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="font-playfair text-4xl font-bold mb-12 text-center text-black">Portfolio</h2>
        </RevealOnScroll>
        
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          <div className="w-full md:w-2/5">
            <RevealOnScroll>
              <div className="relative rounded-lg overflow-hidden shadow-xl h-full">
                <img 
                  src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1974"
                  alt="Legal advocacy work" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-2xl font-playfair font-bold mb-2">Making Justice Accessible</h3>
                  <p className="text-white/90 text-lg">A decade of advocating for inclusive legal frameworks</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioCards.slice(0, 2).map((card, idx) => (
                <RevealOnScroll delay={100 + idx * 100} key={card.title}>
                  <Card className="bg-white/90 backdrop-blur-sm border-transparent h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                    <CardHeader className="pb-2">
                      <CardTitle className="font-playfair text-2xl font-bold text-black">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mt-4 leading-relaxed text-lg mb-6">
                        {card.summary}
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setOpenIdx(idx)}
                        className="w-full"
                      >
                        View More
                      </Button>
                    </CardContent>
                  </Card>
                </RevealOnScroll>
              ))}
            </div>
            
            <div className="mt-6">
              <RevealOnScroll delay={300}>
                <Card className="bg-white/90 backdrop-blur-sm border-transparent transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                  <CardHeader className="pb-2">
                    <CardTitle className="font-playfair text-2xl font-bold text-black">
                      {portfolioCards[2].title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mt-4 leading-relaxed text-lg mb-6">
                      {portfolioCards[2].summary}
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setOpenIdx(2)}
                      className="w-full"
                    >
                      View More
                    </Button>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            </div>
          </div>
        </div>
        
        {/* Dialog for portfolio details */}
        {openIdx !== null && (
          <Dialog open={true} onOpenChange={() => setOpenIdx(null)}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl text-black">{portfolioCards[openIdx].title}</DialogTitle>
              </DialogHeader>
              <div className="mt-6 text-gray-800 space-y-6">
                <div>
                  <p className="text-lg mb-4">{portfolioCards[openIdx].details.description}</p>
                  <h4 className="font-bold text-lg text-black mb-2">Core Focus</h4>
                  <p className="text-lg mb-6">{portfolioCards[openIdx].details.coreFocus}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-black mb-3">Key Takeaways:</h4>
                  <ul className="ml-4 list-disc space-y-2">
                    {portfolioCards[openIdx].details.takeaways.map((tk, index) => (
                      <li key={index} className="text-lg">{tk}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button 
                onClick={() => setOpenIdx(null)}
                className="mt-4"
                variant="outline"
              >
                Close
              </Button>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
