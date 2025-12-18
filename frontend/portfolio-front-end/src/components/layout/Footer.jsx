const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6">
      <div className="max-w-7xl mx-auto px-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Sandeep Kumar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
