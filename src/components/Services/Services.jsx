import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import PSC from "../../img/psc.png"
import Glasses from "../../img/glasses.png";
import Defence from "../../img/Defence.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Athletics from "../../img/Athletics.png"


const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My physical</span>
        <span>programme</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href=" " download>
          <button className="button s-button">Certificate</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Defence }
            heading={" Defence"}
            detail={"Army , Airforce , Navy , ssc..and all items"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={PSC}
            heading={"PSC"}
            detail={"Police , Excise , CPO ,IRB ..and all items"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Athletics}
            heading={"Athletics"}
            detail={
              "400 Meteres ,Cross country running,High jump,Long jump,Triple jump,Javelin throw and all items "
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
