import React from "react";

const BookingFooter = ({ handlePrev, handleNext, active, data }) => {
  const buttonClass = (type) => {
    switch (type) {
      case "prev":
        if (active > 0) return "button";
        return "button button--disabled";
      default:
        if (active < data.length - 1) return "button";
        return "button button--disabled";
    }
  };
  return (
    <div className="booking__footer">
      <button
        onClick={handlePrev}
        className={buttonClass("prev")}
        type="button"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className={buttonClass("next")}
        type="button"
      >
        {active < data.length - 1 ? ('Next') : ('Finish')}
      </button>
    </div>
  );
};

export default BookingFooter;
