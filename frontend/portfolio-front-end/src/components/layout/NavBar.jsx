const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        
        <div className="text-white font-semibold text-lg">
          Sandeep Kumar
        </div>
        <div>
          <ul className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#case-studies" className="hover:text-white">Case Studies</a></li>
            <li><a href="#ai-lab" className="hover:text-white">AI Lab</a></li>
            <li><a href="#tech-stack" className="hover:text-white">Tech Stack</a></li>
            <li><a href="#leadership" className="hover:text-white">Leadership</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-4 text-sm">
          <a
            href="/Sandeep_Kumar_CV.pdf"
            className="text-slate-300 hover:text-white border border-slate-700 px-3 py-1.5 rounded-md"
          >
            Download CV
          </a>

          <a
            href="https://github.com/sandeepkumar-84"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sandeepkumar84"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://huggingface.co/sandeepkumar84"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white"
          >
            HuggingFace
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
