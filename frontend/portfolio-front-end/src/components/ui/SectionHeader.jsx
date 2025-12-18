export default function SectionHeader({label,title,subtitle})
{
    return(

        <div className="mb-12">
            {
                label && (
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                    {label}
                </p>
                )
            }
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
                {title}
            </h2>

            {
                subtitle && (
                    <p className="mt-4 max-w-1xl text-slate-400">
                        {
                            subtitle
                        }
                    </p>
                )
            }
        </div>
        
    );
}

