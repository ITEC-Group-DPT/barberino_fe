import React, { useState, useEffect } from "react";
import "./dashboard.scss";
import StatBox from "component/statBox/statBox";
import BookingItem from "component/bookingItem/bookingItem";
import Pagination from "component/pagination/pagination";
import {
  getStatisticAPI,
  getBookingListAPI,
  getTotalPageAPI,
} from "api/adminApi";
import { notiIc, avatarIc, sortIc, filterIc } from "constants/icon";

const titleList = [
  "Booking details",
  "Customer name",
  "Date created",
  "Stylist name",
  "Booking status",
];

const Dashboard = () => {
  const [statistic, setStatistic] = useState([]);
  const [statusList, setStatusList] = useState([]);
  const [selStatus, setSelStatus] = useState("All Booking");
  const [bookings, setBookings] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const getBookingList = (curPage, curStatus) => {
    getBookingListAPI(curPage, curStatus).then((response) => {
      if (response.status === 200) {
        const res = response.data;
        setBookings(res);
      }
    });
  };

  const getTotalPage = (curStatus) => {
    getTotalPageAPI(curStatus).then((response) => {
      if (response.status === 200) {
        const res = response.data.totalPages;
        setTotalPage(parseInt(res, 10));
      }
    });
  };

  const handleSelStatusChange = (e) => {
    const newStatus = e.target.value;

    setSelStatus(newStatus);
    setPage(1);
    getBookingList(1, newStatus);
    getTotalPage(newStatus);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    getBookingList(newPage, selStatus);
  };

  useEffect(() => {
    getStatisticAPI().then((response) => {
      if (response.status === 200) {
        const res = response.data;

        const orderedList = [res[1], res[2], res[3], res[0], res[4]];
        const list = ["All Booking"];

        for (let i = 0; i < orderedList.length - 1; i += 1) {
          list.push(orderedList[i].title);
        }

        setStatistic(orderedList);
        setStatusList(list);
      }
    });

    getBookingList(page, selStatus);
    getTotalPage(selStatus);
  }, []);

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
        {statistic &&
          statistic.map((stat) => (
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
            {bookings.map((booking) => (
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
                sttList={statusList}
              />
            ))}
          </div>
        </div>

        <div className="pagination">
          <Pagination
            currPage={page}
            totalPage={totalPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
