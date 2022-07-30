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

  const handleSelect = (id, name, duration, selected) => {
    if (selected === true)
      setSelServices([...selServices, { id, name, duration }]);
    else {
      setSelServices(selServices.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="services">
      {services.map((service) => {
        const idList = selServices.map((serv) => serv.id);

        return (
          <ServiceCard
            key={service.id}
            id={service.id}
            name={service.name}
            duration={service.duration}
            isSelect={idList.includes(service.id)}
            handleSelect={handleSelect}
          />
        );
      })}
    </div>
  );
};

export default StepService;
