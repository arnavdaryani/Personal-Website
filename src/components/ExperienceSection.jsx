import { useScrollReveal } from "../hooks/useScrollReveal";

const experiences = [
  {
    id: "tesla",
    title: "Software Engineer Intern",
    company: "Tesla | Fremont, CA",
    period: "September 2026 - Present",
    description: "Applied AI | Financial Systems",
    image: "/experience/brands/tesla-linkedin.jpg",
  },
  {
    id: 0,
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services | Arlington, VA",
    period: "May 2026 - August 2026",
    description: "Worked on an AI operations agent for billing systems using Lambda, Bedrock, and Python. Focused on diagnosing distributed failures and connecting signals across accounts and workflows.",
    image: "/experience/brands/aws-linkedin.jpg",
  },
  {
    id: 1,
    title: "Undergraduate Research Assistant",
    subtitle: "Advisor: Prof. Andres Bejarano",
    company: "Purdue University | West Lafayette, IN",
    period: "January 2026 - August 2026",
    description: "Studied how students use AI tools and how those tools fit into their learning. The research focused on adoption patterns and educational outcomes.",
    image: "/experience/brands/purdue-linkedin.jpg",
  },
  {
    id: 2,
    title: "Undergraduate Research Assistant",
    subtitle: "Advisor: Prof. Dan Goldwasser",
    company: "Purdue University | West Lafayette, IN",
    period: "January 2026 - August 2026",
    description: "Explored how graph-based context shapes language-model predictions in socially grounded sentiment analysis. Compared prompting approaches through model evaluation and benchmarking experiments.",
    image: "/experience/brands/purdue-linkedin.jpg",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Ernst & Young LLP | Chicago, IL",
    period: "June 2025 - August 2025",
    description: "Worked on automation and AI-assisted tooling for financial data and tax reporting. Built data workflows with Python, .NET, and Azure to bring information from multiple systems together.",
    image: "/experience/brands/ey-linkedin.jpg",
  },
  {
    id: 4,
    title: "Undergraduate Teaching Assistant",
    company: "Purdue University | West Lafayette, IN",
    period: "August 2024 - August 2026",
    description: "Supported courses in data structures and algorithms, computer architecture, foundations of computer science, and developer tools. These included CS 251, CS 250, CS 182, and CS 193.",
    image: "/experience/brands/purdue-linkedin.jpg",
  },
  {
    id: 6,
    title: "Software Engineer Intern",
    company: "Ciena | Gurgaon, Haryana",
    period: "June 2024 - August 2024",
    description: "Worked on network protocol testing and automation with Python. Focused on IS-IS, IPv6, and the reliability of routing workflows.",
    image: "/experience/brands/ciena-linkedin.jpg",
  },
  {
    id: 7,
    title: "Undergraduate Research Assistant",
    company: "Caterpillar | West Lafayette, IN",
    period: "August 2023 - May 2024",
    description: "Explored supply-chain risk through data analysis and predictive modeling. Combined data pipelines and dashboards to make risk signals easier to interpret.",
    image: "/experience/brands/caterpillar-linkedin.jpg",
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
        <p className="role-overview">{exp.description}</p>
      </div>
    </article>
  );
};
