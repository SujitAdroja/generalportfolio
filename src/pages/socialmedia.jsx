import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import SocialMediaCard from "../components/SocialMediaCard";

const socialMedias = [
  {
    name: "Linked In",
    icon: <FaLinkedin />,
    link: "url",
    textColor: '#532eb9',
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "url",
    textColor: '#532eb9',
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "url",
    textColor: '#1B646B',
  },
];

const SocialMedia = () => {
  return (
    <div className="socials">
      <div className="socials__container container">
        <h2 className="socials__heading">Contact Me Here</h2>
        {/* <div className="socials__links  text-[#532eb9]">
          <h1>
            <a href="#" className="socials__links_link ">
              Linked In
            </a>
          </h1>
          <div className="socials__links_right  ">
            <div className="socials__links_right_icon">
              <FaDribbble />
            </div>
            <div className="flex flex-col gap-0 ">
              <p className="text-[40px] font-[300]">84+</p>
              <p className="text-[20px] font-[200]">Projects</p>
            </div>
          </div>
        </div>
        <div className="socials__links text-[#532eb9]">
          <h1>
            <a href="#" className="socials__links_link ">
              Twitter
            </a>
          </h1>
          <div className="socials__links_right  ">
            <div className="socials__links_right_icon">
              <FaTwitter />
            </div>
            <div className="flex flex-col gap-0 ">
              <p className="text-[40px] font-[300]">84+</p>
              <p className="text-[20px] font-[200]">Projects</p>
            </div>
          </div>
        </div>
        <div className="socials__links flex text-[#1b646b]">
          <h1>
            <a href="#" className="socials__links_link ">
              GitHub
            </a>
          </h1>
          <div className="socials__links_right  ">
            <div className="socials__links_right_icon">
              <FaGithub />
            </div>
            <div className="flex flex-col gap-0 ">
              <p className="text-[40px] font-[300]">84+</p>
              <p className="text-[20px] font-[200]">Projects</p>
            </div>
          </div>
        </div> */}
        <SocialMediaCard  socialMedias={socialMedias}/>
      </div>
    </div>
  );
};

export default SocialMedia;
