/* eslint-disable camelcase */
import React, { useState } from "react";
import "./bookingForm.scss";
import BookingHeader from "./bookingHeader";
import BookingFooter from "./bookingFooter";
import StepInfo from "./step/stepInfo";
import StepService from "./step/stepService";
import StepDateTime from "./step/stepDateTime";
import { validateStepOne } from "./validators";
import { createBookingAPI } from "../../api/bookingApi";

const stepper = ["Information", "Services", "DateTime"];
const BookingStep = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [information, setInformation] = useState();
  const [selServices, setSelServices] = useState([]);
  const [selDateTime, setSelDateTime] = useState({});

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      const isValid = validateStepOne();

      if (isValid === false) {
        alert("Please input all field");
        return;
      }
    } else if (activeStep === 1) {
      if (selServices.length === 0) {
        alert("Please select at least 1 service");
        return;
      }
    } else if (activeStep === 2) {
      const bookingData = {
        phone: information.phone,
        name: information.name,
        email: information.email,
        selected_services: selServices,
        selected_date: selDateTime.date,
        selected_time: selDateTime.time,
        selected_employee: selDateTime.stylistID,
      };

      createBookingAPI(bookingData).then((response) => {
        if (response.status === 200) {
          alert("Booking successfully (check console)");
          console.log(bookingData);
        }
      });
    }
    if (activeStep < stepper.length - 1)
      setActiveStep(activeStep + 1);
  };

  const renderContent = () => {
    switch (activeStep) {
      case 0:
        return (
          <StepInfo data={information} setData={setInformation} />
        );
      case 1:
        return (
          <StepService
            selServices={selServices}
            setSelServices={setSelServices}
          />
        );
      case 2:
        return (
          <StepDateTime
            selServices={selServices}
            selDateTime={selDateTime}
            setSelDateTime={setSelDateTime}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="booking">
      <BookingHeader
        data={stepper}
        setActive={setActiveStep}
        active={activeStep}
      />

      <div className="booking__content">{renderContent()}</div>

      <BookingFooter
        data={stepper}
        handlePrev={handlePrev}
        handleNext={handleNext}
        active={activeStep}
      />
    </div>
  );
};

export default BookingStep;
