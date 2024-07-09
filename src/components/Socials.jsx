import React from "react";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Socials() {
  return (
    <div className="socials py-10">
      <h2 className="socials__heading">MORE WORk</h2>
      <div className="socials__container">
        <div className="socials__links  text-[#532eb9]">
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
        </div>
      </div>
    </div>
  );
}

export default Socials;
