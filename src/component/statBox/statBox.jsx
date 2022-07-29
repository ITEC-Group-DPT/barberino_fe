import React from "react";
import "./statBox.scss";

const StatBox = ({ title, value }) => {
  let style = "";
  switch (title) {
    case "Ongoing":
      style = "#7A87D7";
      break;
    case "Overdue":
      style = "#D0AA48";
      break;
    case "Cancelled":
      style = "#D75050";
      break;
    case "Complete":
      style = "#63B566";
      break;
    case "Total":
      style = "#252733";
      break;
    default:
      break;
  }

  return (
    <div className="statBox" style={{ borderColor: style }}>
      <p className="statBox__title" style={{ color: style }}>
        {title}
      </p>
      <p className="statBox__value" style={{ color: style }}>
        {value}
      </p>
    </div>
  );
};

export default StatBox;
