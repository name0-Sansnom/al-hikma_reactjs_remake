import React from "react";
import Box1 from "../../asset/box1.jpg";
import Box2 from "../../asset/box2.jpg";
import Box3 from "../../asset/box3.jpg";
import Box4 from "../../asset/box4.png";

const Boxes = () => {
  return (
    // First section starting

    <div className="section-one">
      <div className="cart">
        <img src={Box1} alt='box' />
        <h2>Daycare</h2>
      </div>

      <div className="cart">
        <img src={Box2} alt='box' />
        <h2>Playschool</h2>
      </div>

      <div className="cart">
        <img src={Box3} alt='box' />
        <h2>Preschool</h2>
      </div>

      <div className="cart">
        <img src={Box4} alt='box' />
        <h2>Primary</h2>
      </div>
    </div>
  );
};

export default Boxes;
