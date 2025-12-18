import SectionHeader from "../../ui/SectionHeader";
import AiCard from "./AiCard";

const AiProjects = [
{
    title: "CRISP-DM Data Analytics Project",
    description:
      "End-to-end analytics using business understanding, data prep, modeling, and evaluation on large datasets.",
    stack: ["Python", "Pandas", "Scikit-learn"]
  },
  {
    title: "AutoML vs Python Benchmarking",
    description:
      "Benchmarked AutoML outputs against handcrafted ML pipelines for accuracy, explainability, and performance.",
    stack: ["AutoML", "Python", "ML Metrics"]
  },
  {
    title: "Chatbot Architectures Comparison",
    description:
      "Designed and compared LSTM-based models with Transformer and RAG pipelines using FAISS and embeddings.",
    stack: ["BERT", "FAISS", "RAG", "LSTM"]
  },
  {
    title: "Analytics Dashboards",
    description:
      "Built interactive dashboards for insights and storytelling using structured datasets.",
    stack: ["Power BI", "Python"]
  }
]
export default function AiLab()
{
    return(
        <section id= "ai-lab" 
        className="py-24 bg-slate-900">
            <div className="max-w-2xl mx-auto px-6">
                <SectionHeader label="Data & AI" title="AI Lab" subtitle = "High-scale financial systems, regulatory platforms, and automation delivered in production environments."/>
                {
                      <div className="grid gap-8 md:grid-cols-2">

                        {
                            AiProjects.map((ap,indx)=>
                                (
                                    <AiCard key={indx} {...ap}></AiCard>
                                ))
                            
                        }            
                    </div>
                }
            </div>
        </section>
    );
};