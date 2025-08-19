import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const WEB3FORMS_ACCESS_KEY = 'f28389c0-6a11-4877-9097-89748411c56a';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentContactRef = contactRef.current;

    if (currentContactRef) {
      observer.observe(currentContactRef);
    }

    return () => {
      if (currentContactRef) {
        observer.unobserve(currentContactRef);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const payload = {
      ...formData,
      access_key: WEB3FORMS_ACCESS_KEY
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error("Form submission error:", result);
        setSubmitStatus('error');
      }
    } catch (_error) {
      console.error("Network or other error:", _error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mukundsharma7380@gmail.com',
      href: 'mailto:mukundsharma7380@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Varanasi, UP, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Mukund701',
      color: 'white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/mukundsharma7380',
      color: 'blue'
    }
  ];

  return (
    <section id="contact" className="section contact-section" ref={contactRef}>
      <div className="container">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        
        <div className="contact-intro">
          <p>
            Ready to collaborate on your next project? Let's discuss how we can work together 
            to bring your ideas to life. I'm always excited to take on new challenges!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>Let's Connect</h3>
              <p>Feel free to reach out through any of these channels</p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="contact-method"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={(e) => { if (info.href === '#') e.preventDefault(); }}
                >
                  <div className="method-icon">
                    <info.icon size={24} />
                  </div>
                  <div className="method-info">
                    <span className="method-label">{info.label}</span>
                    <span className="method-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon ${social.color}`}
                    aria-label={social.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send a Message</h3>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-button ${submitStatus}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <span>Error - Try Again</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  Thanks for your message! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;