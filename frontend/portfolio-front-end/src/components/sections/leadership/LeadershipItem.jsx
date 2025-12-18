const LeadershipItem = ({ title, points }) => {
  return (
    <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2 text-slate-400">
        {points.map((point, idx) => (
          <li key={idx}>• {point}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeadershipItem;
