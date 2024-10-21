import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

interface BreadcrumbsProps {
  items: { label: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          {index > 0 && <span className="separator">&gt;</span>}
          <Link to={item.path}>{item.label}</Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
