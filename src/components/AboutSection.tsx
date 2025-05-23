
import RevealOnScroll from './RevealOnScroll';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2074")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}></div>
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="font-playfair text-4xl font-bold mb-12 text-center text-black">About Me</h2>
        </RevealOnScroll>
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="w-full md:w-2/5 flex justify-center">
            <RevealOnScroll>
              <div className="relative overflow-hidden shadow-lg rounded-lg group">
                <img src="/about.jpg" alt="Portrait of Dr. Wanjiru Kareithi" className="w-full md:w-[500px] h-auto md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </RevealOnScroll>
          </div>
          <div className="w-full md:w-3/5">
            <RevealOnScroll delay={200}>
              <div className="prose prose-lg max-w-none">
                <h3 className="font-playfair text-2xl font-bold mb-6 text-black">Bridging Theory and Practice in Education and Advocacy</h3>
                <p className="content-text mb-4">
                  Based in the United States, Dr. Kareithi engages in interdisciplinary work that integrates research, education, and advocacy, drawing on leadership philosophies and community values that inform her commitment to social transformation.
                </p>
                <p className="content-text mb-4">
                  Her scholarship spans peer-reviewed journals, policy platforms, and public writing, addressing reproductive justice, international law, feminist legal theory, and social equity. She regularly contributes to academic and practitioner conversations through public speaking, writing, and facilitation and has held advisory and expert roles across a range of advocacy and policy environments.
                </p>
                <p className="content-text mb-4">
                  She holds advanced legal training and professional licensure and is an active member of several academic and legal associations. Her research and practice are grounded in values-driven leadership, informed by lived experience, and committed to fostering dialogue, reflection, and ethical engagement in both institutional and community settings.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
        
        <div className="mt-20">
          <RevealOnScroll>
            <h2 className="font-playfair text-3xl font-bold mb-8 text-center text-black">Pillars of Purpose</h2>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {pillarsOfPurpose.map((pillar, index) => (
              <RevealOnScroll delay={index * 100} key={pillar.title}>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-dark h-full transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                  <h4 className="font-playfair text-xl font-semibold mb-3 text-pink-dark">{pillar.title}</h4>
                  <p className="text-gray-700 text-lg">
                    {pillar.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const pillarsOfPurpose = [
  {
    title: "Justice",
    description: "Advancing fair and responsive systems through scholarship, advocacy, and praxis, committed to meaningful change across institutions and communities."
  },
  {
    title: "Empowerment",
    description: "Supporting emerging leaders and amplifying underrepresented voices, cultivating environments where individuals are equipped to lead with confidence and clarity."
  },
  {
    title: "Community",
    description: "Fostering enduring partnerships built on trust, shared learning, and mutual accountability, bridging disciplines, sectors, and lived experiences."
  },
  {
    title: "Global Perspective",
    description: "Integrating localized knowledge with broader worldviews, drawing on diverse cultural frameworks to inform dialogue, shape scholarship, and inspire transformation."
  },
  {
    title: "Integrity",
    description: "Rooting leadership in empathy, honesty, and the richness of lived experience, guided by deeply held values and a commitment to truth, care, and responsibility."
  }
];

export default AboutSection;
