import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './index.css';

interface NotificationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: string;
}

const NotificationSidebar: React.FC<NotificationSidebarProps> = ({ isOpen, onClose, children, width = '400px' }) => {
  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <div 
        className={`notification-sidebar ${isOpen ? 'open' : ''}`}
        style={{ width: width }}
      >
        <div className="notification-header">
          <h2>알림</h2>
          <button onClick={onClose}><FaTimes /></button>
        </div>
        <div className="notification-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default NotificationSidebar;
