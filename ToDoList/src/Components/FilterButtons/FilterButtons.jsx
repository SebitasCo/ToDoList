import React from 'react'

export const FilterButtons = () => {
  return (
<div className='filter-task'>
        <button className='filter-task-all'>All</button>
        <button className='filter-task-pending'>Pending</button>
        <button className='filter-task-completed'>Completed</button>
      </div>
  )
}
