import SectionHeader from "../../ui/SectionHeader";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950">
       <div className="max-w-7xl mx-auto px-6">
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Engineering Intelligent
          <br />
          Financial Systems
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          Senior Technical Analyst · Full-Stack Engineer · Data Analytics Specialist
          <br />
          FinTech · Banking · Regulatory Platforms
        </p>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-2xl font-semibold text-white">16+</p>
            <p className="text-sm text-slate-400">Years Experience</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">200+</p>
            <p className="text-sm text-slate-400">Features Delivered</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">Millions</p>
            <p className="text-sm text-slate-400">Daily Records</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">90%</p>
            <p className="text-sm text-slate-400">Failure Reduction</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#case-studies"
            className="bg-white text-slate-900 px-6 py-3 rounded-md font-medium"
          >
            View Case Studies
          </a>

          <a
            href="/Sandeep_Kumar_CV.pdf"
            className="border border-slate-700 text-white px-6 py-3 rounded-md"
          >
            Download CV
          </a>
        </div>

      </div>     
    </section>
  );
};

export default Home;