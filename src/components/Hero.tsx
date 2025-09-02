import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Empowering York Region's Youth with
              <span className="highlight"> Financial Literacy</span>
            </h1>
            <p className="hero-subtitle">
              Join the emerging student-led financial literacy organization in York Region. 
              Learn, grow, and build your financial knowledge alongside peers from across the region.
            </p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="https://targetalpha.ca" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Join Target Alpha
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>50</h3>
              <p>Member Chapter</p>
            </div>
            <div className="stat-item">
              <h3>8+</h3>
              <p>York Region Schools</p>
            </div>
            <div className="stat-item">
              <h3>3</h3>
              <p>Annual Events</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
