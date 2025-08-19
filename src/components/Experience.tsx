import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';
import '../styles/Experience.css';

interface EducationItem {
  id: number;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  const educationData: EducationItem[] = [
    {
      id: 1,
      title: 'B.Tech in Computer Science and Engineering',
      organization: 'Bennett University',
      location: 'Greater Noida, UP',
      period: 'Expected May 2026',
      description: [
        'Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering Principles.'
      ],
    },
    {
      id: 2,
      title: 'High School & Intermediate (ISC & ICSE)',
      organization: "St. John's School B.L.W",
      location: 'Varanasi, UP',
      period: 'Completed May 2022 & May 2020',
      description: [
        'Completed higher secondary and high school education with a focus on science and mathematics, building a strong analytical foundation.'
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            entry.target.classList.add('animate-in');
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentExperienceRef = experienceRef.current;

    if (currentExperienceRef) {
      observer.observe(currentExperienceRef);
    }

    return () => {
      if (currentExperienceRef) {
        observer.unobserve(currentExperienceRef);
      }
    };
  }, [animated]);

  return (
    <section id="experience" className="section experience-section" ref={experienceRef}>
      <div className="container">
        <h2 className="section-title gradient-text">Education</h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-connector">
                <div className="timeline-dot">
                  <GraduationCap size={24} />
                </div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="card-header">
                    <h3 className="card-title">{item.title}</h3>
                    <div className="card-meta">
                      <div className="meta-item">
                        <Building size={16} />
                        <span>{item.organization}</span>
                      </div>
                      <div className="meta-item">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <ul className="description-list">
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;