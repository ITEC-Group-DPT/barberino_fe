import React, { useState } from "react";
import "./bookingForm.scss";
import BookingHeader from "./bookingHeader";
import BookingFooter from "./bookingFooter";
import StepInfo from "./step/stepInfo";
import StepService from "./step/stepService";
import { validateStepOne } from "./validators";

const stepper = ["Information", "Services", "DateTime"];
const BookingStep = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [information, setInformation] = useState();
  const [selectedServices, setSelectedServices] = useState([]);

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
      if (selectedServices.length === 0) {
        alert("Please select at least 1 service");
        return;
      }
      console.log("selected services:", selectedServices);
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
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
          />
        );
      case 2:
        return <p>Step 3</p>;
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
