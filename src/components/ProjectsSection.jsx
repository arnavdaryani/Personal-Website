import {ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BudgetBuddy",
    description: "A MERN stack expense tracker that helps users efficiently manage and visualize their spending with interactive Chart.js graphs.",
    image: "projects/dashboard.png",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Chart.js"],
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Youtube Video Summarizer",
    description:
      "A Python app using Google Gemini Pro and Streamlit to generate concise summaries of YouTube videos with the power of LLMs.",
    image: "projects/teded.png",
    tags: ["Python", "Streamlit", "Google Gemini API"],
    githubUrl: "#",
  },
  {
    id: 3,
    title: "YWCA Scheduling Website",
    description:
      "Collaborated with the YWCA non-profit to develop a robust scheduling website for comprehensive kitchen scheduling and management using MERN stack.",
    image: "projects/ywcanew.png",
    tags: ["MongoDB", "React.js", "Node.js", "Express.js"],
    githubUrl: "#",
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
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${index}`}
                      className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base mb-6">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
