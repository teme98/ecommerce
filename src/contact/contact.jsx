import "./contact.css";
import GoldLine from "../mainComponents/goldLine/goldLine";
import Form from "./contactBody/contactBody";

import { Link } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Contact() {
  return (
    <div className="contact-phone-view">
      <div id="backgrond-contact">
        <div id="contact-icon">
          <img src="https://raw.githubusercontent.com/teme98/ecommerce/refs/heads/main/public/logoHd.svg" />
        </div>
        <h2>CONTACT</h2>
        <div id="cont-contact">
          <Link id="link-line" to="/">
            <div id="contact-link">Home</div>
          </Link>
          <span>
            <ArrowForwardIosIcon />
          </span>
          <p style={{ color: "black" }}>Contact</p>
        </div>
      </div>
      <Form />
      <GoldLine />
    </div>
  );
}

export default Contact;
