import React from "react";
import "./bookingItem.scss";
import { moreIc } from "constants/icon";

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
  const duration = `${startDate.slice(0, 10)} from ${startDate.slice(
    10,
    -3
  )} to ${endDate.slice(10, -3)}`;

  const date = dateCreated.split(" ");

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

        <div className="bookIt__col bookIt__col--last">
          <p className="boldText boldText--last">{stylist}</p>
          <button className="moreBtn" type="button">
            <img className="img img--24" src={moreIc} alt="moreBth" />
          </button>
        </div>
      </div>
      <hr className="line line--thin" />
    </>
  );
};

export default BookingItem;
