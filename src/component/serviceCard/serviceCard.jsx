import React from "react";
import "./serviceCard.scss";

const SelectBtn = ({ selected = false, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="serviceCard__button"
      style={{ background: selected ? "#ffc009" : "#6c757d" }}
    >
      {selected ? "Selected" : "Select"}
    </button>
  );
};

const ServiceCard = ({
  id,
  name,
  duration,
  isSelect,
  handleSelect,
}) => {
  const handleClick = () => {
    handleSelect(id, name, duration, !isSelect);
  };

  return (
    <div className="serviceCard">
      <p className="serviceCard___name">{name}</p>
      <div className="serviceCard__interaction">
        <p className="serviceCard__duration">{`${duration} min`}</p>
        <SelectBtn selected={isSelect} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default ServiceCard;
