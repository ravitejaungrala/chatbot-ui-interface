import React, { useState } from 'react'
import CardGrid from './components/CardGrid'

function App() {
  const projects = ['demo_v1', 'demo_v2', 'demo_v3'];
  const [project, setProject] = useState('demo_v1');
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="app-wrapper">
      {/* Top Header */}
      <header>
        <div className="header-actions">
          <div className={`project-select-wrapper ${isProjectOpen ? 'active' : ''}`}>
            <span className="project-label">Project:</span>
            <div className="custom-select-container" onClick={() => setIsProjectOpen(!isProjectOpen)}>
              <div className="current-project">
                {project}
              </div>
              <div className="select-chevron">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>

              {isProjectOpen && (
                <div className="project-dropdown-list">
                  {projects.map((p) => (
                    <div
                      key={p}
                      className={`project-option ${p === project ? 'selected' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setProject(p);
                        setIsProjectOpen(false);
                      }}
                    >
                      {p}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        <div className="chat-container">
          <div className="chat-welcome">
            <h1>What can I <span style={{ color: '#ff4500' }}>help with?</span></h1>
            <p>Predictive insights and media analysis at your fingertips.</p>

            <CardGrid />
          </div>
        </div>

        {/* Capsule Input Bar Fixed at Bottom */}
        <div className="input-wrapper">
          <div className={`capsule-input-container ${isExpanded ? 'expanded' : ''}`}>
            <div className="input-top-layer">
              <div className="input-icon-left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Try to use it"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                className={`input-icon-right ${isExpanded ? 'active' : ''}`}
                onClick={() => setIsExpanded(!isExpanded)}
                data-tooltip="Expand"
                title="Expand"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
            </div>

            {isExpanded && (
              <div className="input-expansion-drawer">
                <div className="drawer-actions-left">
                  <button className="drawer-btn" data-tooltip="Upload" title="Upload">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                  <button className="drawer-btn" data-tooltip="Voice" title="Voice">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>
                  </button>
                </div>
                <button className="drawer-send-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
