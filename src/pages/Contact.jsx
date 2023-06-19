import React from 'react'
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import {MdEmail} from "react-icons/md";

const Contact = () => {
  return (
    <div>
         {/* <!-- contact content layout starting --> */}
    <div>

        <div class="contact">
            <h1>Contact us</h1>
        </div>
        <div class="Boxes">

            <div class="location card cards-style">
            <MdLocationPin/>
                <p>Ashaley Botwe</p>
            </div>


            <div class="tel card cards-style">
            <BsTelephoneFill/>
                <p>+233 (0302) 559079</p>

            </div>

            <div class="mail-sign card cards-style">
            <MdEmail/>
                <p>info@alhikmahis
                    lamicmontessori.com</p>

            </div>

        </div>

        <div class="reach-us">
            <div class="formular">
                <form method="get">
                    <label required>Email</label>
                    <br/>
                    <input type="text" placeholder="Enter a valid E-Mail Address">
                    <hr/>
                    <br/><br/>
                    <label required>Name</label>
                    <br/>
                    <input type="text" placeholder="Enter your Name">
                    <hr/>
                    <br/><br/>
                    <label required>Message</label>
                    <br/>
                    <input type="text" placeholder="Enter your message here">
                    <hr/>
                    <br/>
                    <input class="button" type="submit">

                </form>
            </div>

            <div class="Touch">
                <h1 style="color: #fff;">Get in Touch</h1>
                <p>We can ensure reliability cost low fees most important, with safety and comfort in mind.</p>
                <div class="social-media">
                    <div class="facebook icon-accent"> <i class="fa-br/ands fa-facebook"></i></div>
                    <div class="twitter icon-accent"> <i class="fa-br/ands fa-twitter"></i></div>
                    <div class="instagram icon-accent"> <i class="fa-br/ands fa-instagram"></i></div>
                    <div class="linkedin icon-accent"><i class="fa-br/ands fa-linkedin"></i></div>

                </div>
            </div>

        </div>

        <div class="map">


            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.1594176542785!2d-0.14369954964429632!3d5.690090733848051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8302885e49e1%3A0xa3d1226fdf828cdf!2sAl-Hikmah%20Islamic%20Montessori%20School!5e0!3m2!1sen!2sgh!4v1674123688544!5m2!1sen!2sgh"
                width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>
    </div>
  )
}

export default Contact