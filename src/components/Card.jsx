import React from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { SiAffinitydesigner } from "react-icons/si";

function Card({
  cardBg,
  cardTextColor,
  cardHeadingFirst,
  cardHeadingSecond,
  cardItems,
  cardProjects,
}) {
  return (
    <div className="card " style={{ "--bg": cardBg, "--text": cardTextColor }}>
      <div className="card__icon ">
        {cardHeadingFirst === "FrontEnd" ? (
          <IoCodeSlashOutline />
        ) : (
          <SiAffinitydesigner />
        )}
      </div>
      <div className="card__heading_container">
        <h1 className="card__heading">{cardHeadingFirst}</h1>
        <h1 className="card__heading">{cardHeadingSecond}</h1>
      </div>

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
