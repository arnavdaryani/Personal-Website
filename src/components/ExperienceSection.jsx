const experiences = [
  {
    id: "tesla",
    title: "Software Engineer Intern",
    company: "Tesla | Fremont, CA",
    period: "September 2026 - Present",
    description: "Applied AI · Financial systems",
  },
  {
    id: 0,
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services | Arlington, VA",
    period: "May 2026 - August 2026",
    description: "AI agents · Billing operations · Distributed systems",
  },
  {
    id: 1,
    title: "Undergraduate Research Assistant",
    subtitle: "Advisor: Prof. Andres Bejarano",
    company: "Purdue University | West Lafayette, IN",
    period: "January 2026 - August 2026",
    description: "AI adoption · Educational outcomes",
  },
  {
    id: 2,
    title: "Undergraduate Research Assistant",
    subtitle: "Advisor: Prof. Dan Goldwasser",
    company: "Purdue University | West Lafayette, IN",
    period: "January 2026 - August 2026",
    description: "Graph-conditioned LLMs · Sentiment analysis · Model evaluation",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Ernst & Young LLP | Chicago, IL",
    period: "June 2025 - August 2025",
    description: "Financial data · Tax automation · AI tooling",
  },
  {
    id: 4,
    title: "Undergraduate Teaching Assistant",
    company: "Purdue University | West Lafayette, IN",
    period: "August 2024 - August 2026",
    description: "CS 251 · CS 250 · CS 182 · CS 193",
  },
  {
    id: 6,
    title: "Software Engineer Intern",
    company: "Ciena | Gurgaon, Haryana",
    period: "June 2024 - August 2024",
    description: "Network automation · IS-IS · IPv6",
  },
  {
    id: 7,
    title: "Undergraduate Research Assistant",
    company: "Caterpillar | West Lafayette, IN",
    period: "August 2023 - May 2024",
    description: "Supply-chain risk · Predictive modeling · Data visualization",
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
      {group.id === "teaching" ? (
        <>
          <p className="role-heading">Undergraduate Teaching Assistant @ <strong>Purdue University</strong></p>
          <p className="role-location">Aug 2024 – Aug 2026 · West Lafayette, IN</p>
          <ul className="teaching-courses">
            <li><strong>CS 251</strong> · Data Structures &amp; Algorithms</li>
            <li><strong>CS 250</strong> · Computer Architecture</li>
            <li><strong>CS 182</strong> · Foundations of Computer Science</li>
            <li><strong>CS 193</strong> · Tools</li>
          </ul>
        </>
      ) : <ul className="experience-list">{group.entries.map(exp => <ExperienceRow key={exp.id} exp={exp} />)}</ul>}
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
