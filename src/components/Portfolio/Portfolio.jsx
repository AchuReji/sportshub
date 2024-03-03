

import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";



import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Gallerys</span>
      

      {/* slider */}
      <Swiper
        spaceBetween={-180}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img style={{width:'40%',left:'10rem'}} src="https://i.postimg.cc/YC70r1m2/Screenshot-2023-11-28-103816.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'40%'}} src="https://i.postimg.cc/Zn0YQcgj/Screenshot-2023-11-28-104412.png" alt="" />
        </SwiperSlide>
           <SwiperSlide>
          <img style={{width:'40%'}} src="https://i.postimg.cc/cJNb5Ljb/Screenshot-2023-11-28-105907.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'40%'}} src="https://i.postimg.cc/hPGvf9DK/Screenshot-2023-11-28-104315.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'40%'}} src="https://i.postimg.cc/cLMfc1Nh/Screenshot-2023-11-28-104256.png" alt="" />
        </SwiperSlide>
     
        <SwiperSlide>
          <img style={{width:'40%'}} src="https://i.postimg.cc/8z6Zgfrb/Screenshot-2023-11-28-104334.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'40%'}} src="https://i.postimg.cc/xTjJMwRD/Screenshot-2023-11-28-104304.png" alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img style={{width:'40%'}} src= alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'40%'}} src= alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'40%'}} src= alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{width:'40%'}} src= alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;