import React from "react";
import "./leftNav.scss";
import {
  logoIc,
  overviewIc,
  categoriesIc,
  servicesIc,
  clientsIc,
  employeesIc,
} from "../../constants/icon";

const navigations = [
  {
    title: "Categories",
    icon: categoriesIc,
  },
  {
    title: "Services",
    icon: servicesIc,
  },
  {
    title: "Clients",
    icon: clientsIc,
  },
  {
    title: "Employees",
    icon: employeesIc,
  },
];

const LeftNav = () => {
  return (
    <div className="nav">
      <div className="nav__title">
        <img className="icon icon--title" alt="icon" src={logoIc} />
        <p className="nav__title__name">Barberino</p>
      </div>

      <ul className="nav__list">
        <li key="Overview" className="item item--active">
          <img className="icon" alt="icon" src={overviewIc} />
          <p className="item__title--active">Overview</p>
        </li>
        {navigations.map((item) => (
          <li key={item.title} className="item">
            <img className="icon" alt="icon" src={item.icon} />
            <p className="item__title">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftNav;
