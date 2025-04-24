import { ExternalLink } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface Publication {
  id: number;
  title: string;
  description: string;
  link?: string;
  year: string;
  type: string;
}

const ResearchSection = () => {
  const publications: Publication[] = [
    {
      id: 1,
      title: "An Argument for the Continued Validity of Woman-to-Woman Marriages in Post-2010 Kenya",
      description: "Explores the historical and legal perspectives of woman-to-woman marriages, post-2010 constitutional reforms in Kenya.",
      link: "https://doi.org/10.1017/S0021855319000260",
      year: "2019",
      type: "Peer Reviewed Journal"
    },
    {
      id: 2,
      title: "‘[E]ven in our fear [...] we wanted to do this’: Feminist organising for abortion in Africa as palimpsestic",
      description: "A study on feminist organizing for abortion rights across Africa.",
      link: "#",
      year: "2025",
      type: "Peer Reviewed Journal"
    },
    {
      id: 3,
      title: "In the Spirit of Harambee: Addressing Discrimination and Inequality in Kenya",
      description: "Book on Kenya's approaches to discrimination and collective equality efforts.",
      link: "#",
      year: "2012",
      type: "Book"
    },
    {
      id: 4,
      title: "Covid-19 Pandemic: Supremacy of Rights? Right to Health Vs. Right to Education.",
      description: "An opinion piece on pandemic legal rights challenges in Kenya.",
      link: "#",
      year: "2020",
      type: "Newspaper Article"
    },
    {
      id: 5,
      title: "From The Telling Sound of Silence to The Tolling Boom of Activism",
      description: "Co-authored piece on legal activism and transformative silence.",
      link: "#",
      year: "2010",
      type: "Co-Authored Publication"
    },
    {
      id: 6,
      title: "The Future Is Feminist (Book Review, accepted)",
      description: "Book review: The Future Is Feminist: Women and Social Change in Interwar Algeria (S. Rahnama, Johns Hopkins, 2003).",
      year: "In press",
      type: "Book Review"
    }
  ];
  return (
    <section id="research" className="py-20 page-gradient">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title">Research &amp; Publications</h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {publications.map((pub, index) => (
            <RevealOnScroll key={pub.id} delay={index * 100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-xs">{pub.type}</span>
                    <span className="text-gray-400 text-xs">{pub.year}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-gray-800">{pub.title}</h3>
                  <p className="text-gray-700 mb-4">{pub.description}</p>
                  {pub.link &&
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal hover:underline font-medium"
                    >
                      Read More 
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  }
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={200}>
          <div className="mt-12 text-center">
            <a 
              href="https://scholar.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-teal hover:bg-teal/90 text-white py-2 px-6 rounded-md transition-colors duration-300"
            >
              View Full Publication List
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default ResearchSection;
