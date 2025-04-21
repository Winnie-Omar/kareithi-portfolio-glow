
import { ExternalLink } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

interface Publication {
  id: number;
  title: string;
  description: string;
  link: string;
  year: string;
}

const ResearchSection = () => {
  // Sample publications data - this would normally come from an API or CMS
  const publications: Publication[] = [
    {
      id: 1,
      title: "Decolonial Feminist Frameworks in African Leadership",
      description: "An analysis of decolonial feminist approaches to understanding women's leadership in African contexts.",
      link: "#",
      year: "2023"
    },
    {
      id: 2,
      title: "Gender and Human Rights: A Kenyan Perspective",
      description: "Examining the intersection of gender and human rights law in contemporary Kenya.",
      link: "#",
      year: "2022"
    },
    {
      id: 3,
      title: "Women's Legal Representation in East Africa",
      description: "A comparative study of women's access to legal representation across East African nations.",
      link: "#",
      year: "2021"
    },
    {
      id: 4,
      title: "The Role of Women in Post-Colonial Justice Systems",
      description: "Investigating how women navigate and transform post-colonial justice systems.",
      link: "#",
      year: "2020"
    },
    {
      id: 5,
      title: "Feminist Legal Theory and Practice in Human Rights Advocacy",
      description: "Bridging the gap between feminist legal theory and practical human rights advocacy.",
      link: "#",
      year: "2019"
    },
    {
      id: 6,
      title: "Gender-Based Violence: Legal Frameworks for Protection",
      description: "Analysis of legal frameworks designed to protect against gender-based violence.",
      link: "#",
      year: "2018"
    }
  ];

  return (
    <section id="research" className="py-20 bg-ivory">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title">Research & Publications</h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {publications.map((pub, index) => (
            <RevealOnScroll key={pub.id} delay={index * 100}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">{pub.year}</div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-gray-800">{pub.title}</h3>
                  <p className="text-gray-700 mb-4">{pub.description}</p>
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal hover:underline font-medium"
                  >
                    Read More 
                    <ExternalLink size={16} className="ml-1" />
                  </a>
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
