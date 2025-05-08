
import RevealOnScroll from './RevealOnScroll';

interface Publication {
  id: number;
  title: string;
  description: string;
  year: string;
  type: string;
}

const ResearchSection = () => {
  const publications: Publication[] = [
    {
      id: 1,
      title: "An Argument for the Continued Validity of Woman-to-Woman Marriages in Post-2010 Kenya",
      description: "Explores the historical and legal perspectives of woman-to-woman marriages, post-2010 constitutional reforms in Kenya.",
      year: "2019",
      type: "Peer Reviewed Journal"
    },
    {
      id: 2,
      title: "'[E]ven in our fear [...] we wanted to do this': Feminist organising for abortion in Africa as palimpsestic",
      description: "A study on feminist organizing for abortion rights across Africa.",
      year: "2025",
      type: "Peer Reviewed Journal"
    },
    {
      id: 3,
      title: "In the Spirit of Harambee: Addressing Discrimination and Inequality in Kenya",
      description: "Book on Kenya's approaches to discrimination and collective equality efforts.",
      year: "2012",
      type: "Book"
    },
    {
      id: 4,
      title: "Covid-19 Pandemic: Supremacy of Rights? Right to Health Vs. Right to Education.",
      description: "An opinion piece on pandemic legal rights challenges in Kenya.",
      year: "2020",
      type: "Newspaper Article"
    },
    {
      id: 5,
      title: "From The Telling Sound of Silence to The Tolling Boom of Activism",
      description: "Co-authored piece on legal activism and transformative silence.",
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
    <section id="research" className="py-20 relative min-h-[calc(100vh-5rem)]">
      <div className="absolute inset-0 bg-gradient-to-br from-soft-green to-soft-yellow z-0"></div>
      <div className="absolute inset-0 bg-opacity-15" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.2
      }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12">
            <h2 className="section-title text-black text-center">Research &amp; Publications</h2>
            <p className="text-center text-black/80 mt-4 font-playfair text-xl">Advancing Knowledge Through Scholarly Inquiry</p>
          </div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {publications.map((pub, index) => (
            <RevealOnScroll key={pub.id} delay={index * 100}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-xs">{pub.type}</span>
                    <span className="text-gray-400 text-xs">{pub.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-black">{pub.title}</h3>
                  <p className="text-gray-700">{pub.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
