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
  const [data, setData] = useState({});

  useEffect(() => {
    getDateTimeAPI(selServices).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        const { availableDates, initTimeSlot } = response.data;

        if (initTimeSlot.length === 0) {
          // ran out of stylists working hour
          // render next day

          // newDates.push(Date().getDate() + 7)
          // console.log(newDates);

          getTimeByDateAPI(availableDates[1], selServices).then(
            (response1) => {
              if (response1.status === 200) {
                const timeSlot = response1.data;
                const times = Object.keys(timeSlot);
                const stylists = Object.values(timeSlot)[0];

                setData({
                  ...data,
                  currTimeSlot: timeSlot,
                  times,
                  stylists,
                });
                setSelDateTime({
                  date: availableDates[1],
                  time: times[0],
                  stylistID: stylists[0].id,
                });
              }
            }
          );
        } else {
          const times = Object.keys(initTimeSlot);
          const stylists = Object.values(initTimeSlot)[0];

          setData({
            availableDates,
            currTimeSlot: initTimeSlot,
            times,
            stylists,
          });
          setSelDateTime({
            date: availableDates[0],
            time: times[0],
            stylistID: stylists[0].id,
          });
        }
      }
    });
  }, []);

  const handleDateChange = (e) => {
    const val = e.target.value;

    getTimeByDateAPI(val, selServices).then((response) => {
      if (response.status === 200) {
        const timeSlot = response.data;
        const times = Object.keys(timeSlot);
        const stylists = Object.values(timeSlot)[0];

        setData({
          ...data,
          currTimeSlot: timeSlot,
          times,
          stylists,
        });
        setSelDateTime({
          date: val,
          time: times[0],
          stylistID: stylists[0].id,
        });
      }
    });
  };

  const handleTimeChange = (e) => {
    const val = e.target.value;

    setData({ ...data, stylists: data.currTimeSlot[val] });
    setSelDateTime({
      ...selDateTime,
      time: val,
      stylistID: data.currTimeSlot[val][0].id,
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
      <label className="label" htmlFor="date">
        <p className="label-text">Date</p>
        <select
          name="date"
          id="date"
          className="select"
          value={selDateTime?.date || ""}
          onChange={handleDateChange}
        >
          {Object.keys(data).length === 0
            ? ""
            : data.availableDates.map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
        </select>
      </label>

      <div className="row">
        <label className="label" htmlFor="time">
          <p className="label-text">Time</p>
          <select
            name="time"
            id="time"
            className="select"
            value={selDateTime?.time || ""}
            onChange={handleTimeChange}
          >
            {Object.keys(data).length === 0
              ? ""
              : data.times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
          </select>
        </label>

        <label className="label" htmlFor="stylist">
          <p className="label-text">Stylist</p>
          <select
            name="stylist"
            id="stylist"
            className="select"
            value={selDateTime?.stylistID || ""}
            onChange={handleStylistChange}
          >
            {Object.keys(data).length === 0
              ? ""
              : data.stylists.map((stylist) => {
                  const stylistName = `${stylist.firstname} ${stylist.lastname}`;
                  return (
                    <option key={stylist.id} value={stylist.id}>
                      {stylistName}
                    </option>
                  );
                })}
          </select>
        </label>
      </div>
    </div>
  );
};

export default StepDateTime;
