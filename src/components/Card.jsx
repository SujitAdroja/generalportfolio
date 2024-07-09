import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiAffinitydesigner } from "react-icons/si";

function Card({ cardBg, cardTextColor, cardHeading, cardItems, cardProjects }) {
  return (
    <div className="card " style={{ "--bg": cardBg, "--text": cardTextColor }}>
      <div className="card__icon ">
        {cardHeading === "FrontEnd Developer" ? (
          <IoCodeSlashOutline />
        ) : (
          <SiAffinitydesigner />
        )}
      </div>
      <h1 className="card__heading">{cardHeading}</h1>
      <ul className="card__list">
        {cardItems.map((item) => (
          <li className="card__list_item">{item}</li>
        ))}
      </ul>
      <h2 className="card__project_no">{cardProjects}</h2>
    </div>
  );
}

export default Card;
