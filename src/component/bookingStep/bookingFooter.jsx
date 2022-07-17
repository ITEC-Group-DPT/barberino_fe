import React from "react";

const BookingFooter = ({ handlePrev, handleNext, active, data }) => (
  <div className="booking__footer">
    <button
      onClick={handlePrev}
      className={active > 0 ? "button" : "button button--disabled"}
      type="button"
    >
      Previous
    </button>
    <button onClick={handleNext} className="button" type="button">
      {active < data.length - 1 ? "Next" : "Finish"}
    </button>
  </div>
);

export default BookingFooter;
