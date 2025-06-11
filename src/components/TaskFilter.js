import { useState } from 'react'; 
import './TaskFilter.css'


const TaskFilter = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="task-filter">
      <div className="filter-group">
        <label>Priority:</label>
        <select 
          name="priority" 
          value={filter.priority}
          onChange={handleFilterChange}
        >
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Status:</label>
        <select 
          name="status" 
          value={filter.status}
          onChange={handleFilterChange}
        >
          <option value="all">All Statuses</option>
          <option value="to-do">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;