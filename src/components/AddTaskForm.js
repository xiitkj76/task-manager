import React, { useState, useEffect } from 'react';

const AddTaskForm = ({ onAdd, editingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [status, setStatus] = useState('to-do');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setStatus(editingTask.status);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title: title.trim(), description, priority, status });
    setTitle('');
    setDescription('');
    setPriority('medium');
    setStatus('to-do');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="row g-2 mb-3">
        <div className="col">
          <select value={priority} onChange={(e) => setPriority(e.target.value)} className="form-select">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="col">
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select">
            <option value="to-do">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary w-100">
            {editingTask ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;