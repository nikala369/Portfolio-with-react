import React, {useState} from "react";
import "./Footer.css";
import {Link} from 'react-router-dom';
import FooterSvg from "./Footersvg";

function Footer() {

    return(
       <footer className="footer-div">
           <FooterSvg />
           
       </footer>
    );
}


export default Footer;