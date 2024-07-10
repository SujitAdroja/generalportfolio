import React from "react";

function Contact() {
  return (
    <div className="contact__container ">
      <h4 className="contact__subheading">I'm Available</h4>
      <h1 className="contact__heading">Want to hire me ? </h1>
      <div className="half_circle">
        <div className="lets_takl_text">
          {/* <svg
            className="circle_text_svg"
            viewBox="0 0 100 100"
            width="100"
            height="100"
          >
            <defs>
              <path
                id="circle"
                d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text font-size="17">
              <textPath href="#circle" startOffset="13%">
                Let's Talk
              </textPath>
            </text>
          </svg> */}
        </div>
        <div className="circle">&rarr;</div>
      </div>
    </div>
  );
}

export default Contact;
