import React from "react";
import Ceo from "../../asset/ceo1.jfif";
import Mission from "../../asset/mission.png";
import Vision from "../../asset/vision.png";
import Value from "../../asset/values.jpg";

const Intro = () => {
  return (
    <div>
      {/* Welcome to alhikma section by mariam */}
      <div className="welcome">
        <h1>Welcome to Al-Hikmah Islamic Montessori</h1>
      </div>
      <div className="hikmah">
        <p>
          At Al-Hikmah Islamic Montessori Schools,We prepare your child to
          attain success in both worlds. We nourish our students with academic
          skills, knowledge of the Deen and essential life skills in a conducive
          learning environment.We provide an open-minded and supportive
          atmosphere through a climate commitment,empathy and open
          communication.We promote international mindedness throughtout our
          curriculumby exploring our diversity of culture,language and
          experience while gaining insights from the unique perspective of the
          Afrcan culture and traditions. We facilitate the acquisition of
          langauges and understanding of culture by communicating in
          English,Arabic and French.
        </p>
      </div>

      <div className="vision">
        <div className="five">
          <img src={Vision} alt="vision" />
          <h1>Our Vision</h1>
          <p>
            Our vision is to nuture each child in their spiritual, moral,
            intellectual,social and emotional growth in the light of the Quran
            and the Sunnah of the Prophet(SAW).
          </p>
          <button className="primary-btn">
            <a href="About.html">Read More</a>
          </button>
        </div>

        <div className="five">
          <img src={Mission} alt="mission" />
          <h1>Our Mission</h1>
          <p>
            To provide the best intellectual,social,physical, and spiritual
            child development programs on the market and to deliver them in the
            safest of environment with the most capable and nurturing staff.
          </p>
          <button className="primary-btn">
            <a href="About.html">Read More</a>
          </button>
        </div>

        <div className="five" id="mission">
          <img id="value_png" src={Value} alt="values" />
          <h1>Our Mandate</h1>
          <p>
            We stimulate inquiring minds and spark enthusiasm for discovery and
            exploration. Focus on all aspect of student development: the
            acdemic, the intellectual,the creative, the social, the physical,the
            spiritual the ethical and the emotional.
          </p>
          <button className="primary-btn">
            <a href="About.html">Read More</a>
          </button>
        </div>
      </div>

      {/* A word from our Founder  */}
     <div className="founder__content">
     <h1>A Word From Our Founder</h1>
      <div className="container about__container">
        {/* <div className="founder-inner"> */}

        <div className="about__me">
          <div className="about__me-image">
            <img src={Ceo} alt="founder" />
          </div>
        </div>

        <div className="about__content">
          <p>
              “ Dear Students, Parents, and Teachers, It is with great pleasure
              and gratitude that I welcome you to Al-Hikma Islamic Montessori
              School. As the founder of this institution, I am honored to have
              the opportunity to provide an high quality educational environment
              that is grounded in the principles of Montessori education and
              Islamic values. Dear Al-Hikma Montessori School community, and we
              are committed to providing a safe and inclusive environment that
              celebrates diversity and promotes open communication between
              students, parents, and teachers. I am proud of the work that we
              have accomplished so far, and I am excited about the future of our
              school. I believe that by working together as a community, we can
              continue to provide an outstanding education that prepares our
              students for success in their academic, personal, and professional
              lives. Sincerely, Mahamudou Jajah(CEO) ”
          </p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Intro;
