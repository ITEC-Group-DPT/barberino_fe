import React from "react";
import "./leftNav.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
];

const LeftNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getClassActive = (className, path) => {
    let result = className;

    const adminPath = location.pathname.split("/")[2];

    if (path === adminPath) {
      result += ` ${className}--active`;
    }

    return result;
  };

  const onLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("authentication", { replace: true });
  };
  return (
    <div className="nav">
      <div className="nav__title">
        <img className="icon icon__title" alt="icon" src={logoIc} />
        <p className="nav__title__name">Barberino</p>
      </div>

      <ul className="nav__list">
        <li className={getClassActive("item")}>
          <Link className="item link" to="">
            <img className="icon" alt="icon" src={overviewIc} />
            <p className="item__title--active">Overview</p>
          </Link>
        </li>

        <li className={getClassActive("item", "document")}>
          <Link className="item link" to="document">
            <img className="icon" alt="icon" src={clientsIc} />
            <p className="item__title">Documents</p>
          </Link>
        </li>
        {navigations.map((item) => (
          <li key={item.title} className="item">
            <img className="icon" alt="icon" src={item.icon} />
            <p className="item__title">{item.title}</p>
          </li>
        ))}

        <li className="item" onClick={onLogout} aria-hidden>
          <img className="icon" alt="icon" src={employeesIc} />
          <p className="item__title">Log out</p>
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;
