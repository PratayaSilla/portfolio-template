import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <img src="./hero-img.png" alt="" className='hero-img'/>
        <h1 className="hero-name">
          <span className="name-line">MAHESH</span>
          <span className="name-line">PATRO</span>
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none" className='star'>
  <path d="M19.8554 3.05932C21.2734 -0.076406 25.7266 -0.0764027 27.1446 3.05932L31.824 13.4067C32.2391 14.3246 32.9852 15.052 33.9132 15.4437L44.2691 19.8148C47.5285 21.1906 47.5285 25.8094 44.2692 27.1852L33.9132 31.5563C32.9852 31.948 32.2391 32.6754 31.824 33.5933L27.1446 43.9407C25.7266 47.0764 21.2734 47.0764 19.8554 43.9407L15.176 33.5933C14.7609 32.6754 14.0148 31.948 13.0868 31.5563L2.73085 27.1852C-0.528528 25.8094 -0.528532 21.1906 2.73085 19.8148L13.0868 15.4437C14.0148 15.052 14.7609 14.3246 15.176 13.4067L19.8554 3.05932Z" fill="#1B7AFF"/>
</svg>
        <p className="hero-description">
          I'm Mahesh Patro — a seasoned marketing strategist with over a decade of experience
          crafting impactful campaigns and driving brand growth
        </p>
        <p className='scroll-to-explore'>Scroll to know more about me !</p>
      </div>
    </div>
  );
};

export default HeroSection;
