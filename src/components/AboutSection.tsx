
import RevealOnScroll from './RevealOnScroll';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="section-title">About Dr. Kareithi</h2>
        </RevealOnScroll>
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          {/* Image Column */}
          <div className="w-full md:w-2/5">
            <RevealOnScroll>
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/about.jpg" 
                  alt="Dr. Wanjiru Kareithi Portrait" 
                  className="w-full h-auto transform transition-all duration-1000 group-hover:scale-105 hover:scale-105"
                />
              </div>
            </RevealOnScroll>
          </div>
          {/* Text Column */}
          <div className="w-full md:w-3/5">
            <RevealOnScroll delay={200}>
              {/* Academic Appointments */}
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">Academic Appointments</h3>
              <ul className="mb-6 ml-4 space-y-1 list-disc text-gray-700">
                <li>
                  <strong>Postdoctoral Scholar</strong>, Office of Access and Equity, PSU, 2023–Present
                  <ul className="ml-4 list-disc text-gray-600 text-sm">
                    <li>Leads research on systemic challenges for women in leadership (African/global higher ed).</li>
                    <li>Investigates antiracist policies, develops frameworks for inclusive leadership in Arts & Architecture.</li>
                    <li>Collaborates with WGSS and African Studies, authors research series on women academics' lived experiences.</li>
                  </ul>
                </li>
                <li>
                  <strong>Affiliate Scholar</strong>, Women’s, Gender, and Sexuality Studies & African Studies Program, PSU, 2024–Present
                  <ul className="ml-4 list-disc text-gray-600 text-sm">
                    <li>Teaches gender studies, feminist legal theory, reproductive justice, and researches Black/African identities, human rights.</li>
                  </ul>
                </li>
                <li>
                  <strong>Lecturer (on leave)</strong>, Faculty of Law, Catholic Univ. of Eastern Africa, 2021–Present<br />
                  <span className="text-xs">Editor-in-Chief, CUEA Law Journal</span>
                </li>
                <li>
                  <strong>Adjunct Lecturer</strong>, Faculty of Law, Riara Univ., 2021–2022
                </li>
              </ul>
              {/* Education */}
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">Education</h3>
              <ul className="mb-6 ml-4 space-y-1 list-disc text-gray-700">
                <li>
                  <strong>Doctor of Laws (LLD)</strong>, University of Pretoria, South Africa, 2018<br />
                  <span className="text-sm text-gray-600 font-normal">Dissertation: A historical-legal analysis of woman-to-woman marriage in Kenya</span>
                </li>
                <li>
                  <strong>Postgraduate Diploma in Law (Juris Doctor)</strong>, Kenya School of Law, 2021
                </li>
                <li>
                  <strong>Master of Laws (LLM), International Law</strong>, University of Bristol, UK, 2010
                </li>
                <li>
                  <strong>Bachelor of Laws (LLB)</strong>, Catholic Univ. of Eastern Africa, Kenya, 2008
                </li>
                <li>
                  <strong>Certificate, Senior Management</strong>, Kenya School of Government, 2023
                </li>
              </ul>
              {/* Legal Standing */}
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">Professional & Legal Standing</h3>
              <ul className="mb-6 ml-4 space-y-1 list-disc text-gray-700">
                <li><strong>Advocate of the High Court of Kenya</strong> (Admitted, Roll of Advocates): Good Standing</li>
                <li>Member, Law Society of Kenya (LSK), American Bar Association (ABA), African Studies Association (ASA), NWSA, and others.</li>
              </ul>
              {/* Awards & Fellowships */}
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">Awards & Fellowships</h3>
              <ul className="mb-6 ml-4 space-y-1 list-disc text-gray-700">
                <li>Fellow, Human Rights Implementation Centre, Univ. of Bristol (2008–2010)</li>
                <li>Recipient, Gill Jacot Guillarmod Scholarship, Univ. of Pretoria (2017)</li>
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
