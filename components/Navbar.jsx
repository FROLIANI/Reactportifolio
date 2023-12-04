import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";

const navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__menu">
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav__item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "  active-nav" : "na__link"
                  }
                >
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="nav__toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default navbar;
