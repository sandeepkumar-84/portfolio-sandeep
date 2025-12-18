import SectionHeader from "../../ui/SectionHeader";
import LeadershipItem from "./LeadershipItem";


export default function Leadership()
{
    return(
        <section id= "leadership" className="py-24 bg-slate-900">
            <div className="max-w-2xl mx-auto px-6">
                  <SectionHeader label="Delivery & Leadership" title="Leadership & Execution" subtitle = "Driving teams, delivery, and operational excellence across enterprise financial systems."/>
               </div>
             <div className="grid gap-8 md:grid-cols-2">
          <LeadershipItem
            title="Team Leadership"
            points={[
              "Led teams of 10–15 engineers across development, QA, and production support",
              "Mentored developers and conducted code and test case reviews",
              "Managed performance reviews, training, and knowledge transfer"
            ]}
          />

          <LeadershipItem
            title="Client & Stakeholder Management"
            points={[
              "Primary technical contact for Directors, CTOs, and VP-level stakeholders",
              "Managed SLAs, prioritization, and delivery commitments",
              "Handled U.S. and EU client engagements across time zones"
            ]}
          />

          <LeadershipItem
            title="Production & Quality Governance"
            points={[
              "Owned production support with 100% SLA compliance",
              "Resolved high-severity incidents and root cause analysis",
              "Ensured CMMI Level 5 compliance, audits, and metrics"
            ]}
          />

          <LeadershipItem
            title="Hiring & Talent Acquisition"
            points={[
              "Conducted technical interviews and candidate evaluations",
              "Worked with third-party vendors for organizational hiring",
              "Onboarded and ramped new team members efficiently"
            ]}
          />
        </div>
        </section>
    );
};