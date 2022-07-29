import React, { useState } from "react";
import "./bookingItem.scss";
import BookingStatus from "component/bookingStatus/bookingStatus";

const BookingItem = ({
  id,
  services,
  startDate,
  endDate,
  cusName,
  phoneNum,
  dateCreated,
  stylist,
  status,
}) => {
  const [statusName, setStatusName] = useState(status);

  const duration = `${startDate.slice(0, 10)} from ${startDate.slice(
    10,
    -3
  )} to ${endDate.slice(10, -3)}`;

  const date = dateCreated.split(" ");

  const handleStatusChange = (stt) => {
    setStatusName(stt);
    console.log(id, stt);
  };

  return (
    <>
      <div className="bookIt">
        <div className="bookIt__col">
          <div>
            <p className="boldText">{services.join(", ")}</p>
            <p className="blurText">{duration}</p>
          </div>
        </div>

        <div className="bookIt__col">
          <div>
            <p className="boldText">{cusName}</p>
            <p className="blurText">{`Tel: ${phoneNum}`}</p>
          </div>
        </div>

        <div className="bookIt__col">
          <div>
            <p className="boldText">{date[0]}</p>
            <p className="blurText">{`at: ${date[1]}`}</p>
          </div>
        </div>

        <div className="bookIt__col">
          <p className="boldText">{stylist}</p>
        </div>

        <div className="bookIt__col">
          <BookingStatus
            status={statusName}
            handleStatusChange={handleStatusChange}
          />
        </div>
      </div>

      <hr className="line line--thin" />
    </>
  );
};

export default BookingItem;
