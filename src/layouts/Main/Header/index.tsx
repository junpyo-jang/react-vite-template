import React, { useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { FaBell, FaCaretDown, FaHome, FaSignOutAlt, FaUserCircle, FaUserEdit } from 'react-icons/fa';
import NotificationSidebar from '../../../components/NotificationSidebar';
import NotificationContent from '../../../components/NotificationContent';
import './index.css';

interface HeaderProps {
  breadcrumbItems: { label: string; path: string }[];
}

const Header: React.FC<HeaderProps> = ({ breadcrumbItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const notificationCount = 10; // 테스트를 위해 100으로 설정

  return (
    <header className="main-header">
      <div className="breadcrumb-container">
        <FaHome className="breadcrumb-icon" />
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <div className="user-info">
        <div className="notification-badge" onClick={() => setIsNotificationOpen(true)}>
          <FaBell className="notification-icon" />
          <span className={`badge ${notificationCount > 99 ? 'badge-long' : ''}`}>
            {notificationCount > 99 ? '99+' : notificationCount}
          </span>
        </div>
        <div className="user-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <FaUserCircle className="user-avatar" />
          <div className="user-details">
            <span className="user-name">장준표</span>
            <span className="user-email">jjp@example.com</span>
          </div>
          <FaCaretDown className="dropdown-icon" />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="/profile" className="dropdown-item">
                <FaUserEdit className="dropdown-icon" />
                프로필 수정
              </a>
              <a href="/logout" className="dropdown-item">
                <FaSignOutAlt className="dropdown-icon" />
                로그아웃
              </a>
            </div>
          )}
        </div>
      </div>
      <NotificationSidebar 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)}
        width="800px"
      >
        <NotificationContent />
      </NotificationSidebar>
    </header>
  );
};

export default Header;
