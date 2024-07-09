import React from "react";

function Card() {
  return (
    <div className="card container mx-auto">
      <div className="card__img"></div>
      <h1 className="card__heading">UI/UX & Graphic Design</h1>
      <ul className="card__list">
        <li className="card__list_item">Experience Design</li>
        <li className="card__list_item">Interaction</li>
        <li className="card__list_item">Illustration</li>
        <li className="card__list_item">Animation</li>
      </ul>
      <h2 className="card__project_no">148+ projects</h2>
    </div>
  );
}

export default Card;
