import React from "react";

const activeStepStyle = {
  background: "#ffc009",
  color: "white",
};

const BookingHeader = ({ data, setActive, active }) => {
  return (
    <div className="booking__header">
      {data.map((title, index) => (
        <button
          key={title}
          onClick={() => {
            if (index <= active) setActive(index);
          }}
          className="booking__stepTitle"
          style={active >= index ? activeStepStyle : null}
          type="button"
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default BookingHeader;
