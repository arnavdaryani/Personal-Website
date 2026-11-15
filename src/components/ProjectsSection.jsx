const projects = [
  {
    id: 12,
    title: "Chess Position Recognition",
    description:
      "An Android app that turns chessboard photos into digital positions for analysis. Combines edge detection, board mapping, and a TensorFlow CNN to locate squares and identify pieces.",
    tags: ["Android", "Flutter", "Computer Vision", "TensorFlow", "CNN"],
    category: "ML / AI",
    reportUrl: "/projects/chess-position-recognition.pdf",
  },
  {
    id: 1,
    title: "UNIX-Shell",
    description:
      "A UNIX shell written in C and C++, with command parsing, subshells, wildcard expansion, and an interactive line editor.",
    tags: ["C++", "C", "Flex", "Bison", "UNIX"],
    category: "Systems",
    githubUrl: "https://github.com/arnavdaryani/UNIX-Shell",
  },
  {
    id: 2,
    title: "MotionPose",
    description:
      "A web application that brings 3D pose estimation and face tracking into live performances.",
    tags: ["Python", "OpenCV", "PyTorch", "YOLO", "WebSocket API"],
    category: "ML / AI",
    githubUrl: "https://github.com/murrayrl/motionpose",
  },
  {
    id: 3,
    title: "InvisiConnect",
    description:
      "An event and member management app for IIAN, built with Hack the Future.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js", "Python", "Google Maps API"],
    category: "Web",
    githubUrl: "https://github.com/Hack-the-Future/IIAN",
  },
  {
    id: 4,
    title: "Malloc",
    description:
      "A memory allocator in C with constant-time coalescing and multiple free lists.",
    tags: ["C"],
    category: "Systems",
    githubUrl: "https://github.com/arnavdaryani/Malloc",
  },
  {
    id: 5,
    title: "SimpleC-Compiler",
    description:
      "A custom C subset compiler translating code to assembly with support for variables, control flow, and script execution.",
    tags: ["x86-64", "C", "Lex", "Yacc"],
    category: "Systems",
    githubUrl: "https://github.com/arnavdaryani/SimpleC-Compiler",
  },
  {
    id: 6,
    title: "YWCA Scheduling Website",
    description:
      "A shared kitchen scheduling website built with the YWCA through Hack the Future.",
    tags: ["MongoDB", "React.js", "Node.js", "Express.js"],
    category: "Web",
    githubUrl: "https://github.com/Hack-the-Future/ywca-scheduling",
  },
  {
    id: 7,
    title: "BudgetBuddy",
    description:
      "An expense tracker with interactive charts for reviewing spending, built with the MERN stack.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js"],
    category: "Web",
    githubUrl: "https://github.com/arnavdaryani/BudgetBuddy",
  },
  {
    id: 8,
    title: "YouTube Video Summarizer",
    description:
      "A Streamlit app that uses Gemini to summarize YouTube videos.",
    tags: ["Python", "Google Gemini API", "Streamlit"],
    category: "ML / AI",
    githubUrl: "https://github.com/arnavdaryani/Youtube-Video-Summarizer",
  },
  {
    id: 9,
    title: "Stock Trend Predictor",
    description:
      "A Streamlit web app that predicts stock trends using an LSTM neural network, powered by TensorFlow, Keras, and real-time financial data.",
    tags: ["TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    category: "ML / AI",
    githubUrl: "https://github.com/arnavdaryani/StockPredictor",
  },
  {
    id: 10,
    title: "Marketplace Application",
    description:
      "A desktop marketplace with buyer and seller accounts, concurrent connections, and persistent storage.",
    tags: ["Java", "JUnit"],
    category: "Desktop",
    githubUrl: "https://github.com/arnavdaryani/CS180-Project-5",
  },
  {
    id: 11,
    title: "Personal Website",
    description:
      "The source for this website, built with React and hosted on GitHub Pages.",
    tags: ["React.js", "TailwindCSS"],
    category: "Web",
    githubUrl: "https://github.com/arnavdaryani/Personal-Website",
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="content-section page-width" aria-labelledby="projects-title">
    <h2 id="projects-title">Selected projects</h2>
    <div className="project-list">{projects.slice(0, 4).map(project => <ProjectEntry key={project.id} project={project} />)}</div>
    <details className="more-projects">
      <summary>More projects ({projects.length - 4})</summary>
      <div className="project-list">{projects.slice(4).map(project => <ProjectEntry key={project.id} project={project} />)}</div>
    </details>
  </section>
);
const ProjectEntry = ({ project }) => (
  <article className="project-entry">
    <h3 className="project-title"><a href={project.reportUrl ?? project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={project.reportUrl ? `${project.title} — view project poster` : `${project.title} on GitHub`}>{project.title} <span aria-hidden="true">↗</span></a></h3>
    <p>{project.description}</p>
    <div className="project-tags">{project.tags.join(" · ")}</div>
  </article>
);
