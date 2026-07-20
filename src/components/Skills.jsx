import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    FaBootstrap,
  } from "react-icons/fa";
  
  import {
    SiExpress,
    SiMongodb,
    SiPostman,
    SiJsonwebtokens,
  } from "react-icons/si";
  
  function Skills() {
    const skills = [
      { name: "HTML5", icon: <FaHtml5 size={45} className="text-danger" /> },
      { name: "CSS3", icon: <FaCss3Alt size={45} className="text-primary" /> },
      { name: "JavaScript", icon: <FaJsSquare size={45} className="text-warning" /> },
      { name: "React.js", icon: <FaReact size={45} className="text-info" /> },
      { name: "Node.js", icon: <FaNodeJs size={45} className="text-success" /> },
      { name: "Express.js", icon: <SiExpress size={45} /> },
      { name: "MongoDB", icon: <SiMongodb size={45} className="text-success" /> },
      { name: "Bootstrap", icon: <FaBootstrap size={45} className="text-primary" /> },
      { name: "JWT", icon: <SiJsonwebtokens size={45} className="text-warning" /> },
      { name: "Git", icon: <FaGitAlt size={45} className="text-danger" /> },
      { name: "Docker", icon: <FaDocker size={45} className="text-info" /> },
      { name: "Postman", icon: <SiPostman size={45} className="text-warning" /> },
      
    ];
  
    return (
      <section id="skills" className="py-5 bg-white">
        <div className="container">
  
          <div className="text-center mb-5">
            <h2 className="fw-bold">Technical Skills</h2>
            <p className="text-muted">
              Technologies I work with
            </p>
          </div>
  
          <div className="row g-4">
  
            {skills.map((skill) => (
              <div className="col-6 col-md-4 col-lg-3" key={skill.name}>
  
                <div
                  className="card border-0 shadow-sm h-100 text-center p-4"
                  style={{
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                >
                  <div className="mb-3">
                    {skill.icon}
                  </div>
  
                  <h5>{skill.name}</h5>
  
                </div>
  
              </div>
            ))}
  
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;