import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Tambahkan task baru..."
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default TaskForm;