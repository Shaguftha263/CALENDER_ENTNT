import React, { useState } from 'react';

function User() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Follow up on email', status: 'pending', dueDate: '2025-01-05' },
    { id: 2, name: 'Schedule a meeting', status: 'completed', dueDate: '2025-01-03' }
  ]);

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task
    ));
  };

  return (
    <div>
      <h2>User Module</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{ color: task.status === 'completed' ? 'green' : 'red' }}
              onClick={() => toggleTaskStatus(task.id)}
            >
              {task.name} ({task.status}) - Due: {task.dueDate}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
