const projects = [
  {
    id: 12,
    title: "Chess Position Recognition",
    description: "An Android app that turns chessboard photos into digital positions for analysis. Combines edge detection, board mapping, and a TensorFlow CNN to locate squares and identify pieces.",
    tags: ["Android", "Flutter", "Computer Vision", "TensorFlow", "CNN"],
    category: "ML / AI",
    reportUrl: "/projects/chess-position-recognition.pdf",
  },
  {
    id: 1,
    title: "UNIX-Shell",
    description: "A UNIX shell written in C and C++, with command parsing, subshells, wildcard expansion, and an interactive line editor.",
    tags: ["C++", "C", "Flex", "Bison", "UNIX"],
    category: "Systems",
    githubUrl: "https://github.com/arnavdaryani/UNIX-Shell",
  },
  {
    id: 2,
    title: "MotionPose",
    description: "A web application that brings 3D pose estimation and face tracking into live performances.",
    tags: ["Python", "OpenCV", "PyTorch", "YOLO", "WebSocket API"],
    category: "ML / AI",
    githubUrl: "https://github.com/murrayrl/motionpose",
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="content-section page-width" aria-labelledby="projects-title">
    <h2 id="projects-title">Selected projects</h2>
    <div className="project-list">{projects.map(project => <ProjectEntry key={project.id} project={project} />)}</div>
  </section>
);
const ProjectEntry = ({ project }) => (
  <article className="project-entry">
    <h3 className="project-title">{project.title}</h3>
    <p>{project.description}</p>
    <div className="project-tags">{project.tags.join(" · ")}</div>
  </article>
);
