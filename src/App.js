import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Ambil data dari localStorage saat aplikasi pertama kali dijalankan
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Simpan data ke localStorage setiap kali 'tasks' berubah
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskData) => {
    if (editingTask) {
      setTasks(tasks.map(task =>
        task.id === editingTask.id ? { ...task, ...taskData } : task
      ));
      setEditingTask(null);
    } else {
      const newTask = { id: Date.now(), ...taskData, completed: false };
      setTasks([newTask, ...tasks]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearAllTasks = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      setTasks([]);
      localStorage.removeItem('tasks');
    }
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">Task Manager</h1>
      <AddTaskForm onAdd={addTask} editingTask={editingTask} />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Your Tasks</h5>
        <button onClick={clearAllTasks} className="btn btn-sm btn-warning">
          Clear All Tasks
        </button>
      </div>
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}

export default App;
