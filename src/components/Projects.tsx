import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, Code } from 'lucide-react';
import '../styles/Projects.css';

// Define the structure for a project
interface Project {
  id: number;
  title: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  category: string;
}

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Complaint Box",
      longDescription: "Engineered a full-stack web application to streamline complaint submission and management. Features a secure admin dashboard with JWT authentication, real-time updates via Supabase, and automated email notifications.",
      technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Resend", "shadcn/ui"],
      image: "https://placehold.co/800x480/0a0a0a/ffffff?text=Smart+Complaint+Box",
      demoUrl: "https://smart-complaint-box.vercel.app/",
      githubUrl: "https://github.com/Mukund701/smart-complaint-box",
      featured: true,
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "City Pulse AI Event Discovery",
      longDescription: "An AI-powered event discovery platform with an on-demand data pipeline. A Node.js API executes a Python/Selenium scraper, and Google's Gemini AI parses unstructured text into clean JSON data.",
      technologies: ["Next.js", "Node.js", "Python", "Gemini AI", "Selenium", "PostgreSQL", "Prisma"],
      image: "https://placehold.co/800x480/1a1a2e/ffffff?text=City+Pulse+AI",
      demoUrl: "#", // This project has no live demo
      githubUrl: "https://github.com/Mukund701/city-pulse",
      featured: true,
      category: "AI & Full-Stack"
    },
  ];

  const nextProject = () => setCurrentProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  const goToProject = (index: number) => setCurrentProject(index);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title gradient-text">Featured Projects</h2>
        
        <div className="projects-intro">
          <p>
            A showcase of my work, demonstrating expertise in modern web technologies 
            and innovative problem-solving.
          </p>
        </div>

        <div className="projects-carousel">
          <div className="carousel-container">
            <button className="carousel-nav prev" onClick={prevProject} aria-label="Previous project">
              <ChevronLeft size={24} />
            </button>

            <div className="projects-showcase">
              {projects.map((project, index) => {
                // This variable checks if a real demo link exists
                const isDemoAvailable = project.demoUrl && project.demoUrl !== "#";
                
                return (
                  <div
                    key={project.id}
                    className={`project-card ${index === currentProject ? 'active' : ''} ${
                      index < currentProject ? 'prev' : index > currentProject ? 'next' : ''
                    }`}
                  >
                    <div className="project-image">
                      <img src={project.image} alt={project.title} onError={(e) => (e.currentTarget.src = 'https://placehold.co/800x480/333/fff?text=Image+Not+Found')} />
                      <div className="project-overlay">
                        <div className="project-actions">
                          {/* UPDATED: This link is now conditionally disabled */}
                          <a 
                            href={isDemoAvailable ? project.demoUrl : undefined}
                            className={`action-button demo ${!isDemoAvailable ? 'disabled' : ''}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => !isDemoAvailable && e.preventDefault()}
                          >
                            <ExternalLink size={18} />
                            <span>{isDemoAvailable ? 'Live Demo' : 'No Demo'}</span>
                          </a>
                          <a 
                            href={project.githubUrl} 
                            className="action-button github"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={18} />
                            <span>View Code</span>
                          </a>
                        </div>
                      </div>
                      {project.featured && (
                        <div className="featured-badge"><Star size={16} /><span>Featured</span></div>
                      )}
                      <div className="category-badge"><Code size={14} /><span>{project.category}</span></div>
                    </div>

                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.longDescription}</p>
                      <div className="project-technologies">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="carousel-nav next" onClick={nextProject} aria-label="Next project">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;