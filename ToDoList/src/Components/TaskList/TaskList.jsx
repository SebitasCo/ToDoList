import React from 'react';

export const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <div className='task-list-container'>
      <ul className="task-items">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-header">
              <input
                type="checkbox"
                className="task-checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
              />
              <h3 className="task-text">{task.title}</h3>
              <button 
                className="delete-task-button" 
                onClick={() => onDeleteTask(task.id)}
              >
                Eliminar
              </button>
            </div>
            <p className="task-description">{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};