import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Simulate fetching tasks data
  useEffect(() => {
    const fetchTasks = () => {
      const tasksList = [
        { id: 1, name: 'Follow up on email', status: 'pending', date: '2025-01-03' },
        { id: 2, name: 'Schedule a meeting', status: 'completed', date: '2025-01-04' },
        { id: 3, name: 'Send report to client', status: 'pending', date: '2025-01-05' },
      ];
      setTasks(tasksList);
    };

    const fetchNotifications = () => {
      const notificationsList = [
        { id: 1, message: 'Reminder: Follow up on email', type: 'overdue' },
        { id: 2, message: 'Upcoming: Schedule a meeting', type: 'upcoming' },
      ];
      setNotifications(notificationsList);
    };

    fetchTasks();
    fetchNotifications();
  }, []);

  const completedTasks = tasks.filter((task) => task.status === 'completed').length;
  const pendingTasks = tasks.filter((task) => task.status === 'pending').length;

  return (
    <div className="dashboard">
      <h2>Dashboard Overview</h2>

      <div className="task-summary">
        <h3>Task Summary</h3>
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed Tasks: {completedTasks}</p>
        <p>Pending Tasks: {pendingTasks}</p>
      </div>

      <div className="notifications-summary">
        <h3>Notifications</h3>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} style={{ color: notification.type === 'overdue' ? 'red' : 'green' }}>
              {notification.message}
            </li>
          ))}
        </ul>
      </div>

      <div className="task-list">
        <h3>Task List</h3>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <p>{task.name}</p>
              <small>Status: {task.status} | Due: {task.date}</small>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
