const projects = [
  {
    id: 12,
    title: "Chess Position Recognition",
    description: "Chessboard recognition · Piece classification · Edge detection",
    tags: ["Android", "Flutter", "Computer Vision", "TensorFlow", "CNN"],
    category: "ML / AI",
    reportUrl: "/projects/chess-position-recognition.pdf",
  },
  {
    id: 1,
    title: "UNIX-Shell",
    description: "Command parsing · Subshells · Wildcard expansion · Line editing",
    tags: ["C++", "C", "Flex", "Bison", "UNIX"],
    category: "Systems",
    githubUrl: "https://github.com/arnavdaryani/UNIX-Shell",
  },
  {
    id: 2,
    title: "MotionPose",
    description: "3D pose estimation · Face tracking · Live performance",
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
