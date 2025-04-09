import { useContext, useState } from 'react';
import { contextTask } from '../../context/context';
import React from 'react';
import '../../styles/Tasks.css';
import { FilterButtons } from "../FilterButtons/FilterButtons";
import { TaskList } from '../TaskList/TaskList';

export const Tasks = () => {
   const { title, setTitle, description, setDescription, tasks, setTasks } = useContext(contextTask);
   const [filter, setFilter] = useState('all');

   const addTask = () => {
      const newTask = {
         id: Date.now(),
         title,
         description,
         completed: false,
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
   };

   const deleteTask = (taskId) => {
      setTasks(tasks.filter(task => task.id !== taskId));
   };

   const toggleTaskCompletion = (taskId) => {
      setTasks(tasks.map(task =>
         task.id === taskId ? { ...task, completed: !task.completed } : task
      ));
   };

   const filteredTasks = tasks.filter(task => {
      if (filter === 'completed') return task.completed;
      if (filter === 'pending') return !task.completed;
      return true;
   });

   return (
      <div onSubmit={addTask} className='tasks-container'>
         <h1 className='title-task'>To Do List</h1>
         <div className='container-submit-task'>
            <input
               type="text"
               placeholder="Add a task"
               className='input-task'
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
               name="description-task"
               placeholder='Description'
               className='textarea-task'
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button className='btn-submit-task' onClick={addTask}>Add Task</button>
         </div>
         <FilterButtons setFilter={setFilter} />
         <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} onToggleTask={toggleTaskCompletion} />
      </div>
   );
};