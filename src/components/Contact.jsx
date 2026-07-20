import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaLinkedin,
  } from "react-icons/fa";
  
  function Contact() {
    return (
      <section
        id="contact"
        className="py-5"
        style={{
          background: "#f8f9fa",
        }}
      >
        <div className="container">
  
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Contact Me
            </h2>
  
            <p className="text-muted">
              Let's connect and build something amazing together.
            </p>
          </div>
  
          <div className="row">
  
            {/* Contact Details */}
  
            <div className="col-lg-5 mb-4">
  
              <div
                className="card border-0 shadow-lg h-100"
                style={{
                  borderRadius: "20px",
                }}
              >
                <div className="card-body p-4">
  
                  <h3 className="fw-bold mb-4">
                    Get in Touch
                  </h3>
  
                  <div className="mb-4">
  
                    <h5>
                      <FaEnvelope className="text-info me-3" />
                      Email
                    </h5>
  
                    <p className="text-secondary">
                      sourabhsetia0786@gmail.com
                    </p>
  
                  </div>
  
                  <div className="mb-4">
  
                    <h5>
                      <FaPhoneAlt className="text-info me-3" />
                      Phone
                    </h5>
  
                    <p className="text-secondary">
                      +91 88476-68497
                    </p>
  
                  </div>
  
                  <div className="mb-4">
  
                    <h5>
                      <FaMapMarkerAlt className="text-info me-3" />
                      Location
                    </h5>
  
                    <p className="text-secondary">
                      Punjab, India
                    </p>
  
                  </div>
  
                  <div>
  
                    <h5>
                      <FaLinkedin className="text-info me-3" />
                      LinkedIn
                    </h5>
  
                    <a
                      href="https://linkedin.com/in/sourabhhsetia"
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none"
                    >
                      linkedin.com/in/sourabhhsetia
                    </a>
  
                  </div>
  
                </div>
              </div>
  
            </div>
  
            {/* Contact Form */}
  
            <div className="col-lg-7">
  
              <div
                className="card border-0 shadow-lg"
                style={{
                  borderRadius: "20px",
                }}
              >
                <div className="card-body p-4">
  
                  <form>
  
                    <div className="mb-3">
                      <label className="form-label">
                        Name
                      </label>
  
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>
  
                    <div className="mb-3">
                      <label className="form-label">
                        Email
                      </label>
  
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>
  
                    <div className="mb-3">
                      <label className="form-label">
                        Message
                      </label>
  
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Write your message..."
                      ></textarea>
                    </div>
  
                    <button
                      className="btn btn-info px-4"
                      type="submit"
                    >
                      Send Message
                    </button>
  
                  </form>
  
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }
  
  export default Contact;