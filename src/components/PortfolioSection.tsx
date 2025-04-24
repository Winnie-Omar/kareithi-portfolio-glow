import RevealOnScroll from "./RevealOnScroll";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

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
    <section id="portfolio" className="py-20 page-gradient">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title text-black">Portfolio</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {portfolioCards.map((card, idx) => (
            <RevealOnScroll delay={100 + idx * 100} key={card.title}>
              <Card className="bg-white/90 backdrop-blur-sm border-transparent transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer" onClick={() => setOpenIdx(idx)}>
                <CardHeader className="pb-2">
                  <CardTitle className="font-playfair text-2xl font-bold text-black">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mt-4 leading-relaxed text-lg mb-6">
                    {card.summary}
                  </p>
                </CardContent>
                {openIdx === idx && (
                  <Dialog open={true} onOpenChange={() => setOpenIdx(null)}>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="font-playfair text-2xl text-black">{card.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-6 text-gray-800 space-y-6">
                        <div>
                          <p className="text-lg mb-4">{card.details.description}</p>
                          <h4 className="font-bold text-lg text-black mb-2">Core Focus</h4>
                          <p className="text-lg mb-6">{card.details.coreFocus}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-black mb-3">Key Takeaways:</h4>
                          <ul className="ml-4 list-disc space-y-2">
                            {card.details.takeaways.map((tk, index) => (
                              <li key={index} className="text-lg">{tk}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button 
                        onClick={() => setOpenIdx(null)}
                        className="mt-4 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                    </DialogContent>
                  </Dialog>
                )}
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
