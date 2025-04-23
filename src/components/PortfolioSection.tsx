
import RevealOnScroll from "./RevealOnScroll";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

// Card Data
const portfolioCards = [
  {
    title: "Advocacy & Social Justice",
    summary:
      "I bring together law, policy, and activism—working to remove barriers and create real opportunities for those often left out.",
    details: {
      description:
        "My advocacy connects legal frameworks with on-the-ground activism. I focus on advancing human rights, equity for women, and anti-racist strategies. Through policy reform and coalition building, I aim to open doors for marginalized individuals by reshaping laws and strengthening community capacities.",
      takeaways: [
        "Expertise in global human rights advocacy",
        "Champion for anti-racist and gender equity initiatives",
        "Skilled in legal reform and community capacity building",
      ],
    },
  },
  {
    title: "Research & Scholarship",
    summary:
      "Through my research, I delve into African leadership models and the practical adoption of equity-driven policies in global settings.",
    details: {
      description:
        "My scholarly work explores leadership practices rooted in African and decolonial perspectives. I collaborate across disciplines to conduct research, shape policy, and publish insights that bridge cultural and social divides. My goal is to help build more inclusive, thoughtful, and just societies.",
      takeaways: [
        "Deep knowledge of transformational leadership",
        "Experience in policy analysis and research partnerships",
        "Committed to amplifying marginalized knowledge systems",
      ],
    },
  },
  {
    title: "Teaching & Public Engagement",
    summary:
      "I see education as the foundation for change—nurturing thoughtful dialogue and inspiring courageous engagement with social issues.",
    details: {
      description:
        "I teach, mentor, and lead workshops that open up space for discussion on law, diversity, and social justice. By designing inclusive programming and fostering active learning, I seek to empower individuals and communities to be agents of change.",
      takeaways: [
        "Track record in curriculum design and public speaking",
        "Mentorship for emerging leaders",
        "Focus on actionable, community-centered learning",
      ],
    },
  },
];

const PortfolioSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title text-pink-dark">Portfolio</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {portfolioCards.map((card, idx) => (
            <RevealOnScroll delay={100 + idx * 100} key={card.title}>
              <Card
                className="bg-white border-pink/20 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-pink hover:bg-pink-light group"
                style={{ minHeight: "360px" }}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="font-playfair text-2xl font-bold text-pink-dark">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mt-4 leading-relaxed mb-6">
                    {card.summary}
                  </p>
                  <button
                    className="px-5 py-2 bg-pink-dark group-hover:bg-pink text-white font-medium rounded transition-colors hover:shadow-xl"
                    onClick={() => setOpenIdx(idx)}
                  >
                    Learn More
                  </button>
                </CardContent>
                {openIdx === idx && (
                  <Dialog open={true} onOpenChange={(open) => !open && setOpenIdx(null)}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="font-playfair text-xl text-pink-dark">{card.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-3 text-gray-800">
                        <p className="mb-4">{card.details.description}</p>
                        <div>
                          <h4 className="font-bold mb-2 text-pink-dark">Key Takeaways:</h4>
                          <ul className="ml-4 list-disc">
                            {card.details.takeaways.map((tk) => (
                              <li key={tk}>{tk}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
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
