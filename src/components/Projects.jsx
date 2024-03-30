import React from "react";
import { projects } from "../projectsdata";
import { motion } from "framer-motion";

function Projects() {
  const projectVariants = {
    hover: { scale: 1.05 },
  };
  return (
    <section id="Projects-section">
      <h1>
        Look at My <span className="gradient-header">Projects</span>
      </h1>
      <div className="projects-list">
        {projects.map((project, id) => (
          <motion.div
            key={id}
            className="projects"
            variants={projectVariants}
            whileHover="hover"
          >
            <div className="image-container">
              <img
                src={project.Image}
                alt="project-image"
                className="project-image"
              />
              <div className="middle">
                <button className="live-links">
                  <a href={project.LiveWebsite} target="_blank">
                    <i
                      className="fa-solid fa-eye"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </a>
                </button>
                <button className="live-links">
                  <a href={project.GithubRepo} target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="project-info">
              <h1>{project.projectName}</h1>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
