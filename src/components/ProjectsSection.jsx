import {ExternalLink, Github } from "lucide-react";

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
    githubUrl: "https://github.com/arnavdaryani/Youtube-Video-Summarizer"
  },
  {
    id: 10,
    title: "Stock Trend Predictor",
    description:
      "A Streamlit web app that predicts stock trends using an LSTM neural network, powered by TensorFlow, Keras, and real-time financial data.",
    image: "projects/img.png",
    tags: ["Tensorflow", "Keras", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    githubUrl: "https://github.com/arnavdaryani/StockPredictor"
  },
  {
    id: 11,
    title: "Marketplace Application",
    description:
      "A desktop e-commerce application supporting concurrent users, seller and customer roles, with CSV-based persistent data storage and networked client-server architecture.",
    image: "projects/marketplace.png",
    tags: ["Java", "JUnit"],
    githubUrl: "https://github.com/arnavdaryani/CS180-Project-5"
  },
  {
    id: 12,
    title: "Personal Website",
    description:
      "A responsive personal portfolio website, showcasing projects and experience through interactive design and smooth navigation.",
    image: "projects/personal.png",
    tags: ["React.js", "TailwindCSS"],
    githubUrl: "https://github.com/arnavdaryani/Personal-Website"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto">
          
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${index}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="mt-auto flex justify-start">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 inline-block"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};