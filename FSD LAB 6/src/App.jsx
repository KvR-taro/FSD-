import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [permission, setPermission] = useState('default');
  
  // Check permission on mount
  useEffect(() => {
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if (!('Notification' in window)) {
      alert("This browser does not support desktop notification");
      return;
    }
    
    // Request permission from the user
    const result = await Notification.requestPermission();
    setPermission(result);
  };

  const sendNotification = () => {
    if (permission === 'granted') {
      const notification = new Notification("Lab 6 Success! 🎉", {
        body: "You just triggered a browser notification using React!",
        icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // Example Icon
      });
      
      // Optional: Close after 5 seconds
      setTimeout(() => notification.close(), 5000);
      
      notification.onclick = () => {
        window.focus();
        notification.close();
      };
    } else {
      alert("Please grant notification permissions first!");
    }
  };

  return (
    <div className="notif-container">
      <motion.div 
        className="card"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="card-header">
          <h2>🔔 Notification Center</h2>
          <p className="subtitle">Lab 6: Web APIs & React</p>
        </div>
        
        <div className="card-body">
          <div className="status-box">
            <span className="status-label">Current Status:</span>
            <span className={`badge badge-${permission}`}>
              {permission.toUpperCase()}
            </span>
          </div>

          <p className="instructions">
            The Notification API allows web pages to control the display of system notifications to the end user.
          </p>

          <div className="button-group">
            {permission !== 'granted' && (
              <button className="btn btn-outline" onClick={requestPermission}>
                1. Request Permission
              </button>
            )}
            
            <button 
              className="btn btn-primary" 
              onClick={sendNotification}
              disabled={permission !== 'granted'}
            >
              2. Send Notification
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default App
