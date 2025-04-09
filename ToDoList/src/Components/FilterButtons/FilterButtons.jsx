import React from 'react';

export const FilterButtons = ({ setFilter }) => {
  return (
    <div className='filter-task'>
      <button className='filter-task-all' onClick={() => setFilter('all')}>All</button>
      <button className='filter-task-pending' onClick={() => setFilter('pending')}>Pending</button>
      <button className='filter-task-completed' onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
};