
import RevealOnScroll from './RevealOnScroll';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

const AdvocacySection = () => {
  // Sample timeline data
  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      year: "2022-Present",
      title: "UN Human Rights Council",
      description: "Serving as advisor on gender-based human rights initiatives, focusing on policy development for protection of women's rights in conflict zones."
    },
    {
      id: 2,
      year: "2020-2022",
      title: "African Commission on Human Rights",
      description: "Led research project examining the implementation of human rights frameworks across African nations, with emphasis on gender equality provisions."
    },
    {
      id: 3,
      year: "2018-2020",
      title: "Gender-Based Human Rights Program",
      description: "Developed and implemented training programs for legal professionals on gender-sensitive approaches to human rights violations."
    },
    {
      id: 4,
      year: "2015-2018",
      title: "High Court of Kenya",
      description: "Practiced as an Advocate, representing clients in human rights cases with focus on women's rights and gender-based violence."
    }
  ];

  return (
    <section id="advocacy" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title">Advocacy Work</h2>
        </RevealOnScroll>
        
        <div className="mt-16">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gold/30"></div>
            
            {timelineEvents.map((event, index) => (
              <RevealOnScroll 
                key={event.id} 
                delay={index * 200}
                className={`mb-12 md:mb-24 relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="w-full md:w-5/12">
                    <div className={`p-6 bg-ivory rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <div className="text-gold font-playfair font-semibold mb-2">{event.year}</div>
                      <h3 className="text-xl font-playfair font-bold mb-3">{event.title}</h3>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot for desktop */}
                  <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gold z-10"></div>
                  
                  {/* Empty space for desktop alternate layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvocacySection;
