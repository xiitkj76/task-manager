// import { useState } from 'react'; 


// const TaskFilter = ({ filter, setFilter }) => {
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter(prev => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="task-filter">
//       <div className="filter-group">
//         <label>Priority:</label>
//         <select 
//           name="priority" 
//           value={filter.priority}
//           onChange={handleFilterChange}
//         >
//           <option value="all">All Priorities</option>
//           <option value="high">High</option>
//           <option value="medium">Medium</option>
//           <option value="low">Low</option>
//         </select>
//       </div>

//       <div className="filter-group">
//         <label>Status:</label>
//         <select 
//           name="status" 
//           value={filter.status}
//           onChange={handleFilterChange}
//         >
//           <option value="all">All Statuses</option>
//           <option value="to-do">To Do</option>
//           <option value="in-progress">In Progress</option>
//           <option value="done">Done</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default TaskFilter;

import React from 'react';

const TaskFilter = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="row g-3 mb-4">
      <div className="col-md-6">
        <label htmlFor="priority-filter" className="form-label">Priority:</label>
        <select
          id="priority-filter"
          name="priority"
          value={filter.priority}
          onChange={handleFilterChange}
          className="form-select"
        >
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="col-md-6">
        <label htmlFor="status-filter" className="form-label">Status:</label>
        <select
          id="status-filter"
          name="status"
          value={filter.status}
          onChange={handleFilterChange}
          className="form-select"
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
