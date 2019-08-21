import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "./../../assets/zallpy_logo.png";

const styles = {
  linkStyle: {
    lineHeight: "100%",
    display: "inline"
  }
};

class AppHeader extends Component {
  render() {
    return (
      <header>
        <nav style={{ backgroundColor: "#262626" }} role="navigation">
          <div className="nav-wrapper container">
            <Link id="logo-container" to="/" className="brand-logo">
              <img style={{ width: "140px" }} src={logo} />
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/login">
                  <b>Login</b>
                </Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="sidenav">
              <li>
                <Link className="sidenav-close" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <a data-target="nav-mobile" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
