
import RevealOnScroll from './RevealOnScroll';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

const AdvocacySection = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      year: "2022–2023",
      title: "Senior Program Manager, MAMA Legal Support – TICAH, KENYA",
      description: "Directed advocacy for sexual & reproductive health/rights. Led legal interventions for gender-affirming care, abortion rights, and equity in SRHR."
    },
    {
      id: 2,
      year: "2018–2019",
      title: "Project Coordinator & Senior Researcher, University of Pretoria, SOUTH AFRICA",
      description: "Managed global human rights projects and produced impactful publications on reproductive justice and healthcare policy."
    },
    {
      id: 3,
      year: "2012–2015",
      title: "Program Manager, Kenya Human Rights Commission, KENYA",
      description: "Developed/managed rights projects across 30+ countries. Led media campaigns and legal stakeholder training on anti-discrimination frameworks."
    },
    {
      id: 4,
      year: "2020–2021",
      title: "Volunteer Pro Bono Attorney, Igeria and Ngugi Advocates",
      description: "Offered pro bono legal work on human rights cases."
    },
    {
      id: 5,
      year: "2020–2021",
      title: "Law Clerk, Makadara Law Courts - Judiciary",
      description: "Served as a law clerk contributing to the judicial process."
    },
    {
      id: 6,
      year: "2015–2019",
      title: "Consultancies for African Rights & Electoral Organizations",
      description: "Panelist/Consultant for ISLA (2019–Present), NANHRI (2018), SIASIC (2018), EISA (2015, 2017)."
    },
    {
      id: 7,
      year: "2022–2024",
      title: "Judiciary/Feminist Dialogues & Speaking Engagements",
      description: "Featured, principal facilitator & speaker at key judicial, feminist, and global south forums incl. UN, NGLHRC, Penn State, and more (see CV for full list)."
    },
    {
      id: 8,
      year: "2008–2024",
      title: "Awards & Memberships",
      description: "Gill Jacot Guillarmod Scholar, Fellow—Human Rights Implementation Centre, and active memberships: ASA, LSK, Law & Society Association, NWSA, ABA."
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
