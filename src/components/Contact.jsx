import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact__container ">
      <h4 className="contact__subheading">I'm Available</h4>
      <h1 className="contact__heading">Want to hire me ? </h1>
      <div className="half_circle">
        <div className="lets_takl_text"></div>
        <div className="circle">
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Contact;
