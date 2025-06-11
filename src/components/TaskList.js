import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
  const [sortBy, setSortBy] = useState('priority');

  const priorityOrder = { high: 1, medium: 2, low: 3 };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === 'priority') {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'status') {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });

  if (tasks.length === 0) return <p className="text-muted">No tasks available.</p>;

  return (
    <div>
      <div className="mb-3 d-flex align-items-center">
        <label className="me-2 fw-bold">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="form-select w-auto"
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
          <option value="status">Status</option>
        </select>
      </div>

      {sortedTasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TaskList;
