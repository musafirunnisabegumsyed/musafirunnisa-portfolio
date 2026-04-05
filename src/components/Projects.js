import React, { useState } from "react";

const projectsData = [
  {
    id: "Civi",
    title: "CiviGuide – Real-Time Disaster Monitoring and Alert System",
    description: [
      "Built a MERN stack web application for real-time disaster monitoring and alerts.",
      "Integrated geolocation, geofencing, and weather APIs to detect environmental conditions.",
      "Implemented JWT authentication, OTP-based password recovery, and real-time notifications.",
      "Designed responsive UI with dynamic data updates for multiple users."
    ]
  },
  {
    id: "QoE",
    title: "Network-Based QoE Assessment Framework Using Machine Learning",
    description: [
      "Created an automated data collection pipeline using Selenium for QoE analysis.",
      "Performed data preprocessing including missing values handling and normalization.",
      "Engineered features for machine learning model input.",
      "Designed and evaluated ML models to predict QoE using network performance metrics."
    ]
  },
  {
    id: "Alzheimer",
    title: "Alzheimer Detection",
    description: [
      "Developed a CNN-based deep learning model to detect Alzheimer’s disease from images.",
      "Utilized pretrained architectures for improved accuracy and efficiency.",
      "Performed data preprocessing including augmentation and normalization.",
      "Evaluated model performance using accuracy, precision, and recall metrics."
    ]
  },
  {
    id: "Hotel",
    title: "Hotel Website",
    description: [
      "Built a responsive frontend using HTML, CSS, and JavaScript.",
      "Designed a user-friendly UI for hotel booking and information display.",
      "Implemented interactive features like image sliders and forms.",
      "Optimized website performance for fast loading and smooth navigation."
    ]
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="card" onClick={() => setSelectedProject(project)}>
            <h3>{project.title}</h3>
            <p>Click to view details</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedProject(null)}>&times;</span>
            <h3>{selectedProject.title}</h3>
            <ul>
              {selectedProject.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;