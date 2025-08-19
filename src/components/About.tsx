import React from 'react';
import { Heart, Coffee, Code2, Gamepad2, Music } from 'lucide-react';
import '../styles/About.css';

const About: React.FC = () => {
  const interests = [
    { icon: Code2, label: 'Clean Code', color: 'blue' },
    { icon: Coffee, label: 'Coffee Lover', color: 'green' },
    { icon: Gamepad2, label: 'Gaming', color: 'purple' },
    { icon: Music, label: 'Music', color: 'pink' },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title gradient-text">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <div className="profile-image">
                <img 
                  src="/Photo.jpg" 
                  alt="Bal Mukund Sharma" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              <div className="image-glow"></div>
            </div>
          </div>

          <div className="about-text">
            <div className="text-content">
              <h3 className="about-subtitle">
                A passionate developer turning ideas into real-world applications.
              </h3>
              
              <p className="about-description">
                As a final-year Computer Science student, I specialize in full-stack development, where I enjoy designing, building, and deploying scalable web applications. My toolkit is centered around modern technologies like Next.js, TypeScript, and Node.js.
              </p>

              <p className="about-description">
                My journey in tech is driven by a strong foundation in software engineering principles and the hands-on experience gained from my projects. I am always eager to learn and apply new skills to solve complex problems in a professional environment.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-number gradient-text">1+</span>
                  <span className="highlight-text">Year of Experience</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number gradient-text">2</span>
                  <span className="highlight-text">Projects Completed</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-number gradient-text">10+</span>
                  <span className="highlight-text">Core Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="interests-section">
          <h3 className="interests-title">
            <Heart size={24} />
            What I Love
          </h3>
          
          <div className="interests-grid">
            {interests.map(({ icon: Icon, label, color }, index) => (
              <div key={index} className={`interest-card ${color}`}>
                <div className="interest-icon">
                  <Icon size={24} />
                </div>
                <span className="interest-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;