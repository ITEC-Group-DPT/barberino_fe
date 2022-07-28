import React, { useState, useEffect } from "react";
import {
  getDateTimeAPI,
  getTimeByDateAPI,
} from "../../../api/bookingApi";
import "./step.scss";

const StepDateTime = ({
  selServices,
  selDateTime,
  setSelDateTime,
}) => {
  const [availDates, setAvailDates] = useState([]);
  const [timeSlot, setTimeSlot] = useState({});
  const [stylists, setStylists] = useState([]);

  useEffect(() => {
    getDateTime(selServices);
  }, []);

  useEffect(() => {
    if (Object.keys(selDateTime).length === 0) return;
    setStylists(timeSlot[selDateTime.time]);
  }, [selDateTime]);

  const getDateTime = (services) => {
    getDateTimeAPI(services).then((response) => {
      if (response.status === 200) {
        const res = response.data;

        setAvailDates(res.availableDates);
        setTimeSlot(res.timeSlot);
        setSelDateTime({
          date: res.availableDates[0],
          time: Object.keys(res.timeSlot)[0],
          stylistID: Object.values(res.timeSlot)[0][0].id,
        });
      }
    });
  };

  const handleDateChange = (e) => {
    const val = e.target.value;

    getTimeByDateAPI(val, selServices).then((response) => {
      if (response.status === 200) {
        const res = response.data;

        setTimeSlot(res);
        setSelDateTime({
          date: val,
          time: Object.keys(res)[0],
          stylistID: Object.values(res)[0][0].id,
        });
      }
    });
  };

  const handleTimeChange = (e) => {
    const val = e.target.value;
    const newStylistID = timeSlot[e.target.value][0].id;

    setSelDateTime({
      ...selDateTime,
      time: val,
      stylistID: newStylistID,
    });
  };

  const handleStylistChange = (e) => {
    const val = e.target.value;

    setSelDateTime({
      ...selDateTime,
      stylistID: val,
    });
  };

  return (
    <div className="datetime">
      <label className="datetime__label" htmlFor="date">
        <p className="label-text">Date</p>
        <select
          name="date"
          id="date"
          className="datetime__select"
          value={selDateTime?.date || ""}
          onChange={handleDateChange}
        >
          {availDates.length !== 0 &&
            availDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
        </select>
      </label>

      <div className="row">
        <label className="datetime__label" htmlFor="time">
          <p className="label-text">Time</p>
          <select
            name="time"
            id="time"
            className="datetime__select"
            value={selDateTime?.time || ""}
            onChange={handleTimeChange}
          >
            {Object.keys(timeSlot).length !== 0 &&
              Object.keys(timeSlot).map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
          </select>
        </label>

        <label className="datetime__label" htmlFor="stylist">
          <p className="label-text">Stylist</p>
          <select
            name="stylist"
            id="stylist"
            className="datetime__select"
            value={selDateTime?.stylistID || ""}
            onChange={handleStylistChange}
          >
            {stylists &&
              stylists.map((stylist) => (
                <option key={stylist.id} value={stylist.id}>
                  {stylist.firstname} {stylist.lastname}
                </option>
              ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default StepDateTime;
