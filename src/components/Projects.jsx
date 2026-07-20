import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "ServiceLink",
      description:
        "A MERN Stack platform that connects users with service providers like electricians, plumbers, carpenters, and more. Includes authentication, booking flow, and responsive UI.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Bootstrap",
      ],
      github: "https://github.com/sourabh-setia",
      demo: "#",
    },
    {
      title: "Employment History Management",
      description:
        "A secure document management application where users can upload and manage employment-related documents with authentication and protected APIs.",
      tech: [
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Multer",
      ],
      github: "https://github.com/sourabh-setia",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-5"
      style={{
        background: "#f8f9fa",
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Projects</h2>
          <p className="text-muted">
            Some of my recent work
          </p>
        </div>

        <div className="row">

          {projects.map((project, index) => (
            <div className="col-lg-6 mb-4" key={index}>

              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  borderRadius: "18px",
                }}
              >
                <div className="card-body p-4">

                  <h3 className="fw-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-secondary">
                    {project.description}
                  </p>

                  <div className="mb-4">

                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="badge bg-info text-dark me-2 mb-2 p-2"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark me-3"
                  >
                    <FaGithub className="me-2" />
                    GitHub
                  </a> */}

                  {/* <a
                    href={project.demo}
                    className="btn btn-info"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    Live Demo
                  </a> */}

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;