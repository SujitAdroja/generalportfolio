import React from "react";
import Card from "../components/Card";
import "../styles/designation.scss";

const Designation = () => {
  return (
    <div className="designation_container">
      <div className="container designation_container_cards">
        <Card
          cardBg={"#b68bed"}
          cardTextColor={"#532eb9"}
          cardHeadingFirst={"UI/UX & Graphic "}
          cardHeadingSecond={"Design"}
          cardProjects={"148+ Projects"}
          cardItems={[
            "Experience Design",
            "Interaction",
            "Illustration",
            "Animation",
          ]}
        />
        <Card
          cardBg={"#c4f8d3"}
          cardTextColor={"#1b646b"}
          cardHeadingFirst={"FrontEnd"}
          cardHeadingSecond={"Developer"}
          cardProjects={"148+ Projects"}
          cardItems={[
            "Experience Design",
            "Interaction",
            "Illustration",
            "Animation",
          ]}
        />
      </div>
    </div>
  );
};

export default Designation;
