import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { FaUserFriends, FaMicrochip, FaTasks, FaCog, FaChevronLeft, FaChartBar, FaNetworkWired } from 'react-icons/fa'
import { useAtom } from 'jotai'
import { selectedTabAtom } from '@atoms/ui'
import './index.css'

interface SidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isExpanded, toggleSidebar }: SidebarProps): ReactElement => {
  const [selectedTab, setSelectedTab] = useAtom(selectedTabAtom);

  const menuItems = [
    { path: '/dashboard', icon: FaChartBar, label: 'Dashboard' },
    { path: '/accounts', icon: FaUserFriends, label: 'Accounts' },
    { path: '/devices', icon: FaMicrochip, label: 'Devices' },
    { path: '/tasks', icon: FaTasks, label: 'Tasks' },
    { path: '/settings', icon: FaCog, label: 'Settings' },
  ];

  const handleTabClick = (path: string) => {
    setSelectedTab(path.slice(1)); // '/dashboard' -> 'dashboard'
  };

  return (
    <aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-header">
        <h1><FaNetworkWired /> {isExpanded && 'IOT CORE'}</h1>
        <button onClick={toggleSidebar} className="toggle-btn">
          <FaChevronLeft className={isExpanded ? '' : 'rotated'} />
        </button>
      </div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                className={selectedTab === item.path.slice(1) ? 'active' : ''}
                onClick={() => handleTabClick(item.path)}
              >
                <item.icon />
                {isExpanded ? <span>{item.label}</span> : <span className="tooltip">{item.label}</span>}
              </Link>
            </li>
          ))}
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
