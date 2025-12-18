const AiCard = ({title,description,stack}) => {
    return (
        <div className="bg-slate-950 border border-slate-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-3 text-slate-400">{description}</p>
            <p className="mt-4 text-sm text-slate-500">Tech: {stack.join(", ")}</p>
        </div>
    )

}

export default AiCard;