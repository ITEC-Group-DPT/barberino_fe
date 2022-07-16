import React, { useState } from "react";
import ServiceCard from "../../serviceCard/serviceCard";
import "./step.scss";

const services = [
  {
    name: "Hair Cut",
    duration: "20 min",
  },
  {
    name: "Hair Styling",
    duration: "15 min",
  },
  {
    name: "Hair Triming",
    duration: "10 min",
  },
  {
    name: "Clean Shaving",
    duration: "20 min",
  },
  {
    name: "Beard Triming",
    duration: "15 min",
  },
  {
    name: "Smooth Shave",
    duration: "20 min",
  },
  {
    name: "White Facial",
    duration: "15 min",
  },
  {
    name: "Face Cleaning",
    duration: "20 min",
  },
  {
    name: "Bright Tuning",
    duration: "20 min",
  },
];

const StepService = ({ selectedServices, setSelectedServices }) => {
  const handleSelect = (name, selected) => {
    if (selected === true)
      setSelectedServices([...selectedServices, name]);
    else {
      setSelectedServices(
        selectedServices.filter((item) => item !== name)
      );
    }
  };
  return (
    <div className="services">
      {services.map((service) => (
        <ServiceCard
          key={service.name}
          name={service.name}
          duration={service.duration}
          initSelect={selectedServices.includes(service.name)}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default StepService;
