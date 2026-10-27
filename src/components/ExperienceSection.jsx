import { useScrollReveal } from "../hooks/useScrollReveal";

const experiences = [
  {
    id: "tesla",
    title: "Software Engineer Intern",
    company: "Tesla | Fremont, CA",
    period: "September 2026 - Present",
    description: ["Applied AI | Financial Systems"],
    image: "/experience/brands/tesla.svg",
  },
  {
    id: 0,
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services | Arlington, VA",
    period: "May 2026 - August 2026",
    description: [
      "Built a production AI ops agent with Lambda, Bedrock, and Python, cutting billing triage from 30 to ∼2 minutes.",
      "Automated root-cause analysis across Step Functions, SWF workflows, and DynamoDB for distributed failures.",
      "Engineered cross-account orchestration to correlate multi-system failure signals and surface actionable diagnostics.",
    ],
    image: "/experience/brands/aws.svg",
  },
  {
    id: 1,
    title: "Undergraduate Research Assistant",
    subtitle: "Advisors: Prof. Andres Bejarano & Prof. Dan Goldwasser",
    company: "Purdue University | West Lafayette, IN",
    period: "January 2026 - August 2026",
    description: [
      "Analyzing AI usage patterns among students to understand adoption behaviors and educational outcomes.",
      "Built benchmarking pipelines for graph-conditioned LLMs, enabling systematic evaluation of graph-based context against text-only and context-enriched baselines on socially grounded sentiment analysis tasks.",
      "Automated prompt generation, model inference, and evaluation workflows, improving zero-shot Target F1 from 0.63 to 0.75 through controlled graph-conditioned prompting experiments.",
    ],
    image: "/experience/brands/purdue.svg",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Ernst & Young LLP | Chicago, IL",
    period: "June 2025 - August 2025",
    description: [
      "Developed a .NET Core tool integrating REST APIs to automate STEP matching, reducing manual work by 40%.",
      "Built a Python system using GPT-4 via OpenAI API to process 100K+ SQL records and generate tax reports.",
      "Designed Apache Spark ETL pipelines on Azure Data Lake to consolidate multi-source financial datasets.",
    ],
    image: "/experience/ey.png",
  },
  {
    id: 4,
    title: "Undergraduate Teaching Assistant",
    company: "Purdue University | West Lafayette, IN",
    period: "August 2024 - August 2026",
    description: [
      "CS 251: Data Structures & Algorithms",
      "CS 250: Computer Architecture",
      "CS 182: Foundations of Computer Science",
      "CS 193: Tools",
    ],
    image: "/experience/brands/purdue.svg",
  },
  {
    id: 6,
    title: "Software Engineer Intern",
    company: "Ciena | Gurgaon, Haryana",
    period: "June 2024 - August 2024",
    description: [
      "Reduced manual testing effort by 30% and improved accuracy by automating IS-IS protocol tests with Python.",
      "Configured and optimized IS-IS for IPv6, enabling dual-stack integration and boosting routing efficiency.",
      "Developed comprehensive IPv6 test cases that doubled test coverage and enhanced system reliability.",
    ],
    image: "experience/ciena.png",
  },
  {
    id: 7,
    title: "Undergraduate Research Assistant",
    company: "Caterpillar | West Lafayette, IN",
    period: "August 2023 - May 2024",
    description: [
      "Built a data pipeline with R and Pandas to analyze 7 key indicators impacting supply chain efficiency.",
      "Imputed missing data using PyCaret, improving data completeness by 25% and enhancing risk model accuracy.",
      "Created a PowerBI dashboard delivering live risk forecasts, enabling proactive supply chain issue management.",
    ],
    image: "/experience/brands/caterpillar.svg",
  },
];

export const ExperienceSection = () => (
  <section id="experience" className="content-section page-width">
    <div className="section-heading"><span className="section-index">01 / EXPERIENCE</span><h2>Where I’ve contributed.</h2></div>
    <div className="experience-list">{experiences.map(exp => <ExperienceRow key={exp.id} exp={exp} />)}</div>
  </section>
);

const ExperienceRow = ({ exp }) => {
  const [ref, visible] = useScrollReveal();
  const [company, location] = exp.company.split(" | ");
  const brand = company === "Tesla" ? "tesla" : company.startsWith("Amazon") ? "aws" : company.startsWith("Purdue") ? "purdue" : company.startsWith("Ernst") ? "ey" : company === "Ciena" ? "ciena" : "caterpillar";
  return (
    <article ref={ref} className={`experience-row reveal ${visible ? "is-visible" : ""}`}>
      <div className="experience-company"><div className={`brand-box brand-${brand}`}><img src={exp.image} alt="" width="56" height="56" loading="lazy" /></div><div><h3>{company}</h3><p>{location}</p></div></div>
      <div className="experience-body"><div className="role-heading"><h4>{exp.title}</h4><span className="experience-date">{exp.period}</span></div>
        {exp.subtitle && <p className="advisor">{exp.subtitle}</p>}
        <ul>{exp.description.map(line => <li key={line}><span className="bullet" aria-hidden="true">▶</span><span>{line}</span></li>)}</ul>
      </div>
    </article>
  );
};
