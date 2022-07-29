import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import StatBox from "component/statBox/statBox";
import BookingItem from "component/bookingItem/bookingItem";
import Pagination from "component/pagination/pagination";
import { notiIc, avatarIc, sortIc, filterIc } from "constants/icon";

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

const bookingList = [
  {
    id: "91",
    cusName: "Minh Tri",
    phoneNum: "08224574381",
    dateCreated: "2022-07-26 22:58:00",
    startDate: "2022-07-29 09:30:00",
    endDate: "2022-07-29 09:55:00",
    empName: "Tri Kun",
    status: "ongoing",
    services: ["Hair Styling", "Hair Triming"],
  },
  {
    id: "85",
    cusName: "Minh Dao",
    phoneNum: "01284374939",
    dateCreated: "2022-07-24 12:59:00",
    startDate: "2022-07-27 09:30:00",
    endDate: "2022-07-27 10:25:00",
    empName: "Tri Kun",
    status: "overdue",
    services: ["Hair Cut", "Hair Styling", "Face Cleaning"],
  },
  {
    id: 92,
    cusName: "Nam Phu",
    phoneNum: "0945461850",
    dateCreated: "2022-07-27 10:49:00",
    startDate: "2022-08-02 20:45:00",
    endDate: "2022-08-02 23:20:00",
    empName: "Dao Sama",
    status: "ongoing",
    services: [
      "Hair Cut",
      "Hair Styling",
      "Hair Triming",
      "Clean Shaving",
      "Beard Triming",
      "Smooth Shave",
      "White Facial",
      "Face Cleaning",
      "Bright Tuning",
    ],
  },
  {
    id: "90",
    cusName: "Anh Hao",
    phoneNum: "091813738492",
    dateCreated: "2022-07-25 14:34:00",
    startDate: "2022-07-25 15:00:00",
    endDate: "2022-07-25 15:55:00",
    empName: "Tri Kun",
    status: "cancelled",
    services: ["Hair Cut", "Hair Styling", "Clean Shaving"],
  },
];

const statusList = ["All Booking", "Ongoing", "Overdue", "Cancelled"];
const titleList = [
  "Booking details",
  "Customer name",
  "Date created",
  "Stylist name",
];

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [selStatus, setSelStatus] = useState(statusList[0]);
  const [bookings, setBookings] = useState([]);
  const [page, setPage] = useState({
    currPage: 1,
    totalPage: 1,
  });

  useEffect(() => {
    // call init api here

    setStats(statistic);
    setPage({ ...page, totalPage: 8 });
  }, []);

  useEffect(() => {
    // call page and status change api here

  }, [page, selStatus]);

  const handleSelStatusChange = (e) => {
    const val = e.target.value;
    setSelStatus(val);
  };

  const handleNextPage = () => {
    if (page.currPage < page.totalPage)
      setPage({ ...page, currPage: page.currPage + 1 });
  };

  const handlePrevPage = () => {
    if (page.currPage > 1)
      setPage({ ...page, currPage: page.currPage - 1 });
  };

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <p className="dashboard__header__title">Overview</p>

        <div className="control">
          <img className="img img--16" src={notiIc} alt="noti" />

          <div className="control__user">
            <p className="control__user__name">Administrator</p>
            <img
              className="img img--44"
              src={avatarIc}
              alt="avatar"
            />
          </div>
        </div>
      </div>

      <div className="dashboard__statistic">
        {stats &&
          stats.map((stat) => (
            <StatBox
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
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
            <div className="menu__filter__btn">
              <img className="img img--16" src={sortIc} alt="noti" />
              <p className="menu__filter__btn__name">Sort</p>
            </div>

            <div className="menu__filter__btn">
              <img
                className="img img--16"
                src={filterIc}
                alt="noti"
              />
              <p className="menu__filter__btn__name">Filter</p>
            </div>
          </div>
        </div>

        <div className="list">
          <div className="list__title">
            {titleList.map((title) => (
              <p key={title} className="list__title__name">
                {title}
              </p>
            ))}
          </div>

          <hr className="line" />

          <div className="list__content">
            {bookingList.map((booking) => (
              <BookingItem
                key={booking.id}
                id={booking.id}
                services={booking.services}
                startDate={booking.startDate}
                endDate={booking.endDate}
                cusName={booking.cusName}
                phoneNum={booking.phoneNum}
                dateCreated={booking.dateCreated}
                stylist={booking.empName}
                status={booking.status}
              />
            ))}
          </div>
        </div>

        <div className="pagination">
          <Pagination
            currPage={page.currPage}
            totalPage={page.totalPage}
            onNext={handleNextPage}
            onPrev={handlePrevPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
