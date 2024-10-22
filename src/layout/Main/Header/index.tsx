import React, { useState } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import { FaBell, FaCaretDown, FaSignOutAlt, FaUserCircle, FaUserEdit, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import SidePopup from '@components/SidePopup';
import NotificationContent from '@popup/Notification';
import './index.css';

interface HeaderProps {
  breadcrumbItems: { label: string; path: string }[];
}

const Header: React.FC<HeaderProps> = ({ breadcrumbItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const notificationCount = 100; // 테스트를 위해 100으로 설정
  const notifications = [
    { id: 1, message: "새 기기가 연결되었습니다", time: "2분 전", icon: <FaBell /> },
    { id: 2, message: "작업이 성공적으로 완료되었습니다", time: "1시간 전", icon: <FaCheckCircle /> },
    { id: 3, message: "시스템 업데이트가 가능합니다", time: "2시간 전", icon: <FaInfoCircle /> },
  ];

  return (
    <header className="main-header">
      <Breadcrumbs items={breadcrumbItems} />
      <div className="user-info">
        <div className={`noti-badge`} onClick={() => setIsNotificationOpen(true)}>
          <FaBell className="noti-icon" />
          <span className={`badge ${notificationCount > 99 ? 'badge-long' : ''}`}>
            {notificationCount > 99 ? '99+' : notificationCount}
          </span>
        </div>
        <div className="user-dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <FaUserCircle className="user-avatar" />
          <div className="user-details">
            <span className="user-name">장준표</span>
            <span className="user-email">jpjang@yookgak.com</span>
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
      <SidePopup 
        isOpen={isNotificationOpen} 
        onClose={() => setIsNotificationOpen(false)}
        width="500px"
      >
        <NotificationContent notifications={notifications} />
      </SidePopup>
    </header>
  );
};

export default Header;
