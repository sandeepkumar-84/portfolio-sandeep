import SectionHeader from "../../ui/SectionHeader";
const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-2xl mx-auto px-6">
          <SectionHeader label="Background" title="About" subtitle = "High-scale financial systems, regulatory platforms, and automation delivered in production environments."/>
        <h2 className="text-1xl text-white">About Me</h2>
      </div>
    </section>
  );
};

export default About;
