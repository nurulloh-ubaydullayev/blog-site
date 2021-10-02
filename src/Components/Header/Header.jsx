import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <ul className="header__list">
          <li className="header__item">
            <div className="loader_"></div>
            <p className="header__p">
              Welcome to my portfolio website my dear guest I am UX-UI designer
            </p>
          </li>
          <li className="header__item">
            <h1 className="header__header">
              Good design is immediately visible. Great design is invisible
            </h1>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
