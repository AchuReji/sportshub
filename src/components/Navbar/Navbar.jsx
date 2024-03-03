import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name"  >
         <a href=" " style={{textDecoration:'none'}}> SPORTSHUB</a>
         </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="  services" spy={true} smooth={true}>
              Programme
              </Link>
            </li>
            
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
              Gallery
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
              Aboutus
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact us</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
