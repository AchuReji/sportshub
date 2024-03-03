import React, { useContext } from "react";
import "./Intro.css";
import RUN from "../../img/Run.png";
import Profile from "../../img/profile.png";
import instagram from "../../img/instagram.png";
import facebook from "../../img/facebook.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Akash</span>
          <span>
            Hy! I Am Akash Experienced National Athlete and Athletics Coach.
            Dynamic and results-oriented professional with a proven track record
            as a national-level athlete and athletics coach. World Athletics
            Pre-Level 1 coaching certification from the National Institute of
            Sports (NIS), demonstrating a commitment to excellence in coaching
            and athlete development. Recognized as a state record holder in
            athletics, showcasing exceptional skill and dedication to the sport.
            Distinguished leadership experience as the captain of the Kerala
            University Cross Country Team, demonstrating strong teamwork,
            communication, and strategic planning abilities. Passionate about
            leveraging expertise to inspire and empower athletes to achieve
            peak performance.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Let's Connect</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img tyle={{ width: "100%" }} src={facebook} alt="" />
          <a href="https://www.instagram.com/sports_hub_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img style={{ width: "110%" }} src={instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Profile} alt="" />

        {/* animation */}
        <motion.img
          style={{ width: "20%" }}
          initial={{ left: "-36%" }}
          whileInView={{ left: "-5%" }}
          transition={transition}
          src={RUN}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Athletic " text2="Coach" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Traning" text2="Academy" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
