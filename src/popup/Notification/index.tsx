import React from 'react';
import './index.css';

interface Notification {
  id: number;
  message: string;
  time: string;
  icon: React.ReactNode;
}

const NotificationContent: React.FC<{ notifications: Notification[] }> = ({ notifications }) => {
  return (
    <ul className="notification-list">
      {notifications.map((notification) => (
        <li key={notification.id} className="notification-item">
          <div className="notification-icon">{notification.icon}</div>
          <div className="notification-text">
            <p>{notification.message}</p>
            <span>{notification.time}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NotificationContent;
