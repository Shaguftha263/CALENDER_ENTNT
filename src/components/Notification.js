import React, { useState, useEffect } from 'react';

function Notification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulating overdue and upcoming notifications.
    const fetchNotifications = () => {
      const notificationsList = [
        { id: 1, message: 'Reminder: Follow up on email', type: 'overdue' },
        { id: 2, message: 'Upcoming: Schedule a meeting', type: 'upcoming' }
      ];
      setNotifications(notificationsList);
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification) => (
          <li
            key={notification.id}
            style={{
              color: notification.type === 'overdue' ? 'red' : 'green',
            }}
          >
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notification;
