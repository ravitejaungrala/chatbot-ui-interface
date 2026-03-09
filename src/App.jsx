import React, { useState } from 'react'
import CardGrid from './components/CardGrid'

function App() {
  const [project, setProject] = useState('demo_v1');
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showExpandTooltip, setShowExpandTooltip] = useState(false);

  // Auto-expand if the user starts typing
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 0 && !isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <div className="app-container">
      <header>
        <div className="project-selector">
          <span className="project-label">PROJECT</span>
          <div className="select-wrapper">
            <select
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              <option value="demo_v1">demo_v1</option>
              <option value="demo_v2">demo_v2</option>
              <option value="demo_v3">demo_v3</option>
            </select>
            <svg
              className="select-chevron"
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </header>

      <main>
        <h1>Unlock predictive insights for your media spend</h1>

        <div className="search-container">
          <div className={`search-input-wrapper ${isExpanded ? 'expanded' : ''}`}>
            <div className="search-top-row">
              <svg
                className="search-icon"
                width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Try to use it"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsExpanded(true)}
              />
              <div
                className="expand-button-container"
                onMouseEnter={() => setShowExpandTooltip(true)}
                onMouseLeave={() => setShowExpandTooltip(false)}
              >
                <button
                  className={`expand-button ${isExpanded ? 'active' : ''}`}
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                </button>
                {showExpandTooltip && !isExpanded && (
                  <div className="expand-tooltip">
                    expand option
                  </div>
                )}
              </div>
            </div>

            {isExpanded && (
              <div className="search-expanded-row">
                <div className="action-pills-group">
                  <button className="action-pill">
                    <svg
                      className="plus-icon"
                      width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span className="pill-text">Upload CSV/Excel</span>
                  </button>
                  <button className="action-pill voice-pill">
                    <svg
                      className="voice-icon"
                      width="18" height="18" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <line className="bar-1" x1="12" y1="6" x2="12" y2="18"></line>
                      <line className="bar-2" x1="7.5" y1="9" x2="7.5" y2="15"></line>
                      <line className="bar-3" x1="16.5" y1="9" x2="16.5" y2="15"></line>
                      <line className="bar-4" x1="3" y1="12" x2="3" y2="12.01"></line>
                      <line className="bar-5" x1="21" y1="12" x2="21" y2="12.01"></line>
                    </svg>
                    <span className="pill-text">Use Voice Mode</span>
                  </button>
                </div>
                <button className="send-button-expanded">
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
        <CardGrid />
      </main>
    </div>
  )
}

export default App
