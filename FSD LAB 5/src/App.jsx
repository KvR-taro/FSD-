import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // PWA installation state
  const [installPrompt, setInstallPrompt] = useState(null);

  // Listen for the 'beforeinstallprompt' event
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    setInstallPrompt(e);
  });

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    setInstallPrompt(null);
  };

  return (
    <div className="pwa-container">
      <div className="glass-panel">
        <div className="icon-badge">📱</div>
        <h1>Progressive Web App</h1>
        <p className="subtitle">Lab 5: Converting React to PWA</p>
        
        <div className="app-content">
          <p>
            This app is configured with a <strong>Service Worker</strong> and a <strong>Web App Manifest</strong>.<br/>
            Because of this, it can be installed directly to your device like a native app and can work offline!
          </p>

          <div className="counter-section">
            <button className="elegant-btn" onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </button>
          </div>

          {installPrompt && (
            <div className="install-banner">
              <p>Install this app on your device!</p>
              <button className="primary-btn" onClick={handleInstallClick}>
                Install Now ⬇️
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
