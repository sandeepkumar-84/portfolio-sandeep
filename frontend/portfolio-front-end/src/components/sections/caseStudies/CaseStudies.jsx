import SectionHeader from "../../ui/SectionHeader";
import CaseStudyCard from "./case-study-cards/CaseStudyCard";
const caseStudiesData = [
  {
    title: "FINRA Web Electronic Filing Migration",
    problem: "Legacy API, scalability issues",
    solution: "Migrated to latest FINRA API with SSIS ETL & .NET jobs",
    impact: "Processed millions of daily updates, improved compliance",
    tech: [".NET", "SSIS", "SQL Server"]
  },
  {
    title: "Alerts 2.0 – RegEd Platform",
    problem: "Manual compliance effort for NIPR data",
    solution: "Automated data ingestion and batch processing",
    impact: "High-volume automation, reduced manual effort",
    tech: ["C#", "SQL", "APIs"]
  },
  {
    title: "DBS Chatbot Dissertation Project",
    problem: "Traditional chatbot not accurate for brochure queries",
    solution: "Transformer + FAISS + RAG pipeline with LSTM comparison",
    impact: "Academic + applied AI solution for semantic search",
    tech: ["Python", "BERT", "FAISS", "RAG"]
  },
  {
    title: "DBS Chatbot Dissertation Project1",
    problem: "Traditional chatbot not accurate for brochure queries",
    solution: "Transformer + FAISS + RAG pipeline with LSTM comparison",
    impact: "Academic + applied AI solution for semantic search",
    tech: ["Python", "BERT", "FAISS", "RAG"]
  }
];
export default function CaseStudies()
{
    return(
        <section id= "case-studies" className="py-24 bg-slate-950">
            <div className="max-w-4xl mx-auto px-20">
                <SectionHeader label="Enterprise Work" title="Case Studies" subtitle = "High-scale financial systems, regulatory platforms, and automation delivered in production environments."/>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    caseStudiesData.map((cs, idx) => 
                        (
                            <CaseStudyCard key={idx} {...cs} />
                        )
                    )
                }
                </div>
            </div>
        </section>
    );
};