import React from 'react';
import './HomePage.css'; // CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="app-name">learnit</h1>
      <div className="loading-dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
      </div>
    </div>
  );
};

export default HomePage;
