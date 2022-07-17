import React, { useState, useEffect } from "react";
import "./step.scss";

// init api response
const initData = {
  availableDates: [
    "15-07-2022",
    "16-07-2022",
    "18-07-2022",
    "19-07-2022",
    "20-07-2022",
  ],
  // the time slot of the first available date
  initTimeSlot: {
    "09:30": [
      {
        id: 1,
        firstname: "Tory",
        lastname: "Just",
      },
    ],
    "09:45": [
      {
        id: 2,
        firstname: "Kuro",
        lastname: "Zemi",
      },
    ],
    "10:00": [
      {
        id: 3,
        firstname: "Tezu",
        lastname: "kosako",
      },
    ],
    "10:15": [
      {
        id: 4,
        firstname: "Hehe",
        lastname: "Boi",
      },
    ],
    "10:30": [
      {
        id: 5,
        firstname: "Ruby",
        lastname: "Last",
      },
    ],
    "10:45": [
      {
        id: 6,
        firstname: "Con",
        lastname: "Khi",
      },
    ],
    "11:00": [
      {
        id: 7,
        firstname: "Con",
        lastname: "Ngua",
      },
    ],
    "11:15": [
      {
        id: 8,
        firstname: "Con",
        lastname: "Voi",
      },
    ],
    "11:30": [
      {
        id: 9,
        firstname: "Con",
        lastname: "Meo ",
      },
      {
        id: 10,
        firstname: "Con",
        lastname: "Cho",
      },
    ],
    "11:45": [
      {
        id: 1,
        firstname: "Tory",
        lastname: "Just",
      },
      {
        id: 4,
        firstname: "Hehe",
        lastname: "Boi",
      },
    ],
    "12:00": [
      {
        id: 6,
        firstname: "Con",
        lastname: "Khi",
      },
      {
        id: 9,
        firstname: "Con",
        lastname: "Meo",
      },
      {
        id: 9,
        firstname: "Zzzzzz",
        lastname: "zzzz",
      },
    ],
  },
};

// api response when resquest change date
const dateChangeData = {
  "13:00": [
    {
      id: 4,
      firstname: "Ruby",
      lastname: "First ",
    },
    {
      id: 5,
      firstname: "Ruby2",
      lastname: "Last",
    },
  ],
  "13:15": [
    {
      id: 4,
      firstname: "Ruby",
      lastname: "Last ",
    },
    {
      id: 5,
      firstname: "Ruby2",
      lastname: "Last",
    },
  ],
  "13:30": [
    {
      id: 4,
      firstname: "Ruby",
      lastname: "Last ",
    },
    {
      id: 5,
      firstname: "Ruby2",
      lastname: "Last",
    },
  ],
  "13:45": [
    {
      id: 4,
      firstname: "Ruby",
      lastname: "Last ",
    },
    {
      id: 5,
      firstname: "Ruby2",
      lastname: "Last",
    },
  ],
  "14:00": [
    {
      id: 4,
      firstname: "Ruby",
      lastname: "Last1",
    },
    {
      id: 5,
      firstname: "Ruby2",
      lastname: "Last2",
    },
  ],
  "14:15": [
    {
      id: 4,
      firstname: "Ruby",
      lastname: "Last1",
    },
    {
      id: 5,
      firstname: "Ruby2",
      lastname: "Last2",
    },
  ],
  "14:30": [
    {
      id: 4,
      firstname: "Ruby",
      lastname: "Last1",
    },
    {
      id: 5,
      firstname: "Ruby2",
      lastname: "Last2",
    },
  ],
  "14:45": [
    {
      id: 4,
      firstname: "Ruby",
      lastname: "Final1 ",
    },
    {
      id: 5,
      firstname: "Ruby2",
      lastname: "Final2",
    },
  ],
};

const StepDateTime = ({ selectedDateTime, setSelectedDateTime }) => {
  const [currTimeSlot, setCurrTimeSlot] = useState(
    initData.initTimeSlot
  );

  const [data, setData] = useState({
    availableDates: initData.availableDates,
    times: Object.keys(currTimeSlot),
    stylists: Object.values(currTimeSlot)[0],
  });

  useEffect(() => {
    setSelectedDateTime({
      date: initData.availableDates[0],
      time: Object.keys(currTimeSlot)[0],
      stylistID: Object.values(currTimeSlot)[0][0].id,
    });
  }, []);

  const handleDateChange = (e) => {
    // request api here

    setCurrTimeSlot(dateChangeData);
    setData({
      ...data,
      times: Object.keys(dateChangeData),
      stylists: Object.values(dateChangeData)[0],
    });

    setSelectedDateTime({
      ...selectedDateTime,
      date: e.target.value,
    });
  };

  const handleTimeChange = (e) => {
    setData({ ...data, stylists: currTimeSlot[e.target.value] });

    setSelectedDateTime({
      ...selectedDateTime,
      time: e.target.value,
    });
  };

  const handleStylistChange = (e) => {
    setSelectedDateTime({
      ...selectedDateTime,
      stylist: e.target.value,
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
          onChange={handleDateChange}
        >
          {data.availableDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </label>

      <div className="row" style={{ marginTop: "50px" }}>
        <label className="label" htmlFor="time">
          <p className="label-text">Time</p>
          <select
            name="time"
            id="time"
            className="select"
            onChange={handleTimeChange}
          >
            {data.times.map((time) => (
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
            onChange={handleStylistChange}
          >
            {data.stylists.map((stylist) => {
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
