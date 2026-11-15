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
  { id: "experience", title: "Work", entries: experiences.filter(exp => ["tesla", 0, 3, 6, 7].includes(exp.id)) },
  { id: "research", title: "Research", entries: experiences.filter(exp => [2].includes(exp.id)) },
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
          <ul className="teaching-courses">
            <li><a href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs251.html" target="_blank" rel="noopener noreferrer"><strong>CS 251</strong> · Data Structures &amp; Algorithms</a></li>
            <li><a href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs250.html" target="_blank" rel="noopener noreferrer"><strong>CS 250</strong> · Computer Architecture</a></li>
            <li><a href="https://www.cs.purdue.edu/academic-programs/courses/canonical/cs182.html" target="_blank" rel="noopener noreferrer"><strong>CS 182</strong> · Foundations of Computer Science</a></li>
            <li><a href="https://www.purdueusb.com/initiatives/cs193" target="_blank" rel="noopener noreferrer"><strong>CS 193</strong> · Tools</a></li>
          </ul>
        </>
      ) : <ul className="experience-list">{group.entries.map(exp => <ExperienceRow key={exp.id} exp={exp} work={group.id === "experience"} />)}</ul>}
    </section>
  ))}</>
);

const workInfo = {
  tesla: { url: "https://www.tesla.com/", period: "Sep 2026 – Present", focus: "Applied AI · Financial systems" },
  0: { url: "https://aws.amazon.com/", period: "Summer 2026", focus: "Software engineering · AI agents · Billing operations" },
  3: { url: "https://www.ey.com/", period: "Summer 2025", focus: "Software engineering · Tax automation · AI tooling" },
  6: { url: "https://www.ciena.com/", period: "Summer 2024", focus: "Software engineering · Network automation · IPv6" },
  7: { url: "https://www.caterpillar.com/", period: "Aug 2023 – May 2024", focus: "Undergraduate research · Supply-chain risk · Predictive modeling" },
};

const ExperienceRow = ({ exp, work }) => {
  const company = exp.company.split(" | ")[0];
  const info = work ? workInfo[exp.id] : {
    url: "https://www.purdue.edu/",
    period: shortPeriod(exp.period),
    focus: exp.description,
  };
  return (
    <li className="experience-row">
      <p className="work-heading"><a href={info.url} target="_blank" rel="noopener noreferrer">{company}</a><span className="work-date">{info.period}</span></p>
      <p className="role-overview">{info.focus}</p>
      {exp.subtitle && <p className="advisor">{exp.subtitle}</p>}
    </li>
  );
};
