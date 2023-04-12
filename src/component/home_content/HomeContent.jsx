import React from "react";
import "./home.css";
import Intro from "./Intro";
import Program from "./Program";
import Classworks from "../../asset/classworks.webp";
import { BiBrain } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import Uniq1 from "../../asset/uniq1.jpg";
import Uniq2 from "../../asset/uniq2.jpg";
import Uniq3 from "../../asset/uniq3.jpg";
import Slide2 from "../../asset/slide2.jpg";
import Facility1 from "../../asset/Facility1.jpg";
import Facility2 from "../../asset/Facility2.jpg";
import Facility3 from "../../asset/Facility3.jpg";
// testimonials component import
import Review from "../testimonials/Review";

const facilities = [
  {
    pics: Facility1,
    title: "Serene Envr.",
    detail:
      "We provide a serene environment for your ward to enable them focus on their work and learning",
  },
  {
    pics: Facility2,
    title: "Playground",
    detail:
      "We provide playground that encourages children to be curious, independent, and confident learners through hands-on exploration and self-directed play",
  },
  {
    pics: Facility3,
    title: "Library",
    detail:
      "Our library typically includes a wide variety of books, including picture books, non-fiction books, biographies, and stories from different cultures and time periods.",
  },
  {
    pics: Slide2,
    title: "Classroom",
    detail:
      "Our classroom is a child-centered learning environment that emphasizes exploration, independence, and hands-on learning.",
  },
];
const HomeContent = () => {
  return (
    <div>
      <Intro />
      <Program />

      {/* why our school section starting */}
      <div className="ours">
        <h2>Why Our School is the Right Fit for Your Child?</h2>
        <p>
          Our school offers high-quality education, which is based on the latest
          research and teaching methods. Our teachers are experienced and
          dedicated to providing students with the best possible learning
          experience.
        </p>
        <div className="inner">
          <div className="left">
            <div className="svg-text">
              <BiBrain id="brain" className="ours_icon" />
              <h3>Well Trained professional</h3>
            </div>
            <div className="svg-text">
              <BsBank2 id="bank" className="ours_icon" />{" "}
              <h3>Awesome Infra-Structure</h3>
            </div>
            <div className="svg-text">
              <FaBookReader id="book" className="ours_icon" />

              <h3>International Lesson Patterns</h3>
            </div>
          </div>
          <div className="right">
            <img src={Classworks} alt="why our school" />
          </div>
        </div>
      </div>
      {/* ========  why choose our school finish  ======= */}

      {/* our Uniquesness section structure starting */}
      <div className="unique-bg">
        <div className="unique">
          <h1>Our Uniquesness</h1>
          <p>
            At Hikmah, what makes us unique is our strong emphasis on Quality
            Islamic and Montessori Educational System.
          </p>
        </div>

        <div className="box">
          <div className="box_cards">
            <img className="big" src={Uniq1} alt="Our Uniqueness" />
            <div className="cards-content">
              <h1>Islamic & Secular Education</h1>
              <p>
                We prepare your child to attain success in both worlds. We
                nourish our students with academic skills, knowledge of the Deen
                and essential life skills in a conducive learning environment..
              </p>
            </div>
          </div>
          <div className="box_cards">
            <img className="big" src={Uniq2} alt="Our Uniqueness" />
            <div className="cards-content">
              <h1>Montessori System</h1>
              <p>
                Pursue excellence through a commitment to the continuum of the
                Montessori and Islamic programs, as well other accrediting
                educational programmes. A dynamic and progressive school with
                well-resourced and innovative programmes
              </p>
            </div>
          </div>
          <div className="box_cards">
            <img className="big" src={Uniq3} alt="Our Uniqueness" />
            <div className="cards-content">
              <h1>Good Global Citizens</h1>
              <p>
                We encourage our students to contribute to the community,
                embrace and respect diversity and change, act with kindness and
                strength of character,and passionately pursue academic and
                extracurricular interest
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials componet insertion */}
      <Review />

      {/* ========== Our facilities section starting ======= */}
      <div className="facility_bg">
      <div className="facility_box">
      <h1>Our Facilities</h1>
      <div className="box_extra">
        {facilities.map((facility) => {
          return (
            <div className="box_cards cards_extra">
              <img src={facility.pics} alt={facility.title} />
              <div className="cards-content">
                <h1>{facility.title}</h1>
                <p>{facility.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </div>


    </div>
  );
};

export default HomeContent;
