import React from "react";
import { useRef } from "react";
import slide1 from "../../asset/slide1.jpg";
import slide2 from "../../asset/slide2.jpg";
import slide3 from "../../asset/slide3.jpg";
import slide4 from "../../asset/slide4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
 <div className="slider-body">
  <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
      <SwiperSlide className="swiper-slide">
            <img src={slide1} alt="Slide 1" className="overlay" />
            <div className="text">
              <h1>Al-Hikmah Islamic Montessori School</h1>
              <p>Nurturing Minds, Soul & Body</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <img src={slide2} alt="Slide 2" className="overlay" />
            <div className="text">
              <h1>Al-Hikmah Islamic Montessori School</h1>
              <p>Nurturing Minds, Soul & Body</p>
            </div>

        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <img src={slide3} alt="Slide 3" className="overlay" />
            <div className="text">
              <h1>Al-Hikmah Islamic Montessori School</h1>
              <p>Nurturing Minds, Soul & Body</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
            <img src={slide4} alt="Slide 4" className="overlay" />
            <div className="text">
              <h1>Al-Hikmah Islamic Montessori School</h1>
              <p>Nurturing Minds, Soul & Body</p>
            </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

 </div>
     
        
  );
}

export default Slider;
