import React from "react";

function SocialMediaCard({ socialMedias }) {
  return socialMedias.map((res) => (
    <div className={`socials__links  text-[${res.textColor}]`}>
      <h1>
        <a href="#" className="socials__links_link ">
          {res.name}
        </a>
      </h1>
      <div className="socials__links_right  ">
        <div className="socials__links_right_icon cursor-pointer">
          {res.icon}
        </div>
      </div>
    </div>
  ));
}

export default SocialMediaCard;
