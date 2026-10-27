import {
  ArrowUpRight,
  Terminal,
  Scan,
  Network,
  Cpu,
  FileCode2,
  CalendarDays,
  Wallet,
  Play,
  TrendingUp,
  ShoppingBag,
  Globe,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    id: 1,
    title: "UNIX-Shell",
    description:
      "A feature-rich UNIX shell interpreter supporting advanced command parsing, subshell execution, wildcard expansion, and an interactive line editor.",
    tags: ["C++", "C", "Flex", "Bison", "UNIX"],
    icon: Terminal,
    category: "Systems",
    githubUrl: "https://github.com/arnavdaryani/UNIX-Shell",
  },
  {
    id: 2,
    title: "MotionPose",
    description:
      "A real-time web application integrating deep learning–based 3D pose estimation and face tracking into live performances.",
    tags: ["Python", "OpenCV", "Pytorch", "YOLO", "WebSocket API"],
    icon: Scan,
    category: "ML / AI",
    githubUrl: "https://github.com/murrayrl/motionpose",
  },
  {
    id: 3,
    title: "InvisiConnect",
    description:
      "A full-stack MERN web app automating event workflows with real-time analytics and scalable member management for IIAN.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js", "Python", "Google Maps API"],
    icon: Network,
    category: "Web",
    githubUrl: "https://github.com/Hack-the-Future/IIAN",
  },
  {
    id: 4,
    title: "Malloc",
    description:
      "A high-performance custom memory allocator in C with constant-time coalescing, multiple free lists, and low-overhead metadata design.",
    tags: ["C"],
    icon: Cpu,
    category: "Systems",
    githubUrl: "https://github.com/arnavdaryani/Malloc",
  },
  {
    id: 5,
    title: "SimpleC-Compiler",
    description:
      "A custom C subset compiler translating code to assembly with support for variables, control flow, and script execution.",
    tags: ["x86-64", "C", "Lex", "Yacc"],
    icon: FileCode2,
    category: "Systems",
    githubUrl: "https://github.com/arnavdaryani/SimpleC-Compiler",
  },
  {
    id: 6,
    title: "YWCA Scheduling Website",
    description:
      "Collaborated with the YWCA non-profit to develop a robust scheduling website for comprehensive kitchen scheduling and management using MERN stack.",
    tags: ["MongoDB", "React.js", "Node.js", "Express.js"],
    icon: CalendarDays,
    category: "Web",
    githubUrl: "https://github.com/Hack-the-Future/ywca-scheduling",
  },
  {
    id: 7,
    title: "BudgetBuddy",
    description:
      "A MERN stack expense tracker that helps users efficiently manage and visualize their spending with interactive Chart.js graphs.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js"],
    icon: Wallet,
    category: "Web",
    githubUrl: "https://github.com/arnavdaryani/BudgetBuddy",
  },
  {
    id: 8,
    title: "Youtube Video Summarizer",
    description:
      "A Python app using Google Gemini Pro and Streamlit to generate concise summaries of YouTube videos with the power of LLMs.",
    tags: ["Python", "Google Gemini API", "Streamlit"],
    icon: Play,
    category: "ML / AI",
    githubUrl: "https://github.com/arnavdaryani/Youtube-Video-Summarizer",
  },
  {
    id: 9,
    title: "Stock Trend Predictor",
    description:
      "A Streamlit web app that predicts stock trends using an LSTM neural network, powered by TensorFlow, Keras, and real-time financial data.",
    tags: ["Tensorflow", "Keras", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    icon: TrendingUp,
    category: "ML / AI",
    githubUrl: "https://github.com/arnavdaryani/StockPredictor",
  },
  {
    id: 10,
    title: "Marketplace Application",
    description:
      "A desktop e-commerce application supporting concurrent users, seller and customer roles, with CSV-based persistent data storage and networked client-server architecture.",
    tags: ["Java", "JUnit"],
    icon: ShoppingBag,
    category: "Desktop",
    githubUrl: "https://github.com/arnavdaryani/CS180-Project-5",
  },
  {
    id: 11,
    title: "Personal Website",
    description:
      "A responsive personal portfolio website, showcasing projects and experience through interactive design and smooth navigation.",
    tags: ["React.js", "TailwindCSS"],
    icon: Globe,
    category: "Web",
    githubUrl: "https://github.com/arnavdaryani/Personal-Website",
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="content-section page-width">
    <div className="section-heading"><span className="section-index">02 / PROJECTS</span><h2>Ideas, implemented.</h2></div>
    <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
  </section>
);
const ProjectCard = ({ project, index }) => {
  const [ref, visible] = useScrollReveal();
  const Icon = project.icon;
  return (
    <a ref={ref} className={`project-entry reveal ${visible ? "is-visible" : ""}`} href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
      <div className="project-meta"><span>{String(index + 1).padStart(2, "0")} / {project.category}</span><Icon size={20} strokeWidth={1.4} /></div>
      <div className="project-title"><h3>{project.title}</h3><ArrowUpRight size={24} strokeWidth={1.5} /></div>
      <p>{project.description}</p>
      <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
    </a>
  );
};
