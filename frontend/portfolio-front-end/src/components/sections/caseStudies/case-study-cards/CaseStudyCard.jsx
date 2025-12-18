const CaseStudyCard = ({ title, problem, solution, impact, tech }) => {
  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-slate-400"><strong>Problem:</strong> {problem}</p>
      <p className="text-slate-400"><strong>Solution:</strong> {solution}</p>
      <p className="text-slate-400"><strong>Impact:</strong> {impact}</p>
      {tech && (
        <p className="text-slate-500 text-sm">Tech: {tech.join(", ")}</p>
      )}
    </div>
  );
};

export default CaseStudyCard;