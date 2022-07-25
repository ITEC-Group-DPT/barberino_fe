import React from "react";
import "./header.scss";

const navTitle = ["Services", "Gallery", "Artists", "About"];
const Header = () => {
  return (
    <div className="header">
      <ul className="header__content">
        <li className="header__title header__title--active">Home</li>
        {navTitle.map((item) => (
          <li key={item} className="header__title">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
