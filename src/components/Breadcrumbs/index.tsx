import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import './index.css';

interface BreadcrumbsProps {
  items: { label: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="breadcrumb-container">
      <FaUsers className="breadcrumb-icon" />
      <nav className="breadcrumbs-items">
        {items.map((item, index) => (
          <React.Fragment key={item.path}>
            {index > 0 && <span className="separator">&gt;</span>}
            <Link to={item.path}>{item.label}</Link>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
