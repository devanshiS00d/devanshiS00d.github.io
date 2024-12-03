import React from 'react';
import './App.css';
import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="container header">
        <div className="title">Reimagining Spotify Statistics</div>
        <div className="divider"></div>
        <div className="subheader">@wrapper.</div>
        <div className="image-section">
          <div className="image-placeholder">
            <p>Representative image, usually a final deliverable that was shipped</p>
          </div>
        </div>
        <div className="metadata">Devanshi Sood | Product Design Portfolio | November 2024</div>
      </div>

      {/* Process Section */}
      <div className="container process">
        <div className="process-header">Process</div>
        <h2 className="section-title">Overview</h2>
        <div className="section-divider"></div>
        <div className="content">
          <div className="subsection">
            <h3>Problem Space</h3>
            <p>
              Personalizing Music Discovery Through Social Comparison
            </p>
            <p>
              Music streaming platforms provide vast libraries and personalized recommendations but fail to transform listening data into meaningful, shareable experiences. Users crave:
            </p>
            <ul>
              <li>Understanding their unique musical journey beyond basic listening statistics</li>
              <li>Discovering new music through the tastes of trusted friends</li>
              <li>Engaging in friendly competition and musical exploration</li>
              <li>Transforming passive listening into an interactive, growth-oriented experience</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Design Philosophy Section */}
      <div className="container design-philosophy">
        <h2 className="section-title">Design Philosophy</h2>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <p>User-First Design Approach</p>
          </div>
          <div className="philosophy-card">
            <p>Social Connection at Core</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

