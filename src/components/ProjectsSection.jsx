import { Github } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "Spendlyzer",
    description: "In Progress",
    image: "projects/progress.jpeg",
    tags: ["React Native", "Node.js", "Express.js", "OpenAI API", "MongoDB", "Chart.js", "Tesseract.js", "OCR"],
    githubUrl: "https://github.com/arnavdaryani/Spendlyzer",
  },
  {
    id: 2,
    title: "UNIX-Shell",
    description:
      "A feature-rich UNIX shell interpreter supporting advanced command parsing, subshell execution, wildcard expansion, and an interactive line editor.",
    image: "projects/shell.jpeg",
    tags: ["C++", "C", "Flex", "Bison", "UNIX"],
    githubUrl: "https://github.com/arnavdaryani/UNIX-Shell",
  },
  {
    id: 3,
    title: "MotionPose",
    description:
      "A real-time web application integrating deep learning–based 3D pose estimation and face tracking into live performances.",
    image: "projects/motionpose.png",
    tags: ["Python", "OpenCV", "Pytorch", "YOLO", "WebSocket API"],
    githubUrl: "https://github.com/murrayrl/motionpose",
  },
  {
    id: 4,
    title: "InvisiConnect",
    description:
      "A full-stack MERN web app automating event workflows with real-time analytics and scalable member management for IIAN.",
    image: "projects/IIAN.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js", "Python", "Google Maps API"],
    githubUrl: "https://github.com/Hack-the-Future/IIAN",
  },
  {
    id: 5,
    title: "Malloc",
    description:
      "A high-performance custom memory allocator in C with constant-time coalescing, multiple free lists, and low-overhead metadata design.",
    image: "projects/malloc.jpg",
    tags: ["C"],
    githubUrl: "https://github.com/arnavdaryani/Malloc",
  },
  {
    id: 6,
    title: "SimpleC-Compiler",
    description:
      "A custom C subset compiler translating code to assembly with support for variables, control flow, and script execution.",
    image: "projects/compiler.avif",
    tags: ["x86-64", "C", "Lex", "Yacc"],
    githubUrl: "https://github.com/arnavdaryani/SimpleC-Compiler",
  },
  {
    id: 7,
    title: "YWCA Scheduling Website",
    description:
      "Collaborated with the YWCA non-profit to develop a robust scheduling website for comprehensive kitchen scheduling and management using MERN stack.",
    image: "projects/ywcanew.png",
    tags: ["MongoDB", "React.js", "Node.js", "Express.js"],
    githubUrl: "https://github.com/Hack-the-Future/ywca-scheduling",
  },
  {
    id: 8,
    title: "BudgetBuddy",
    description: "A MERN stack expense tracker that helps users efficiently manage and visualize their spending with interactive Chart.js graphs.",
    image: "projects/dashboard.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js"],
    githubUrl: "https://github.com/arnavdaryani/BudgetBuddy",
  },
  {
    id: 9,
    title: "Youtube Video Summarizer",
    description: "A Python app using Google Gemini Pro and Streamlit to generate concise summaries of YouTube videos with the power of LLMs.",
    image: "projects/teded.png",
    tags: ["Python", "Google Gemini API", "Streamlit"],
    githubUrl: "https://github.com/arnavdaryani/Youtube-Video-Summarizer",
  },
  {
    id: 10,
    title: "Stock Trend Predictor",
    description:
      "A Streamlit web app that predicts stock trends using an LSTM neural network, powered by TensorFlow, Keras, and real-time financial data.",
    image: "projects/img.png",
    tags: ["Tensorflow", "Keras", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    githubUrl: "https://github.com/arnavdaryani/StockPredictor",
  },
  {
    id: 11,
    title: "Marketplace Application",
    description:
      "A desktop e-commerce application supporting concurrent users, seller and customer roles, with CSV-based persistent data storage and networked client-server architecture.",
    image: "projects/marketplace.png",
    tags: ["Java", "JUnit"],
    githubUrl: "https://github.com/arnavdaryani/CS180-Project-5",
  },
  {
    id: 12,
    title: "Personal Website",
    description:
      "A responsive personal portfolio website, showcasing projects and experience through interactive design and smooth navigation.",
    image: "projects/personal.png",
    tags: ["React.js", "TailwindCSS"],
    githubUrl: "https://github.com/arnavdaryani/Personal-Website",
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 sm:px-8 relative overflow-hidden">
    {/* Subtle background glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <p className="text-center text-muted-foreground mb-16 text-base max-w-2xl mx-auto">
        A collection of things I&apos;ve built
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className="transition-all duration-600"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${(index % 3) * 80}ms`,
      }}
    >
      <div className="group flex flex-col h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient fade at bottom of image into card */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

          {/* GitHub icon — appears on hover */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/60 shadow-md">
              <Github size={13} className="text-foreground" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-bold text-foreground leading-snug">
              {project.title}
            </h3>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              aria-label={`GitHub — ${project.title}`}
            >
              <Github size={15} />
            </a>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
