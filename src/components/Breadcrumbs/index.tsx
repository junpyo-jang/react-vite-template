import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaMicrochip, FaTasks, FaChartBar, FaCog, FaHome } from 'react-icons/fa';
import { useAtomValue } from 'jotai';
import { breadcrumbItemsAtom } from '@atoms/ui';
import './index.css';

const Breadcrumbs: React.FC = () => {
  const items = useAtomValue(breadcrumbItemsAtom);

  const getIcon = (label: string) => {
    switch(label) {
      case 'Home':
        return <FaHome />;
      case 'Dashboard':
        return <FaChartBar />;
      case 'Accounts':
        return <FaUsers />;
      case 'Devices':
        return <FaMicrochip />;
      case 'Tasks':
        return <FaTasks />;
      default:
        return <FaCog />;
    }
  };

  return (
    <div className="breadcrumb-container">
      <nav className="breadcrumbs-items">
        {items.map((item, index) => (
          <React.Fragment key={item.path}>
            {index > 0 && <span className="separator">&gt;</span>}
            <Link to={item.path} className="breadcrumb-link">
              {index === 0 && <span className="breadcrumb-icon">{getIcon(item.label)}</span>}
              <span>{item.label}</span>
            </Link>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
