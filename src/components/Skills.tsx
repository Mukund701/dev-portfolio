import React from 'react';
import { Code, Database, Globe, Server, Palette, Layers } from 'lucide-react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'blue',
      skills: [
        { name: 'React & Next.js', icon: '⚛️' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'JavaScript (ES6+)', icon: '📜' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'shadcn/ui', icon: '✨' },
        { name: 'HTML5 & CSS3', icon: '📄' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'green',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'Python', icon: '🐍' },
        { name: 'Next.js API Routes', icon: '🔄' },
        { name: 'REST APIs', icon: '🔌' },
      ]
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      color: 'purple',
      skills: [
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Supabase', icon: '⚡' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Git & GitHub', icon: '🔗' },
        { name: 'Vercel', icon: '🔼' },
        { name: 'Selenium', icon: '🤖' },
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title gradient-text">Skills & Expertise</h2>
        
        <div className="skills-intro">
          <p>
            Proficient in modern technologies for building scalable, performant, and user-friendly full-stack applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`skill-category ${category.color}`}
            >
              <div className="category-header">
                <div className="category-icon">
                  <category.icon size={24} />
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <div className="summary-card">
            <Layers size={32} />
            <div>
              <h4>Full-Stack Architecture</h4>
              <p>Designing and building robust, end-to-end application logic.</p>
            </div>
          </div>
          
          <div className="summary-card">
            <Code size={32} />
            <div>
              <h4>Type-Safe Code</h4>
              <p>Leveraging TypeScript to improve code maintainability and reduce runtime errors.</p>
            </div>
          </div>
          
          <div className="summary-card">
            <Palette size={32} />
            <div>
              <h4>Responsive UI/UX</h4>
              <p>Creating seamless and intuitive user experiences across all devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;