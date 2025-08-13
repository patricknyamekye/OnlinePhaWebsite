import React, { useState } from 'react';
import styles from './Dashboard.module.css';

import SideNav from './../components/SideNav/SideNav';
import DashboardContent from './../components/DashboardContent/DashboardContent';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  return (
    <div className={styles.dashboardContainer}>
      <SideNav 
        activeComponent={activeComponent} 
        setActiveComponent={setActiveComponent} 
      />
      <div className={styles.content}>
        <DashboardContent activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      </div>
    </div>
  );
};

export default Dashboard;