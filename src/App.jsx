import React, { useState } from 'react'
import CardGrid from './components/CardGrid'

function App() {
  const [project, setProject] = useState('demo_v1');
  const [showTooltip, setShowTooltip] = useState(false);
  const [showVoiceTooltip, setShowVoiceTooltip] = useState(false);

  return (
    <div className="app-container">
      <header>
        <div className="project-selector">
          <span>PROJECT</span>
          <select
            value={project}
            onChange={(e) => setProject(e.target.value)}
          >
            <option value="demo_v1">demo_v1</option>
            <option value="demo_v2">demo_v2</option>
            <option value="demo_v3">demo_v3</option>
          </select>
        </div>
      </header>

      <main>
        <h1>Unlock data-driven insights for your media spend.</h1>

        <div className="search-container">
          <div className="search-input-wrapper">
            <div
              className="plus-icon-container"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <svg
                className="plus-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              {showTooltip && (
                <div className="upload-tooltip">
                  upload csv/excel
                </div>
              )}
            </div>
            <input type="text" placeholder="I want to..." />
            <div
              className="voice-icon-container"
              onMouseEnter={() => setShowVoiceTooltip(true)}
              onMouseLeave={() => setShowVoiceTooltip(false)}
            >
              <svg
                className="voice-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line className="bar-1" x1="12" y1="6" x2="12" y2="18"></line>
                <line className="bar-2" x1="7.5" y1="9" x2="7.5" y2="15"></line>
                <line className="bar-3" x1="16.5" y1="9" x2="16.5" y2="15"></line>
                <line className="bar-4" x1="3" y1="12" x2="3" y2="12.01"></line>
                <line className="bar-5" x1="21" y1="12" x2="21" y2="12.01"></line>
              </svg>
              {showVoiceTooltip && (
                <div className="voice-tooltip">
                  use voice mode
                </div>
              )}
            </div>
          </div>
          <button className="send-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>

        <CardGrid />
      </main>
    </div>
  )
}

export default App
