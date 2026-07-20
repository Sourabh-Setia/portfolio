import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "Chandigarh University, Mohali",
      duration: "Aug 2024 - Jun 2026",
      description:
        "Focused on advanced software development, data structures, web technologies, and modern application development.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "DAV College, Abohar",
      duration: "Sep 2019 - Jul 2022",
      description:
        "Built a strong foundation in programming, databases, operating systems, networking, and software engineering.",
    },
  ];

  return (
    <section
      id="education"
      className="py-5"
      style={{
        backgroundColor: "#0F172A",
        color: "white",
      }}
    >
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold text-info">
            Education
          </h2>

          <p className="text-light">
            My academic journey
          </p>
        </div>

        <div className="row">

          {education.map((item, index) => (
            <div className="col-lg-6 mb-4" key={index}>

              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  backgroundColor: "#1E293B",
                  borderRadius: "20px",
                }}
              >
                <div className="card-body p-4">

                  <div className="mb-3">
                    <FaGraduationCap
                      size={45}
                      className="text-info"
                    />
                  </div>

                  <h4 className="fw-bold text-white">
                    {item.degree}
                  </h4>

                  <h6 className="text-info">
                    {item.institute}
                  </h6>

                  <p className="text-secondary">
                    {item.duration}
                  </p>

                  <p className="text-light">
                    {item.description}
                  </p>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;