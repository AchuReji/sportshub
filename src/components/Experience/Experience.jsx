import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>100%</div>
        <span  style={{color: darkMode?'white':''}}>Defence </span>
        
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>100%</div>
        <span  style={{color: darkMode?'white':''}}>PSC</span>
       
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>100%</div>
        <span  style={{color: darkMode?'white':''}}>Athletics </span>
        
      </div>
    </div>
  );
};

export default Experience;
