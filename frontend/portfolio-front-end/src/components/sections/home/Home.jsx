import SectionHeader from "../../ui/SectionHeader";
const Home = () => {
  return (
    <section
      id="home"
      className="py-24 bg-slate-950">
      <div className="max-w-2xl mx-auto px-6">
        <SectionHeader label="" title="Home" subtitle = "High-scale financial systems, regulatory platforms, and automation delivered in production environments."/>
        <p className="text-1xl text-white">Home Section</p>
      </div>
    </section>
  );
};

export default Home;