import React from "react";
// import "./address.css";
import {MdEmail} from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const AddressIcon = ({ footerAddress }) => {

  const addressIcons = [
    { icons: <MdEmail/>, txt: 'info@alhikmahislamicmontessori.com'},
    {icons:  <BsTelephoneFill/>, txt: '+233 0320233000/+233 530220204'} ,
    {icons: <MdLocationPin/>, txt: 'Ashaley Botwe'}, 
  ];

return (
    <div className={footerAddress ? "footer-address" : "header__address"}>

    { addressIcons.map((icon) => (
      <p>{icon.icons} {icon.txt}</p>
    ) )}
    </div>
  );
}

export default AddressIcon;