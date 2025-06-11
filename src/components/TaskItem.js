// components/TaskItem.jsx
import React from 'react';

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-start">
        <div>
          <h5 className={`card-title ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>{task.title}</h5>
          <p className="card-text mb-1">{task.description}</p>
          <small className="text-muted">Priority: {task.priority} | Status: {task.status}</small>
        </div>
        <div className="btn-group btn-group-sm" role="group">
          <button onClick={() => onEdit(task)} className="btn btn-outline-primary">Edit</button>
          <button onClick={() => onDelete(task.id)} className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

