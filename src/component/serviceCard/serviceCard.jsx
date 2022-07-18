import React, { useState } from "react";
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
  name,
  duration,
  initSelect,
  handleSelect,
}) => {
  const [selected, setSelected] = useState(initSelect);
  const handleClick = () => {
    setSelected(!selected);
    handleSelect(name, !selected);
  };

  return (
    <div className="serviceCard">
      <p className="serviceCard___name">{name}</p>
      <div className="serviceCard__interaction">
        <p className="serviceCard__duration">{duration}</p>
        <SelectBtn selected={selected} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default ServiceCard;
