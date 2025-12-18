import SectionHeader from "../../ui/SectionHeader";
import TechGroup from "./TechGroup";


export default function TechStack()
{
    return(
        <section id= "tech-stack" className="py-24 bg-slate-950">
            
       <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Capabilities"
          title="Tech Stack"
          subtitle="Enterprise technologies, data platforms, and modern AI tooling used in production systems."
        />

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <TechGroup
            title="Backend & APIs"
            items={[
              ".NET / C#",
              "ASP.NET Core, Web API",
              "REST, SOAP, Microservices",
              "WCF, Windows Services"
            ]}
          />

          <TechGroup
            title="Data & Analytics"
            items={[
              "SQL Server, Oracle",
              "SSIS, ETL Pipelines",
              "Python, Pandas, NumPy",
              "Power BI"
            ]}
          />

          <TechGroup
            title="AI / NLP"
            items={[
              "BERT, Sentence Transformers",
              "FAISS, RAG",
              "T5, LSTM",
              "Chatbot Architectures"
            ]}
          />

          <TechGroup
            title="Frontend"
            items={[
              "React + Vite",
              "JavaScript / TypeScript",
              "Tailwind CSS"
            ]}
          />

          <TechGroup
            title="Cloud & DevOps"
            items={[
              "Azure (AZ-104, AZ-900)",
              "CI/CD Pipelines",
              "Monitoring & Production Support"
            ]}
          />

          <TechGroup
            title="Tools & Platforms"
            items={[
              "GitHub, Azure DevOps",
              "Jira, Confluence",
              "Postman, SSMS, VS Code"
            ]}
          />
        </div>
      </div>
            
        </section>
    );
};