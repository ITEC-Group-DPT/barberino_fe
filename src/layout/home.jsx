import React from "react";
import Stepper from "../component/bookingStep";
import Header from "../component/header";
import "./home.scss";

const App = () => {
  return (
    <>
      <Header />
      <p className="callUs">CALL US: 012-3456-7890</p>
      <div className="container">
        <h3 className="subHeading">Booking</h3>
        <h2 className="heading">Make an appointment</h2>
        <p className="grayText">
          Far far away, behind the word mountains, far from the
          countries Vokalia and Consonantia
        </p>
        <Stepper />
      </div>
    </>
  );
};

export default App;
