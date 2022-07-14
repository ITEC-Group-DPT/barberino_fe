import React from "react";

const activeStepStyle = {
  background: "#ffc009",
  color: "white",
  fontWeight: "bold",
};

const BookingHeader = ({ data, setActive, active }) => {
  return (
    <div className="booking__header">
      {data.map((step, index) => (
        <button
          key={step?.title}
          onClick={() => setActive(index)}
          className="booking__stepTitle"
          style={active === index ? activeStepStyle : null}
          type="button"
        >
          {step.title}
        </button>
      ))}
    </div>
  );
};

export default BookingHeader;
