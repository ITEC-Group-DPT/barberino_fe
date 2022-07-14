import React, { useState } from "react";
import "./bookingStep.scss";
import BookingHeader from "./bookingHeader";
import BookingFooter from "./bookingFooter";

const stepper = [
  {
    title: "Information",
    component: () => <p>Step 1</p>,
  },
  {
    title: "Services",
    component: () => <p>Step 2</p>,
  },
  {
    title: "Information",
    component: () => <p>Step 3</p>,
  },
];

const BookingStep = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleNext = () => {
    if (activeStep < stepper.length - 1)
      setActiveStep(activeStep + 1);
  };

  return (
    <div className="booking">
      <BookingHeader
        data={stepper}
        setActive={setActiveStep}
        active={activeStep}
      />

      <div className="booking__content">
        {stepper[activeStep].component()}
      </div>

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
