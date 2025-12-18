import SectionHeader from "../../ui/SectionHeader";
export default function AiLab()
{
    return(
        <section id= "ai-lab" 
        className="py-24 bg-slate-900">
            <div className="max-w-2xl mx-auto px-6">
                <SectionHeader label="Data & AI" title="AI Lab" subtitle = "High-scale financial systems, regulatory platforms, and automation delivered in production environments."/>
                <h1 className="text-2xl text-white">
                    This is AI Lab 
                </h1>
            </div>
        </section>
    );
};