import { ReactElement } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaCloud, FaUserFriends, FaMicrochip, FaTasks, FaCog, FaChevronLeft } from 'react-icons/fa'
import './index.css'

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isExpanded, toggleSidebar }: SidebarProps): ReactElement => {
  const location = useLocation();

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        <h1><FaCloud /> {isExpanded && 'IOT CORE'}</h1>
        <button onClick={toggleSidebar} className="toggle-btn">
          <FaChevronLeft className={isExpanded ? '' : 'rotated'} />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              <FaUserFriends />
              {isExpanded ? <span>Accounts</span> : <span className="tooltip">Accounts</span>}
            </Link>
          </li>
          <li>
            <Link to="/devices" className={location.pathname === '/devices' ? 'active' : ''}>
              <FaMicrochip />
              {isExpanded ? <span>Devices</span> : <span className="tooltip">Devices</span>}
            </Link>
          </li>
          <li>
            <Link to="/tasks" className={location.pathname === '/tasks' ? 'active' : ''}>
              <FaTasks />
              {isExpanded ? <span>Tasks</span> : <span className="tooltip">Tasks</span>}
            </Link>
          </li>
          <li>
            <Link to="/settings" className={location.pathname === '/settings' ? 'active' : ''}>
              <FaCog />
              {isExpanded ? <span>Settings</span> : <span className="tooltip">Settings</span>}
            </Link>
          </li>
        </ul>
      </nav>
      {isExpanded && (
        <div className="server-version">
          <p>Server: v1.0.0</p>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
