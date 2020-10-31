import React from "react";
import "./Header.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Header = () => {
  const menu2 = "style demo";
  const menu3 = "full width";
  const menu4 = "dropdown";
  const menu5 = "portfolio";
  const menu6 = "gallery";

  return (
  <div className="wrapper header-wrapper">
    <div className="header">
      <div className="logo">
        <div className="logo-text">Autonomous</div>
        <canvas className="logo-separator" />
        <div className="logo-describe">
          Free PSD <br /> Website Template
        </div>
      </div>

      <div className="header-menu">
        <Router>
          <nav>
            <ul className="header-menu-list">
              <li className="header-menu-item">
                <NavLink
                  to="./home"
                  className="menu-text"
                  activeClassName="home_selected"
                  activeStyle={{ color: "#e2494b" }}
                >
                  home
                </NavLink>
              </li>

              <li className="header-menu-item">
                <NavLink
                  to="./menu2"
                  className="menu-text"
                  activeClassName="menu2_selected"
                  activeStyle={{ color: "#e2494b" }}
                >
                  {menu2}
                </NavLink>
              </li>
              <li className="header-menu-item">
                <NavLink
                  to="./menu3"
                  className="menu-text"
                  activeClassName="menu3_selected"
                  activeStyle={{ color: "#e2494b" }}
                >
                  {menu3}
                </NavLink>
              </li>
              <li className="header-menu-item">
                <NavLink
                  to="./menu4"
                  className="menu-text"
                  activeClassName="menu4_selected"
                  activeStyle={{ color: "#e2494b" }}
                >
                  {menu4}
                </NavLink>
              </li>
              <li className="header-menu-item">
                <NavLink
                  to="./menu5"
                  className="menu-text"
                  activeClassName="menu5_selected"
                  activeStyle={{ color: "#e2494b" }}
                >
                  {menu5}
                </NavLink>
              </li>
              <li className="header-menu-item">
                <NavLink
                  to="./menu6"
                  className="menu-text"
                  activeClassName="menu6_selected"
                  activeStyle={{ color: "#e2494b" }}
                >
                  {menu6}
                </NavLink>
              </li>
            </ul>
          </nav>
        </Router>
      </div>
    </div>
  </div>
  );
};

export default Header;
