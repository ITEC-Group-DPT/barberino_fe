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

const statusList = ["All Booking", "Ongoing", "Overdue", "Cancelled"];

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [selStatus, setSelStatus] = useState(statusList[0]);

  useEffect(() => {
    // call api here

    setStats(statistic);
  }, []);

  const handleSelStatusChange = (e) => {
    // call api here

    const val = e.target.value;
    setSelStatus(val);
  };

  return (
    <div className="main">
      <LeftNav />

      <div className="dashboard">
        <div className="dashboard__header">
          <p className="dashboard__header__title">Overview</p>

          <div className="control">
            <img className="img img--16" src={notiIc} alt="noti" />

            <div className="control__user">
              <p className="control__user__name">Administrator</p>
              <img className="img img--44" src={avatarIc} alt="avatar" />
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
          <div className="menu">
            <select
              name="status"
              className="menu__status"
              value={selStatus}
              onChange={handleSelStatusChange}
            >
              {statusList.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <div className="menu__filter">
              <p>hehe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
