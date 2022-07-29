import React, { useState } from "react";
import "./bookingItem.scss";
import BookingStatus from "component/bookingStatus/bookingStatus";
import { updateBookingStatus } from "api/adminApi";

const BookingItem = ({
  id,
  services,
  startDate,
  endDate,
  cusName,
  phoneNum,
  stylist,
  status,
  sttList,
}) => {
  const [statusName, setStatusName] = useState(status);

  const serviceDate = startDate.slice(0, 10);
  const duration = `from ${startDate.slice(
    10,
    -3
  )} to ${endDate.slice(10, -3)}`;

  const handleStatusChange = (stt) => {
    updateBookingStatus(id, stt).then((response) => {
      if (response.status === 200) {
        setStatusName(stt);
      }
    });
  };

  return (
    <>
      <div className="bookIt">
        <div className="bookIt__col">
          <div>
            <p className="boldText">{services.join(", ")}</p>
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
            <p className="boldText">{serviceDate}</p>
            <p className="blurText">{duration}</p>
          </div>
        </div>

        <div className="bookIt__col">
          <p className="boldText">{stylist}</p>
        </div>

        <div className="bookIt__col">
          <BookingStatus
            status={statusName}
            sttList={sttList}
            handleStatusChange={handleStatusChange}
          />
        </div>
      </div>

      <hr className="line line--thin" />
    </>
  );
};

export default BookingItem;
