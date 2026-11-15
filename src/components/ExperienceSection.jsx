const experiences = [
  {
    id: "tesla",
    title: "Software Engineer Intern",
    company: "Tesla | Fremont, CA",
    period: "September 2026 - Present",
    description: "Applied AI | Financial Systems",
  },
  {
    id: 0,
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services | Arlington, VA",
    period: "May 2026 - August 2026",
    description: "Worked on an AI operations agent for billing systems using Lambda, Bedrock, and Python. Focused on diagnosing distributed failures and connecting signals across accounts and workflows.",
  },
  {
    id: 1,
    title: "Undergraduate Research Assistant",
    subtitle: "Advisor: Prof. Andres Bejarano",
    company: "Purdue University | West Lafayette, IN",
    period: "January 2026 - August 2026",
    description: "Studied how students use AI tools and how those tools fit into their learning. The research focused on adoption patterns and educational outcomes.",
  },
  {
    id: 2,
    title: "Undergraduate Research Assistant",
    subtitle: "Advisor: Prof. Dan Goldwasser",
    company: "Purdue University | West Lafayette, IN",
    period: "January 2026 - August 2026",
    description: "Explored how graph-based context shapes language-model predictions in socially grounded sentiment analysis. Compared prompting approaches through model evaluation and benchmarking experiments.",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Ernst & Young LLP | Chicago, IL",
    period: "June 2025 - August 2025",
    description: "Worked on automation and AI-assisted tooling for financial data and tax reporting. Built data workflows with Python, .NET, and Azure to bring information from multiple systems together.",
  },
  {
    id: 4,
    title: "Undergraduate Teaching Assistant",
    company: "Purdue University | West Lafayette, IN",
    period: "August 2024 - August 2026",
    description: "Supported courses in data structures and algorithms, computer architecture, foundations of computer science, and developer tools. These included CS 251, CS 250, CS 182, and CS 193.",
  },
  {
    id: 6,
    title: "Software Engineer Intern",
    company: "Ciena | Gurgaon, Haryana",
    period: "June 2024 - August 2024",
    description: "Worked on network protocol testing and automation with Python. Focused on IS-IS, IPv6, and the reliability of routing workflows.",
  },
  {
    id: 7,
    title: "Undergraduate Research Assistant",
    company: "Caterpillar | West Lafayette, IN",
    period: "August 2023 - May 2024",
    description: "Explored supply-chain risk through data analysis and predictive modeling. Combined data pipelines and dashboards to make risk signals easier to interpret.",
  },
];

const groups = [
  { id: "experience", title: "Work History", entries: experiences.filter(exp => ["tesla", 0, 3, 6].includes(exp.id)) },
  { id: "research", title: "Research", entries: experiences.filter(exp => [1, 2, 7].includes(exp.id)) },
  { id: "teaching", title: "Teaching", entries: experiences.filter(exp => exp.id === 4) },
];
const shortPeriod = (period) => period.replace(/January/g, "Jan").replace(/September/g, "Sep").replace(/August/g, "Aug").replace(/June/g, "Jun").replace(" - ", " – ");

export const ExperienceSection = () => (
  <>{groups.map(group => (
    <section key={group.id} id={group.id} className="content-section page-width" aria-labelledby={`${group.id}-title`}>
      <h2 id={`${group.id}-title`}>{group.title}</h2>
      <ul className="experience-list">{group.entries.map(exp => <ExperienceRow key={exp.id} exp={exp} />)}</ul>
    </section>
  ))}</>
);

const ExperienceRow = ({ exp }) => {
  const [company, location] = exp.company.split(" | ");
  return (
    <li className="experience-row">
      <p className="role-heading"><span className="experience-date">{shortPeriod(exp.period)}:</span>{" "}{exp.title} @ <strong>{company}</strong></p>
      <p className="role-location">{location}</p>
      {exp.subtitle && <p className="advisor">{exp.subtitle}</p>}
      <p className="role-overview">{exp.description}</p>
    </li>
  );
};
