import React from "react";
import './home.css'
import Prog1 from "../../asset/prog1.jpg";
import Prog2 from "../../asset/prog2.jpg";
import Prog3 from "../../asset/prog3.jpg";

const Program = () => {
  return (
      <div className="activities">
        <h1>Our Programs</h1>
        <div className="box">
          <div className="box_cards">
            <img className="small" src={Prog1} alt="programs" />
            <div className="cards-content">
            <h1>
              Creche
              <br />
              (18months-2years)
              <br />
            </h1>
            <p>
              At Al-Hikmah Islamic Montessori,children are given the freedom to
              choose their own activities and work at their own pace. The
              environment is carefully designed to be...{" "}
            </p>
            <button className="primary-btn">Read more</button>
            </div>
          </div>
          <div className="box_cards">
            <img className="small" src={Prog2} alt="programs" />
            <div className="cards-content">
            <h1>
              kindergarten
              <br />
              (2years-3years)
              <br />
            </h1>
            <p>
              The goal of Kindergarten Montessori is to help children develop
              independence, self-confidence, and a love of learning. We provide
              a nurturing and stimulating ...
            </p>
            <button className="primary-btn">Read more</button>
            </div>
          </div>
          <div className="box_cards">
            <img className="small" src={Prog3} alt="programs" />
            <div className="cards-content">
            <h1>
              Grades
              <br />
              (6years-10years)
              <br />
            </h1>
            <p>
              One of the key features of a Primary Montessori classroom is the
              use('of') self-correcting materials. These materials are designed to
              provide immediate feedback to the child,...{" "}
            </p>
            <button className="primary-btn">Read more</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Program;
