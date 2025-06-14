import React from "react";

const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Ernst & Young LLP | Chicago, IL",
    period: "June 2025 - Present",
    description: [
      "Platform Development @ Indirect Tax Technology"
    ],
    image: "experience/ey.png" // Add your EY logo image
  },
  {
    id: 2,
    title: "Undergraduate Teaching Assistant - Computer Architecture",
    company: "Purdue University | West Lafayette, IN",
    period: "Jan 2025 - May 2025",
    description: [
      "Led weekly labs and office hours for 700+ students, improving comprehension of computer architecture concepts including digital logic, circuits, compiler creation, and ARM assembly programming."
    ],
    image: "experience/purdue.png" // Add your Purdue logo image
  },
  {
    id: 3,
    title: "Undergraduate Research Assistant - VIPER Lab",
    company: "Purdue University | West Lafayette, IN",
    period: "August 2024 - December 2024",
    description: [
        "Developed an Android application to capture chessboard images, detect piece positions, and identify piece types.",
        "Applied Canny Edge Detection and Otsu's Thresholding to map chess pieces, refining processing accuracy.",
        "Engineered a Contour Edge Detection algorithm with 95% accuracy on 200+ images for empty-square detection.",
        "Trained and optimized a CNN with TensorFlow, reducing classification errors through confusion matrix analysis."
    ],
    image: "experience/purdue.png" // Add your Purdue logo image
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Ciena | Remote",
    period: "June 2024 - August 2024",
    description: [
        "Reduced manual testing effort by 30% and improved accuracy by automating IS-IS protocol tests with Python.",
        "Configured and optimized IS-IS for IPv6, enabling dual-stack integration and boosting routing efficiency.",
        "Developed comprehensive IPv6 test cases that doubled test coverage and enhanced system reliability."
    ],
    image: "experience/ciena.png" // Add your Ciena logo image
  },
  {
    id: 5,
    title: "Undergraduate Research Assistant",
    company: "Caterpillar | West Lafayette, IN",
    period: "August 2023 - May 2024",
    description: [
        "Built a data pipeline with R and Pandas to analyze 7 key indicators impacting supply chain efficiency.",
        "Imputed missing data using PyCaret, improving data completeness by 25% and enhancing risk model accuracy.",
        "Created a PowerBI dashboard delivering live risk forecasts, enabling proactive supply chain issue management."
    ],
    image: "experience/caterpillar.png" // Add your Caterpillar logo image
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 px-8 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="relative mt-16">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-blue-500/20 via-purple-500/40 to-pink-500/20 w-1 h-full" />

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div key={exp.id} className="mb-16 w-full">
                {/* Mobile layout */}
                <div className="md:hidden w-full mb-8">
                  <MobileCard exp={exp} />
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-12 items-center">
                  {isLeft ? (
                    <>
                      {/* Left content */}
                      <div className="col-span-5 pr-12 text-center">
                        <DesktopCard exp={exp} align="left" />
                      </div>
                      {/* Timeline */}
                      <TimelineIcon exp={exp} />
                      {/* Empty placeholder */}
                      <div className="col-span-5" />
                    </>
                  ) : (
                    <>
                      {/* Empty placeholder */}
                      <div className="col-span-5" />
                      {/* Timeline */}
                      <TimelineIcon exp={exp} />
                      {/* Right content */}
                      <div className="col-span-5 pl-12">
                        <DesktopCard exp={exp} align="left" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const MobileCard = ({ exp }) => (
  <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-300">
    <div className="flex items-center mb-6">
      <div className="bg-background rounded-full p-6 mr-6 shadow-lg border-2 border-primary/20 w-28 h-28 flex items-center justify-center">
        <img 
          src={exp.image} 
          alt={`${exp.company} logo`}
          className="w-16 h-16 object-contain"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="w-16 h-16 bg-primary/20 rounded flex items-center justify-center text-primary font-bold text-2xl hidden">
          {exp.company.charAt(0)}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.title}</h3>
        <p className="text-muted-foreground text-base">{exp.period}</p>
      </div>
    </div>
    <p className="text-muted-foreground font-medium mb-6 text-base">{exp.company}</p>
    <ul className="space-y-3 text-base text-muted-foreground">
      {exp.description.map((line, i) => (
        <li key={i} className="leading-relaxed flex items-start">
          <span className="text-primary mr-3 mt-2 text-sm">▶</span>
          {line}
        </li>
      ))}
    </ul>
  </div>
);

const DesktopCard = ({ exp, align }) => (
  <div className="bg-card rounded-3xl p-10 shadow-lg border border-border/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[300px]">
    <h3 className="text-2xl font-semibold mb-4 text-foreground">{exp.title}</h3>
    <p className="text-muted-foreground font-medium mb-6 text-base">{exp.company}</p>
    <ul className={`space-y-4 text-base text-muted-foreground text-${align}`}>
      {exp.description.map((line, i) => (
        <li key={i} className="leading-relaxed flex items-start">
          <span className="text-primary mr-3 mt-2 text-sm">▶</span>
          {line}
        </li>
      ))}
    </ul>
  </div>
);

const TimelineIcon = ({ exp }) => (
  <div className="col-span-2 flex flex-col items-center z-10">
    <div className="bg-background rounded-full p-6 shadow-lg border-2 border-primary/20 hover:border-primary/50 transition-colors duration-300 w-28 h-28 flex items-center justify-center">
      <img 
        src={exp.image} 
        alt={`${exp.company} logo`}
        className="w-16 h-16 object-contain"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <div className="w-16 h-16 bg-primary/20 rounded flex items-center justify-center text-primary font-bold text-2xl hidden">
        {exp.company.charAt(0)}
      </div>
    </div>
    <div className="mt-4 px-4 py-2 bg-secondary rounded-full">
      <p className="text-sm font-medium text-secondary-foreground text-center whitespace-nowrap">
        {exp.period}
      </p>
    </div>
  </div>
);