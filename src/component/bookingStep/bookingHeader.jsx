import React from "react";

const activeStepStyle = {
  background: "#ffc009",
  color: "white",
  fontWeight: "bold",
};

const BookingHeader = ({ data, setActive, active }) => {
  return (
    <div className="booking__header">
      {data.map((title, index) => (
        <button
          key={title}
          onClick={() => setActive(index)}
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
