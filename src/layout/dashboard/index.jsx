import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import LeftNav from "component/leftNav/leftNav";
import StatBox from "component/statBox/statBox";
import { notiIc, avatarIc } from "constants/icon";

const statistic = [
  {
    title: "Ongoing",
    value: 60,
  },

  {
    title: "Overdue",
    value: 16,
  },
  {
    title: "Cancelled",
    value: 43,
  },
  {
    title: "Total",
    value: 119,
  },
];

const Dashboard = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // call api here
    setStats(statistic);
  }, []);

  return (
    <div className="main">
      <LeftNav />

      <div className="dashboard">
        <div className="dashboard__header">
          <p className="title">Overview</p>

          <div className="control">
            <img className="image" src={notiIc} alt="noti" />

            <div className="control__user">
              <p className="control__user__name">Administrator</p>
              <img className="image" src={avatarIc} alt="avatar" />
            </div>
          </div>
        </div>

        <div className="dashboard__statistic">
          {stats &&
            stats.map((stat) => (
              <StatBox title={stat.title} value={stat.value} />
            ))}
        </div>

        <div className="dashboard__booking">
          <p>booking</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
