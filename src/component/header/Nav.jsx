import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/Logo.jpg";
import Admission from "../../asset/Admission.pdf";
import AddressIcon from "../address/Address";
import Social from "../address/Social";

const Nav = () => {
  return (
    <div>
      <div className="top">
        <AddressIcon />
        <Social />
      </div>

      {/* //  for placing navbar oon top of the slider in responsive mode  
    // and Responsive Header */}
      <div className="menu-top">
        <nav>
          <div className="logo">
            <a href="index.html">
              <img src={Logo} alt="" />
            </a>
          </div>

          <label htmlFor="btn" className="icon">
            <span className="fa fa-bars"></span>
          </label>

          <input type="checkbox" id="btn" />

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
             <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Programs">Program</Link>
            </li>
            <li>
              <a href="Event.html">Event</a>
            </li>

            <li>
              <label htmlFor="btn-1" className="show">
                Features+
              </label>
              <a href="#p">Features</a>
              <input type="checkbox" id="btn-1" />
              <ul className="sub-links">
                <li>
                  <a href={Admission} download>
                    Form
                  </a>
                </li>
                <li>
                  <a href="#p">Portal</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
