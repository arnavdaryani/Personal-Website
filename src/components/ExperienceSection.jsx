import { useScrollReveal } from "../hooks/useScrollReveal";

const experiences = [
  {
    id: 0,
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services | Seattle, WA",
    period: "May 2026 - Present",
    description: [
      "AWS Invoicing",
    ],
    image: "experience/aws.png",
  },
  {
    id: 1,
    title: "Undergraduate Research Assistant",
    subtitle: "Advisor: Prof. Andres Bejarano",
    company: "Purdue University | West Lafayette, IN",
    period: "January 2026 - Present",
    description: [
      "Analyzing AI usage patterns among students to understand adoption behaviors and educational outcomes.",
    ],
    image: "experience/purdue-cs.jpeg",
  },
  {
    id: 2,
    title: "Undergraduate Research Assistant",
    subtitle: "Advisor: Prof. Dan Goldwasser",
    company: "Purdue University | West Lafayette, IN",
    period: "January 2026 - Present",
    description: [
      "Built benchmarking pipelines for graph-conditioned LLMs, enabling systematic evaluation of graph-based context against text-only and context-enriched baselines on socially grounded sentiment analysis tasks.",
      "Automated prompt generation, model inference, and evaluation workflows, improving zero-shot Target F1 from 0.63 to 0.75 through controlled graph-conditioned prompting experiments.",
    ],
    image: "experience/purdue-cs.jpeg",
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
    image: "experience/ey.png",
  },
  {
    id: 4,
    title: "Undergraduate Teaching Assistant",
    company: "Purdue University | West Lafayette, IN",
    period: "August 2024 - Present",
    description: [
      "CS 251: Data Structures & Algorithms (Fall '25, Spring '26)",
      "CS 250: Computer Architecture (Spring '25, Fall '25)",
      "CS 182: Foundations of Computer Science (Spring '26)",
      "CS 193: Tools (Fall '24)",
    ],
    image: "experience/purdue-cs.jpeg",
  },
  {
    id: 5,
    title: "Undergraduate Research Assistant - VIPER Lab",
    company: "Purdue University | West Lafayette, IN",
    period: "August 2024 - December 2024",
    description: [
      "Developed an Android application to capture chessboard images, detect piece positions, and identify piece types.",
      "Applied Canny Edge Detection and Otsu's Thresholding to map chess pieces, refining processing accuracy.",
      "Engineered a Contour Edge Detection algorithm with 95% accuracy on 200+ images for empty-square detection.",
      "Trained and optimized a CNN with TensorFlow, reducing classification errors through confusion matrix analysis.",
    ],
    image: "experience/purdue.png",
  },
  {
    id: 6,
    title: "Software Engineer Intern",
    company: "Ciena | Remote",
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
    image: "experience/caterpillar.png",
  },
];

export const ExperienceSection = () => (
  <section id="experience" className="py-24 px-4 sm:px-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

    <div className="max-w-3xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
        Work <span className="text-primary">Experience</span>
      </h2>

      <div className="relative">
        <div className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={exp.id} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ExperienceCard = ({ exp, index }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className="relative pl-20 transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Company logo node — w-12=48px at left-0, center at 24px; line is at left-6=24px */}
      <div className="absolute left-0 top-5 w-12 h-12 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center z-10 shadow-lg shadow-primary/10">
        <img
          src={exp.image}
          alt=""
          className="w-7 h-7 object-contain"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="w-full h-full rounded-full bg-primary/20 hidden items-center justify-center text-primary font-bold text-sm">
          {exp.company.charAt(0)}
        </div>
      </div>

      {/* Card */}
      <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-5 sm:p-7 text-left hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
              {exp.title}
            </h3>
            {exp.subtitle && (
              <p className="text-xs text-muted-foreground mt-0.5">{exp.subtitle}</p>
            )}
            <p className="text-primary text-sm font-medium mt-1">{exp.company}</p>
          </div>
          <span className="shrink-0 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2">
          {exp.description.map((line, i) => (
            <li
              key={i}
              className={`text-sm sm:text-[0.9rem] text-muted-foreground leading-relaxed ${
                exp.noBullet ? "" : "flex items-start gap-2"
              }`}
            >
              {!exp.noBullet && (
                <span className="text-primary mt-[6px] shrink-0 text-[9px]">▶</span>
              )}
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
