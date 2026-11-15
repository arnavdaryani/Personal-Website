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

const groups = [
  { id: "experience", title: "Experience", entries: experiences.filter(exp => ["tesla", 0, 3, 6].includes(exp.id)) },
  { id: "research", title: "Research", entries: experiences.filter(exp => [1, 2, 7].includes(exp.id)) },
  { id: "teaching", title: "Teaching", entries: experiences.filter(exp => exp.id === 4) },
];
const shortPeriod = (period) => period.replace(/January/g, "Jan").replace(/September/g, "Sep").replace(/August/g, "Aug").replace(/June/g, "Jun").replace(" - ", " – ");

export const ExperienceSection = () => (
  <>{groups.map(group => (
    <section key={group.id} id={group.id} className="content-section page-width" aria-labelledby={`${group.id}-title`}>
      <h2 id={`${group.id}-title`}>{group.title}</h2>
      <div className="experience-list">{group.entries.map(exp => <ExperienceRow key={exp.id} exp={exp} />)}</div>
    </section>
  ))}</>
);

const ExperienceRow = ({ exp }) => {
  const [company, location] = exp.company.split(" | ");
  return (
    <article className="experience-row">
      <div className="brand-box"><img src={exp.image} alt="" width="36" height="36" loading="lazy" /></div>
      <div>
        <div className="role-heading"><h3>{company}</h3><span className="experience-date">{shortPeriod(exp.period)}</span></div>
        <p className="role-title">{exp.title}<span className="location"><span className="location-separator"> · </span>{location}</span></p>
        {exp.subtitle && <p className="advisor">{exp.subtitle}</p>}
        <p className="role-overview">{exp.description}</p>
      </div>
    </article>
  );
};
