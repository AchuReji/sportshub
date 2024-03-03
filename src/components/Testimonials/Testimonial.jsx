import React, { useContext } from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import Aboutus1 from "../../img/aboutus1.png";
import Aboutus2 from "../../img/about2.jpg";

import { themeContext } from "../../Context";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const clients = [
    {
      img: Aboutus1,
      review:
        "Hy! I Am Akash is an experienced national athlete and athletics coach with a proven track record.  World Athletics Pre-Level 1 coaching certification from NIS and is a state record holder in athletics. With leadership experience as Kerala University Cross Country Team captain, he is passionate about inspiring athletes to achieve peak performance.",
    },
    {
      img: Aboutus2,
      review:
       " Hy! I Am  Athira, a national athlete and athletics coach, is a National Gold Medalist with a proven track record of excellence. Experienced in coaching athletes to national success, she possesses strong leadership and motivational skills to inspire peak performance and foster a culture of excellence in athletics.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span style={{ color: darkMode ? "white" : "" }}>ABOUT US</span>

        <div className="blur t-blur1" style={{ background: "skyblue" }}></div>
        <div
          className="blur t-blur2"
          style={{ background: "var(--orange)" }}
        ></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
