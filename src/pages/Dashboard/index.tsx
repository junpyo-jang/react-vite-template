import React from 'react';
import { useAtom } from 'jotai';
import { dashboardSummaryAtom } from '@atoms/device';
import './index.css';

const Dashboard: React.FC = () => {
  const [dashboardSummary] = useAtom(dashboardSummaryAtom);

  return (
    <div className="dashboard">
      <h1>대시보드</h1>
      <div className="dashboard-summary">
        <div className="summary-item">
          <h3>총 디바이스</h3>
          <p>{dashboardSummary.totalDevices}</p>
        </div>
        <div className="summary-item">
          <h3>활성 디바이스</h3>
          <p>{dashboardSummary.activeDevices}</p>
        </div>
        <div className="summary-item">
          <h3>총 사용자</h3>
          <p>{dashboardSummary.totalUsers}</p>
        </div>
      </div>
      <div className="recent-alerts">
        <h3>최근 알림</h3>
        <ul>
          {dashboardSummary.recentAlerts.map((alert, index) => (
            <li key={index}>{alert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
