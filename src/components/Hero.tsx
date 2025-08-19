import React from 'react';
import { Code, Zap, Rocket } from 'lucide-react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Code size={16} />
            <span>Full-Stack Developer</span>
          </div>
          
          <h1 className="hero-title">
            <span className="hero-greeting">Hey, I'm</span>
            <span className="hero-name gradient-text">Bal Mukund Sharma</span>
            <span className="hero-tagline">Building the future, one project at a time</span>
          </h1>

          <p className="hero-description">
            A final-year Computer Science student specializing in building and deploying scalable web applications with Next.js, TypeScript, and Node.js.
          </p>

          <div className="hero-actions">
            <button className="cta-button primary" onClick={scrollToAbout}>
              <span>Explore My Work</span>
              <Rocket size={18} />
            </button>
            
            <a 
              href="/Resume.pdf" 
              download="BalMukundSharma-Resume.pdf"
              className="cta-button secondary"
              style={{ textDecoration: 'none', justifyContent: 'center' }} 
            >
              <span>Download Resume</span>
              <Zap size={18} />
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number gradient-text">2</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">1+</span>
              <span className="stat-label">Year Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number gradient-text">20+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-icon icon-1">
              <Code size={24} />
            </div>
            <div className="floating-icon icon-2">
              <Zap size={24} />
            </div>
            <div className="floating-icon icon-3">
              <Rocket size={24} />
            </div>
          </div>
          
          <div className="hero-3d-text">
            <span className="text-3d">DEV</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;