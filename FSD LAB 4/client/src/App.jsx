import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_BASE = 'http://localhost:3000/api';

export default function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    axios.get(`${API_BASE}/hello`)
      .then(res => setApiMessage(res.data.message))
      .catch(() => setApiMessage('Could not reach API. Is the server running?'));
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/tasks`);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    try {
      const res = await axios.post(`${API_BASE}/tasks`, { title: newTitle.trim() });
      setTasks([...tasks, res.data]);
      setNewTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  const toggleTask = async (id) => {
    try {
      const res = await axios.patch(`${API_BASE}/tasks/${id}/toggle`);
      setTasks(tasks.map(t => (t.id === id ? res.data : t)));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id, e) => {
    e.stopPropagation();
    try {
      await axios.delete(`${API_BASE}/tasks/${id}`);
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Full-Stack React + Node.js</h1>
        <div className="api-status">
          <span className={`status-dot ${apiMessage.includes('Hello') ? 'online' : 'offline'}`}></span>
          {apiMessage || 'Checking API...'}
        </div>
      </header>

      <div className="grid">
        {/* Counter App */}
        <div className="card">
          <h2>Frontend Counter</h2>
          <p className="subtitle">State managed by React (Frontend Only)</p>
          <div className="counter-display">{count}</div>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>Increment</button>
            <button className="btn btn-outline" onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

        {/* Tasks App */}
        <div className="card">
          <h2>Task Manager</h2>
          <p className="subtitle">Data from Express API Server</p>
          
          <form onSubmit={addTask} className="task-form">
            <input
              type="text"
              className="input-field"
              placeholder="What needs to be done?"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Add</button>
          </form>

          <ul className="task-list">
            {tasks.map(t => (
              <li key={t.id} className={`task-item ${t.done ? 'done' : ''}`} onClick={() => toggleTask(t.id)}>
                <div className="checkbox">
                  {t.done && '✓'}
                </div>
                <span>{t.title}</span>
                <button 
                  className="btn btn-primary" 
                  onClick={(e) => deleteTask(t.id, e)}
                  style={{ marginLeft: 'auto', padding: '6px 12px', fontSize: '0.8rem', backgroundColor: '#ef4444' }}
                >
                  Remove
                </button>
              </li>
            ))}
            {tasks.length === 0 && !loading && <li className="empty-state">No tasks yet!</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
