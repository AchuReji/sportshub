import React, { useContext } from "react";
import "./Works.css";

import profile2 from "../../img/profile2.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Athira Akash</span>
          <spane>
            Athira National Athlete and Athletics Coach | National Gold Medalist
            A dedicated and accomplished professional with a proven track record
            as a national athlete and athletics coach.
            <br />
            Holder of a prestigious
            National Gold Medal in athletics, reflecting exceptional skill,
            dedication, and commitment to excellence.
          
            <br />
            Experienced in coaching athletes to achieve peak performance and success at national levels.
            Possesses strong leadership, communication, and motivational skills
            to inspire athletes to reach their full potential.
            <br />
            Committed to promoting a culture of excellence and achievement in athletics.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Let's Connect</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <img src={profile2} alt="" />
      </div>
    </div>
  );
};

export default Works;
