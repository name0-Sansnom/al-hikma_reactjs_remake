import React from "react";
import "./page_css/about.css";
import About_Banner from "../asset/14.jpg";
import Sensorial from "../asset/sensorial_exsercise.png";
import Islamic from "../asset/islamic_studies_icon.png";
import Math from "../asset/maths_icon.png";
import English from "../asset/english_icon.png";
import Cultural from "../asset/cultural_studies.png";
import Arabic from "../asset/arabic_icon.png";
import Art from "../asset/3D_art.png";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { BsTextWrap } from "react-icons/bs";
import { RiAspectRatioFill } from "react-icons/ri";
import { MdStorage } from "react-icons/md";
import { MdOutlineChildFriendly } from "react-icons/md";
import { MdModelTraining } from "react-icons/md";
import Principal from "../asset/Principal.jpg";
import Admin from "../asset/Admin.jpg";
import Mubarak from "../asset/Mubarak.jpg";
import Ustaz from "../asset/Ustaz.jpg";
import Ruhul from "../asset/Ruhul.jpg";
import Mariam from "../asset/Mariam.jpg";
import Nasiba from "../asset/Nasiba.jpg";
import Fauziya from "../asset/Dajma.jpg";

const AboutTeam = [
  { perso: "Nabila Bashiru Bansi", post: "Principal", image: Principal },
  { perso: "Rashidatu Umar", post: "Administrator", image: Admin },
  {
    perso: "Nasiba Swallah Yussif",
    post: "Communication Manager",
    image: Nasiba,
  },
  { perso: "Mariam Gibril", post: "Head of Nursery Depart.", image: Mariam },
  { perso: "Mubarak Mohammed", post: "Transport Manager", image: Mubarak },
  { perso: "Fauziya Suraj", post: "Teacher", image: Fauziya },
  { perso: "Ruhul-Haqq Ali Ibrahim", post: "Teacher", image: Ruhul },
  { perso: "Ishaq Suleiman Abass", post: "Islamic Teacher", image: Ustaz },
];

const About = () => {
  return (
    <div>
      <div className="hero_banner_container">
        <img src={About_Banner} alt="" />
        <p className="hero_banner_text">About Us</p>
      </div>

      <div class="section1">
        <div class="belowText">
          <p>
            We nourish our students with academic skills, knowledge of deen and
            essential life skills in a conducive environment
          </p>
          <hr id="belowLine" />
        </div>

        <div class="statistics">
          <div>
            <h1 className="num" data-val="300"></h1>
            <p>Registered Students</p>
          </div>

          <div>
            <h1 className="num" data-val="100"></h1>
            <p>Teaching Staff</p>
          </div>

          <div>
            <h1 class="num" data-val="40">
              40+
            </h1>
            <p>Non-teaching Staff</p>
          </div>
        </div>
      </div>

      <div class="section2">
        <h1>Who We Are</h1>

        <div class="mission">
          <div class="missionImage"></div>
          <div class="history">
            <h3>Brief History</h3>
            <p>
              We started Al-Hikmah Islamic Montessori School in January 2021
              with just 7 kids, which includes our 3 kids. My wife and I were
              worried about getting quality Islamic education combined with
              quality secular education for the kids. We also wanted a school
              with small class sizes where our kids could get the needed
              attention. And in an era of the pandemic, one should be concerned
              about the school environment of his children.So we decided to
              start Al-Hikmah Islamic Montessori School.
            </p>

            <div class="missionText">
              <div class="text-1">
                <h3>Our Vision</h3>
                <p>
                  The vision of Al-Hikmah Islamic Montessori School is to
                  nurture each child in their spiritual, moral, intellectual,
                  social, and emotional growth in the light of the Quran and the
                  Sunnah of the Prophet (SAW).
                </p>
              </div>

              <div class="text-2">
                <h3>Our Mission</h3>
                <p>
                  To provide the best intellectual, social, physical, and
                  spiritual child development programs on the market and to
                  deliver them in the safest of environment with the most
                  capable and nurturing staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section3">
        <h1>Our Core Values</h1>
        <p>
          Our core value is to provide world class quality Islamic and secular
          education to Ghanaian muslim children..
        </p>
        <div class="coreValues"></div>
      </div>

      <div class="section4">
        <h1>Why Al-Hikmah</h1>

        <div class="values">
          <div id="icon" class="icon1">
            <MdOutlineCloseFullscreen className="about_icons" />
            <p>
              Working closely with parents
              <br /> for the best schooling and
              <br /> upbringing results.
            </p>
          </div>

          <div id="icon" class="icon2">
            <BsTextWrap className="about_icons" />
            <p>
              Wide range of teaching
              <br /> methodologies. Specially
              <br /> designed broad and balanced
              <br /> curriculum.
            </p>
          </div>

          <div id="icon" class="icon3">
            <RiAspectRatioFill className="about_icons" />
            <p>
              Remarkably low student to
              <br /> teacher ratio of 7:1
            </p>
          </div>

          <div id="icon" class="icon4">
            <MdStorage className="about_icons" />
            <p>
              All-rounded development of
              <br /> the child including mental,
              <br /> physical, spiritual and
              <br /> emotional aspects.
            </p>
          </div>

          <div id="icon" class="icon5">
            <MdOutlineChildFriendly className="about_icons" />
            <p>
              Caring & stimulating
              <br /> environment based on Islamic
              <br /> guidelines.
            </p>
          </div>

          <div id="icon" class="icon6">
            <MdModelTraining className="about_icons" />
            <p>
              Constant training of teachers
              <br /> both professionally and
              <br /> Islamically.
            </p>
          </div>
        </div>
      </div>

      <div class="section5">
        <h1>What We Do</h1>
        <p>
          We provide a world with future in which there are more empowered youth
          in developing the future of <br /> the educational ecosystem.
        </p>

        <div class="subject">
          <div id="subjectCard">
            <img src={Arabic} alt="" />
            <p>ARABIC LANGUAGE</p>
          </div>

          <div id="subjectCard">
            <img src={English} alt="" />
            <p>ENGLISH LANGUAGE</p>
          </div>

          <div id="subjectCard">
            <img src={Math} alt="" />
            <p>MATHEMATICS</p>
          </div>

          <div id="subjectCard">
            <img src={Islamic} alt="" />
            <p>ISLAMIC STUDIES</p>
          </div>

          <div id="subjectCard">
            <img src={Cultural} alt="" />
            <p>CULTURAL STUDIES</p>
          </div>

          <div id="subjectCard">
            <img src={Art} alt="" />
            <p>2D AND 3D ART</p>
          </div>

          <div id="subjectCard">
            <img src={Sensorial} alt="" />
            <p>SENSORIAL EXERCISES</p>
          </div>
        </div>
      </div>

      <div class="section6">
        <h1>Meet Our Team</h1>
        <div class="ourTeam">
          {AboutTeam.map((id) => {
            return (
              <div id="team" class="team1">
                <img src={id.image} alt="" />
                <h3>{id.perso}</h3>
                <p>{id.post}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
