const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h2>Backend Server is Running!</h2><p>Please visit the frontend app at <a href="http://localhost:5173">http://localhost:5173</a></p>');
});

let tasks = [
  { id: 1, title: 'Learn Express', done: false },
  { id: 2, title: 'Build React app', done: false },
  { id: 3, title: 'Connect Frontend to Backend', done: false }
];

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from your custom Express API! 🚀' });
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTask = { id: Date.now(), title: title.trim(), done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.patch('/api/tasks/:id/toggle', (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.done = !task.done;
  res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === id);
  if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });
  const deletedTask = tasks.splice(taskIndex, 1)[0];
  res.json(deletedTask);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ API running at http://localhost:${PORT}`);
});
