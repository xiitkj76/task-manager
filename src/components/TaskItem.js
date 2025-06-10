import { FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <span>{task.text}</span>
      </div>
      <button 
        onClick={() => deleteTask(task.id)}
        className="delete-btn"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskItem;