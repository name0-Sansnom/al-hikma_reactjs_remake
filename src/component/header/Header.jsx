import React from "react";
import './header.css';
import Slider from "../slider/Swiper";
import Boxes from "./Boxes";
import HomeContent from "../home_content/HomeContent";

const Header = () => {
  return (
    <div>
      <Slider />
      <Boxes />
      <HomeContent />
    </div>
  );
};

export default Header;
