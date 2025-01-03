import React, { useState } from 'react';

function Reporting() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Follow up on email', status: 'pending' },
    { id: 2, name: 'Schedule a meeting', status: 'completed' }
  ]);

  const completedTasks = tasks.filter((task) => task.status === 'completed').length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;

  return (
    <div>
      <h2>Reporting & Analytics</h2>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <p>Pending Tasks: {pendingTasks}</p>
    </div>
  );
}

export default Reporting;
