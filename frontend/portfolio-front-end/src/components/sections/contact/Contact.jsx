import SectionHeader from "../../ui/SectionHeader";
export default function Contact(){
return(
  <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-2xl mx-auto px-6">
        <SectionHeader
          label="Connect"
          title="Let’s Talk"
          subtitle="Open to senior engineering, technical analyst, and data-focused roles in banking and fintech."
        />

        <div className="flex flex-col sm:flex-row gap-6 text-slate-300 ">
          <a
            href="mailto:sandeepkumar84.career@gmail.com"
            className="border border-slate-700 px-6 py-3 rounded-md hover:text-white"
          >
            Email
          </a>

          <a
            href="https://linkedin.com/in/sandeepkumar84"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-700 px-6 py-3 rounded-md hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/sandeepkumar-84"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-700 px-6 py-3 rounded-md hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://huggingface.co/sandeepkumar84"
            target="_blank"
            rel="noreferrer"
            className="border border-slate-700 px-6 py-3 rounded-md hover:text-white"
          >
            HuggingFace
          </a>
        </div>
      </div>
    </section>
);
}
