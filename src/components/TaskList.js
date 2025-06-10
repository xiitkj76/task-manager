import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>Tidak ada task. Tambahkan task baru!</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;