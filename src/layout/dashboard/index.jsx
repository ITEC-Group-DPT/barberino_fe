import LeftNav from "component/leftNav";
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <LeftNav />
      <div className="dashboard__content">
        <p>Admin Dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
