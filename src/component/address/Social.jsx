import React from "react";
// import "./address.css";
import {ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Social = ({ footerSocial }) => {

  const socialIcons = [
    {href: "https://facebook.com", icons: <ImFacebook /> },
    {href: "https://instagram.com", icons:  <BsInstagram />} ,
    {href: "https://twitter.com", icons: <BsTwitter /> }, 
    {href: "https://linkedin.com", icons: <GrLinkedinOption /> } 
  ];

return (
    <div className={footerSocial ? "footer-socials" : "header__socials"}>

    { socialIcons.map((link) => (
      <a href={link.href} target="_blank" rel="noopener noreferrer"> {link.icons}</a>
    ) )}
    </div>
  );
}

export default Social;