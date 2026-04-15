import React from 'react';
import Image from 'next/image';

// Images
import principalImg from '../assets/principal.jpeg';

// Data extraction
const timeline = [
  { year: '2008', title: 'Graduated from OAU', description: 'Completed his law degree at Obafemi Awolowo University, Ile-Ife.' },
  { year: '2011', title: 'Called to the Nigerian Bar', description: 'Admitted to practice law in Nigeria, marking the beginning of his legal career.' },
  { year: '2011-2012', title: 'NYSC in Edo State', description: 'Gained foundational courtroom experience and built advocacy skills.' },
  { year: '2012-2019', title: 'Legal Practice in Lagos', description: 'Built a formidable reputation as a fiery courtroom advocate in a high-stakes environment.' },
  { year: '2019', title: 'Founded Solution Attorneys', description: 'Established with a mission to provide result-driven legal representation.' },
];

const coreExpertise = [
  { title: 'Litigation & Advocacy', description: 'Excelling in high-stakes courtroom battles and appellate advocacy.' },
  { title: 'Corporate Law', description: 'Expertise in corporate governance and structural legal design.' },
  { title: 'Dispute Resolution', description: 'Strategic approaches to resolving complex commercial disputes.' },
  { title: 'Pan-African Practice', description: 'Navigating the evolving commercial landscape across West Africa.' },
  { title: 'Professional Leadership', description: 'Active contributor to the Nigerian legal community and mentorship.' },
  { title: 'Legal Innovation', description: 'Committed to result-driven solutions for modern business challenges.' },
];

export default function TayoProfile(): JSX.Element {
  return (
    <div className="bg-[#FCFCFA] min-h-screen font-sans text-slate-800 selection:bg-[#BFA84E]/20 relative overflow-hidden">
      
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-slate-50 to-transparent -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        
        {/* ========== HERO ========== */}
        <header className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 items-center mb-32">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#BFA84E]"></div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#BFA84E]">
                Principal Partner
              </span>
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-medium leading-[1.05] text-slate-900 tracking-tight">
              Temitayo <br /> Olowookere
            </h1>
            
            <p className="text-lg md:text-xl font-light leading-relaxed text-slate-600 max-w-lg">
              A fiery courtroom advocate and founding Partner of Solution Attorneys. Renowned for tenacity, strategic brilliance, and an unwavering commitment to justice.
            </p>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-5">
              <a href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-slate-800">
                <span>Schedule Consultation</span>
              </a>
              <a href="/" className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest hover:border-[#BFA84E] hover:text-slate-900 transition-colors duration-300">
                Back to Home
              </a>
            </div>
          </div>
          
          {/* Refined Image Presentation */}
          <div className="relative w-full md:w-[450px] lg:w-[500px]">
            {/* Decorative offset box */}
            <div className="absolute -inset-4 border border-slate-200 translate-x-4 translate-y-4 rounded-xl -z-10"></div>
            
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-slate-200/50">
              <Image
                src={principalImg}
                alt="Temitayo Ebenezer Olowookere"
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply transition-opacity duration-500 hover:opacity-0"></div>
            </div>
          </div>
        </header>

        {/* ========== BIO ========== */}
        <section className="mb-32 relative">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl text-slate-900 mb-8 tracking-tight">The Advocate</h2>
            <div className="space-y-6 text-slate-600 font-light text-lg leading-relaxed border-l border-[#BFA84E]/30 pl-6 lg:pl-8">
              <p>
                Temitayo Ebenezer Olowookere stands as a prominent figure in Nigeria&apos;s legal landscape—a seasoned litigator distinguished by his unwavering commitment to justice and his commanding presence in the courtroom.
              </p>
              <p>
                After completing his law degree at Obafemi Awolowo University (OAU) in 2008, Temitayo was called to the Nigerian Bar in 2011. He rapidly built a formidable reputation in Lagos across multiple disciplines—corporate law, litigation, dispute resolution, and Pan-African advisory.
              </p>
              <p>
                In January 2019, Temitayo founded Solution Attorneys to deliver result-driven legal representation rooted in deep sectoral understanding and constitutional innovation.
              </p>
            </div>
          </div>
        </section>

        {/* ========== GRID: TIMELINE & EXPERTISE ========== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          
          {/* Timeline (Takes up 5 columns) */}
          <section className="lg:col-span-5">
            <h2 className="font-serif text-3xl text-slate-900 mb-10 tracking-tight">Milestones</h2>
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-slate-200 before:to-transparent">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  <div className="mt-1.5 w-3 h-3 rounded-full bg-white border-2 border-[#BFA84E] relative z-10 shrink-0 shadow-sm" />
                  <div>
                    <span className="text-xs font-bold tracking-widest text-[#BFA84E] mb-1 block uppercase">
                      {item.year}
                    </span>
                    <h3 className="font-serif text-xl text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 font-light text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Expertise (Takes up 7 columns) */}
          <section className="lg:col-span-7">
            <h2 className="font-serif text-3xl text-slate-900 mb-10 tracking-tight">Areas of Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreExpertise.map((expertise, index) => (
                <div 
                  key={index} 
                  className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-[#BFA84E]/30 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500"
                >
                  <h3 className="font-serif text-xl text-slate-900 mb-3 group-hover:text-[#BFA84E] transition-colors">
                    {expertise.title}
                  </h3>
                  <div className="h-[1px] w-8 bg-slate-200 mb-4 group-hover:w-16 group-hover:bg-[#BFA84E] transition-all duration-500"></div>
                  <p className="text-slate-500 font-light text-sm leading-relaxed">
                    {expertise.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>

      {/* ========== FOOTER / CTA ========== */}
      <section className="bg-slate-900 py-24 px-6 text-center relative overflow-hidden">
        {/* Subtle background line in footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#BFA84E] to-transparent"></div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 italic font-light">
          Justice demands precision, <br className="hidden md:block" />
          <span className="text-[#BFA84E]">clarity, and conviction.</span>
        </h2>
        <p className="text-slate-400 font-light mb-12 max-w-xl mx-auto leading-relaxed">
          Connect with Temitayo directly for strategic legal consultation. Navigate complex commercial challenges with a partner who combines courtroom excellence with a Pan-African perspective.
        </p>
        <a href="/contact" className="inline-block px-10 py-4 bg-[#BFA84E] text-slate-900 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
          Schedule a Consultation
        </a>
      </section>

    </div>
  );
}