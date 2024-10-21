import React from 'react';
import { FaBell, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import './index.css';

interface Notification {
  id: number;
  message: string;
  time: string;
  icon: React.ReactNode;
}

const NotificationContent: React.FC = () => {
  const notifications: Notification[] = [
    { id: 1, message: "새 기기가 연결되었습니다", time: "2분 전", icon: <FaBell /> },
    { id: 2, message: "작업이 성공적으로 완료되었습니다", time: "1시간 전", icon: <FaCheckCircle /> },
    { id: 3, message: "시스템 업데이트가 가능합니다", time: "2시간 전", icon: <FaInfoCircle /> },
  ];

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
