import React from "react";
import "./step.scss";

const StepInfo = ({ data, setData }) => {
  const handleChange = (key, event) =>
    setData({ ...data, [key]: event.target.value });
  return (
    <div className="info">
      <div className="row">
        <input
          className="info__input"
          type="email"
          placeholder="Email"
          value={data?.email || ""}
          onChange={(event) => handleChange("email", event)}
        />
        <input
          className="info__input"
          type="tel"
          placeholder="Phone"
          value={data?.phone || ""}
          onChange={(event) => handleChange("phone", event)}
        />
      </div>

      <div className="row">
        <input
          className="info__input"
          type="text"
          placeholder="Name"
          value={data?.name || ""}
          onChange={(event) => handleChange("name", event)}
        />

        <input
          className="info__input"
          type="text"
          placeholder="Other Note..."
          value={data?.note || ""}
          onChange={(event) => handleChange("note", event)}
        />
      </div>
    </div>
  );
};

export default StepInfo;
