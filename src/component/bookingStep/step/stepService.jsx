import React, { useState, useEffect } from "react";
import ServiceCard from "../../serviceCard/serviceCard";
import "./step.scss";
import { getServicesAPI } from "../../../api/bookingApi";

const StepService = ({ selServices, setSelServices }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServicesAPI().then((response) => {
      if (response.status === 200) {
        setServices(response.data);
      }
    });
  }, []);

  const handleSelect = (id, selected) => {
    if (selected === true)
      setSelServices([...selServices, id]);
    else {
      setSelServices(
        selServices.filter((item) => item !== id)
      );
    }
  };
  return (
    <div className="services">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          name={service.name}
          duration={service.duration}
          isSelect={selServices.includes(service.id)}
          handleSelect={handleSelect}
        />
      ))}
    </div>
  );
};

export default StepService;
