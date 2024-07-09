import { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="w-[700px] mx-auto">
      <div className=" grid grid-cols-2 gap-10 items-center justify-center py-10">
        <Card
          cardBg={"#b68bed"}
          cardTextColor={"#532eb9"}
          cardHeading={"UI/UX & Graphic Design"}
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
          cardHeading={"FrontEnd Developer"}
          cardProjects={"148+ Projects"}
          cardItems={[
            "Experience Design",
            "Interaction",
            "Illustration",
            "Animation",
          ]}
        />
      </div>
      <div className="socials socials_section">
        <Socials />
      </div>
    </div>
  );
}

export default App;
